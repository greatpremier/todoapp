from django.urls import path
from .views import TaskListView, CategoryCreateView, TaskAddView, TaskView, register, login

urlpatterns = [
    path('api/tasklist/', TaskListView.as_view(), name='task-view'),
    path('api/category/add/', CategoryCreateView.as_view(), name='add-category'),
    path('api/task/add/', TaskAddView.as_view(), name='add-task'),
    path('api/tasks/', TaskView.as_view(), name='task-viewing'),
    path('api/register/', register, name='register'),
    path('api/login/', login, name='login'),
]