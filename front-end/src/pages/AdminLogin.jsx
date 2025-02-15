// to login admin

import React from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import Loderfun from "../components/Loader";

function AdminLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  // use state for loader
  const [loader, setLoader] = useState(false);

  const login = () => {
    setLoader(true);
    Axios.post("https://emp-api.jassy.in/superuserlogin/", {
      username: username,
      password: password,
    })
      .then((response) => {
        setLoader(false);
        //  if any AxiosError is there then it will show the message
        if (response.code) {
          Swal.fire({
            title: "Error",
            text: response.data.error,
            icon: "error",
            confirmButtonText: "Ok",
          });
        } else {
          Swal.fire({
            title: "Success",
            text: "You are logged in successfully",
            icon: "success",
            confirmButtonText: "Ok",
          }).then((result) => {
            if (result.isConfirmed) {
              // set a token in local storage
              localStorage.setItem("token", response.data.token);
              localStorage.setItem("admin", response.data.user);
              window.location.href = "/AdminPage";
            }
          });
        }
      })
      .catch((error) => {
        setLoader(false);
        console.log("this is error", error);
        // if confirmButton is clicked then navigate to login page
        Swal.fire({
          title: "Account not found",
          text: error.response.data.error,
          icon: "warning",
          confirmButtonText: "Retry",
        }).then((result) => {
          if (result.isConfirmed) {
            navigate("/admin");
          }
        });
      });
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card mt-5">
            <div className="card-header">
              <h3 className="text-center">Admin Login</h3>
            </div>
            {/* loader here if Loder state is true*/}
      {loader ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "50vh",
          }}
        >
          <Loderfun />
        </div>
      ) : (
            <div className="card-body">
              <div className="form-group">
                <label>User Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter User Name"
                  onChange={(e) => {
                    setUsername(e.target.value);
                  }}
                />
              </div>
              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter Password"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </div>
              <button className="btn btn-primary btn-block" onClick={login}>
                Login
              </button>

              <div className="form-group">
                <p>
                  <br></br>
                  <Link to="/login">User Login</Link>
                </p>
              </div>
            </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminLogin;
