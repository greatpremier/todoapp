from django.db import models
from django.contrib.auth.models import User

class Task(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    # Stores categories like ['programming', 'business', 'study']
    category = models.JSONField(default=list)
    due_date = models.DateField(blank=True, null=True)
    # Stores tasks related to categories. Each task contains a 'category', 'name', and 'description'
    tasks = models.JSONField(default=list)
    is_important = models.BooleanField(default=False)
    is_completed = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return f"Categories: {', '.join(self.category)}"
    
    def add_task(self, category_name, task_name, task_description):
        # Add a task to the tasks field, related to the given category
        self.tasks.append({
            "category": category_name,
            "name": task_name,
            "description": task_description
        })
        self.save()  