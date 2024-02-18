from django.shortcuts import render
from django.http import HttpResponse
from django.http import JsonResponse
from student.models import Student
import json
from datetime import datetime, date, time, timedelta
from django.views.decorators.csrf import csrf_exempt

from student.serializers import StudentSerializer
# Create your views here.
@csrf_exempt
def create(request):
    input = json.loads(request.body)
    id=input['id']
    if(id is None or id==''):
        newStudent=Student(
            name=input['name'],
            dob=datetime.now(),
            address=input['address']
        )
        newStudent.save()
        return JsonResponse({"error":False,"message":"Student Created Successfully","data":newStudent.id})

    else:
        try:
            student=Student.objects.get(pk=id)

        except Student.DoesNotExist:
            return JsonResponse({"error":True,"message":"Given student Does not exsit","data":None})
        student.name=input['name']
        student.address=input['address']
        student.save()
        return JsonResponse({"error":False,"message":"Student Updated Successfully","data":student.id})
   

def getAll(request):
    students=Student.objects.all()
    
    serializer=StudentSerializer(students,many=True)
    return JsonResponse({"error":False,"message":"Data Fetched Success","data":serializer.data})

def getStudent(request,id):
    students=Student.objects.get(pk=id)
    serializer=StudentSerializer(students)
    return JsonResponse({"error":False,"message":"Data Fetched Success","data":serializer.data})


def deleteStudent(request,id):
    return JsonResponse({"error":True,"message":"Delete Failed","data":None})



@csrf_exempt
def edit(request):
    input = json.loads(request.body)
    id=input['id']
    #get the student

    try:
        student=Student.objects.get(pk=id)

    except Student.DoesNotExist:
        return JsonResponse({"error":True,"message":"Given student Does not exsit","data":None})
    
    student.name=input['name']

    student.address=input['address']
    student.save()
    return JsonResponse({"error":False,"message":"Student Updated Successfully","data":student.id})