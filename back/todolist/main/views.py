from django.shortcuts import render
from django.http import JsonResponse
from rest_framework import viewsets
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework import generics, permissions
from .models import Task
from .serializers import TaskSerializer, UserSerializer, User, CustomTokenObtainPairSerializer
from django.contrib.auth.models import User
from rest_framework.decorators import api_view
from rest_framework_simplejwt.tokens import RefreshToken
from django.contrib.auth import authenticate

class TaskListView(APIView):
    def get(self, request):
        # Fetch all tasks from the database
        tasks = Task.objects.all()
        serializer = TaskSerializer(tasks, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    
    def post(self, request):
        # Create a new task from POST data
        serializer = TaskSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class TaskView(APIView):
    def get(self, request):
        # Get the first Task instance or return an empty list if no data is present
        task_data = Task.objects.first()
        if task_data:
            serializer = TaskSerializer(task_data)
            return Response(serializer.data, status=status.HTTP_200_OK)
        else:
            return Response({"message": "No tasks found"}, status=status.HTTP_404_NOT_FOUND)   

class CategoryCreateView(APIView):
    def post(self, request):
        # Get category name from request data
        new_category = request.data.get("category")
        
        # Fetch the first Task instance (or create it if it doesn't exist)
        task_obj, created = Task.objects.get_or_create(id=1)
        
        if new_category and new_category not in task_obj.category:
            # Add the new category
            task_obj.category.append(new_category)
            task_obj.save()
            return Response({"message": "Category added"}, status=status.HTTP_201_CREATED)
        
        return Response({"error": "Category already exists or invalid data"}, status=status.HTTP_400_BAD_REQUEST)


class TaskAddView(APIView):
    def post(self, request):
        category = request.data.get("category")
        task_name = request.data.get("name")
        task_description = request.data.get("description")

        # Fetch the first Task instance (or create it if it doesn't exist)
        task_obj, created = Task.objects.get_or_create(id=1)

        # Check if category exists before adding the task
        if category in task_obj.category:
            new_task = {
                "category": category,
                "name": task_name,
                "description": task_description
            }
            task_obj.tasks.append(new_task)
            task_obj.save()
            return Response({"message": "Task added"}, status=status.HTTP_201_CREATED)
        
        return Response({"error": "Category does not exist"}, status=status.HTTP_400_BAD_REQUEST)  

# Generate JWT tokens
def get_tokens_for_user(user):
    refresh = RefreshToken.for_user(user)
    return {
        'refresh': str(refresh),
        'access': str(refresh.access_token),
    }

# REGISTER USER
@api_view(['POST'])
def register(request):
    username = request.data.get('username')
    password = request.data.get('password')

    if User.objects.filter(username=username).exists():
        return Response({'error': 'User already exists'}, status=status.HTTP_400_BAD_REQUEST)

    user = User.objects.create_user(username=username, password=password)
    return Response({'message': 'User created successfully'}, status=status.HTTP_201_CREATED)

# LOGIN USER
@api_view(['POST'])
def login(request):
    username = request.data.get('username')
    password = request.data.get('password')
    
    user = authenticate(username=username, password=password)

    if user:
        tokens = get_tokens_for_user(user)
        return Response(tokens)
    return Response({'error': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)