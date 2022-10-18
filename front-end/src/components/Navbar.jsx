import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import React from 'react';


function logout() {
  localStorage.clear();
  sessionStorage.clear();
  window.location.href = '/login';
}


function NavbarBootstrap() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className='rounded mb-3'>
      <Container >
      {localStorage.getItem('admin') ? (
        <Link to='/' className='navbar-brand'>Emp Admin</Link>
        ) : 
        <Link to='/' className='navbar-brand'>Emp App</Link>
        }
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link className='nav-link' to="/list">Approved</Link>
            <Link className='nav-link' to="/PendingList">Pending </Link>
            <Link className='nav-link' to="/RejctedList">Rejected</Link>
            <Link className='nav-link' to="/add"> Register Employee </Link>
           
            {/* check if logined user is admin */}
            {localStorage.getItem('admin') ? (
            <Link className='nav-link' to="/SlotBooking"> Slot Booking </Link>
            
            ) : null}

            {localStorage.getItem('admin') ? (
            <Link className='nav-link' to="/AdminPage"> Admin Console </Link>
            ) : null}

          </Nav>

          {localStorage.getItem('token') ? (
                  <button className='btn btn-warning mx-3' onClick={()=> logout()}> Logout  </button>
          ) : (
           (
            // <Link  to="/login"><button className='btn btn-info mx-3'> Login  </button></Link>,
          <Link  to="/register"> <button className='btn btn-danger mx-3'> Register  </button></Link>
          )
          
          )} 
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}


export default NavbarBootstrap;