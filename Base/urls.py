from django.urls import path
from .views import home , unauth_error , service ,contact , get_models , get_brands , carrer , serdis
urlpatterns = [
    path('', home ,name='home_page'),
    path('unauthorized/', unauth_error ,name='unauth_page'),
    path('careers/', carrer ,name='carrer_page'),
    path('service/', service ,name='service_page'),
    path('contact/', contact ,name='contact_page'),
    path('serdis/<str:pk>', serdis ,name='serdis'),
    path('get/models/', get_models ,name='get_models'),
    path('get/brands/', get_brands ,name='get_brands'),
    # Delete This URL
  
    ]
