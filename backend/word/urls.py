from django.urls import path
from word import views
from django.views.decorators.csrf import csrf_exempt
app_name = "word"

urlpatterns = [
    path('like/', views.like_word_list, name='like_word_list'),
]
