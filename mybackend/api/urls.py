from django.urls import path
from . import views

urlpatterns = [
    path('data/', views.get_data),  # Route for the API endpoint
]
