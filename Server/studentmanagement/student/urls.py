from django.contrib import admin
from django.urls import path
from .import views

app_name = "student"

urlpatterns = [
    path('api/getAll', views.getAll, name="getAllProducts"),
    path('api/create', views.create, name="create"),
    path('api/edit', views.edit, name="edit"),   
    path('api/<int:id>', views.getStudent, name="getProduct"),
    path('api/<int:id>/delete', views.deleteStudent,
         name="deleteproduct")
]
