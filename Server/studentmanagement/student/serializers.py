from rest_framework import serializers
from .models import Student
import ast

class StudentSerializer(serializers.ModelSerializer):
    class Meta:
        model=Student
        fields=('id','name','dob','address')