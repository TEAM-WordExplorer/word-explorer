from django.urls import path
from word import views
from django.views.decorators.csrf import csrf_exempt
app_name = "word"

urlpatterns = [
    path('today-word/', views.today_word, name='today_word'),
]
