from django.contrib import admin
from .models import Employee , Customer , User 
# Register your models here.
admin.site.register(User)
admin.site.register(Customer)
admin.site.register(Employee)

