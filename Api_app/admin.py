from django.contrib import admin
from .models import Employee, Account

# Register your models here.

class EmployeeAdmin(admin.ModelAdmin):
    list_display = ('name', 'age', 'email', 'designation')
    list_filter = ('name', 'age', 'email', 'designation')
    search_fields = ('name', 'age', 'email', 'designation')

admin.site.register(Employee, EmployeeAdmin)

class AccountAdmin(admin.ModelAdmin):
    list_display = ('email', 'username')
    list_filter = ('email', 'username')
    search_fields = ('email', 'username')

admin.site.register(Account, AccountAdmin)


