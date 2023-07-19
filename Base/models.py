from django.db import models
from ERP.models import ProvidedService
from account.models import Employee
# Create your models here.
class Brand(models.Model):
    logo = models.ImageField(upload_to='media/brands/logos')
    name = models.TextField(max_length=50)
    has_two_wheeler = models.BooleanField(default=True)
    has_four_wheeler = models.BooleanField(default=True)

    def __str__(self) -> str:
        return str(self.name)

class VehicalModel(models.Model):
    brand = models.ForeignKey(Brand , on_delete=models.CASCADE , related_name= 'brand')
    name = models.TextField(max_length=50)

    def __str__(self) -> str:
        return str(self.brand) + ' - ' +str(self.name)

class Booking(models.Model):
    model = models.ForeignKey(VehicalModel, null=True , blank=True , on_delete=models.SET_NULL)
    fule_type = models.CharField(max_length=50)
    phone = models.CharField(max_length=50, )
    issue = models.CharField(max_length=200, null=True , blank=True)
    
    def __str__(self) -> str:
        return str(self.phone) + " - " + str(self.issue)

class Contact(models.Model):
    name = models.CharField(max_length=50, null=True , blank=True)
    email = models.EmailField(max_length=50,null=True , blank=True)
    number = models.CharField(max_length=13,null=True , blank=True)
    message = models.CharField(max_length=500, null=True , blank=True) 
    
    def __str__(self) -> str:
        return str(self.name) + '-' + str(self.number)

class ServiceDisplay(models.Model):
    title = models.CharField(max_length=50, null=True , blank=True)
    slider_img1 = models.ImageField(upload_to='media/testimg', default= 'media/testimg/AviDP.jpeg')
    slider_img2 = models.ImageField(upload_to='media/testimg', default= 'media/testimg/AviDP.jpeg')
    what = models.CharField(max_length=3000, null=True , blank=True)
    what_img = models.ImageField(upload_to='media/testimg', default= 'media/testimg/AviDP.jpeg')
    how = models.CharField(max_length=3000, null=True , blank=True)
    how_img = models.ImageField(upload_to='media/testimg', default= 'media/testimg/AviDP.jpeg')
    when = models.CharField(max_length=3000, null=True , blank=True)
    when_img = models.ImageField(upload_to='media/testimg', default= 'media/testimg/AviDP.jpeg')
    why = models.CharField(max_length=3000, null=True , blank=True)
    why_img = models.ImageField(upload_to='media/testimg', default= 'media/testimg/AviDP.jpeg')
    def __str__(self) -> str:
        return self.title

class Testimonial(models.Model):
    name = models.CharField(max_length=50, null=True , blank=True)
    profession = models.CharField(max_length=50, null=True , blank=True)
    content = models.CharField(max_length=500, null=True , blank=True)
    img = models.ImageField(upload_to='media/testimg', default= 'media/testimg/AviDP.jpeg')
    on_display = models.BooleanField(default=False)

    def __str__(self) -> str:
        return self.name

