from django.db import models

# Create your models here.
class Student(models.Model):
    name=models.TextField()
    dob=models.DateTimeField()
    address=models.TextField()