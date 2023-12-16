from django.urls import path
from . import views
from django.views.decorators.csrf import csrf_exempt
from word.models import Word

app_name = 'quiz'


urlpatterns = [
    path('', views.quiz, name='quiz'),
    #path('get-csrf-token/', csrf_exempt(views.get_csrf_token),name='get_csrf_token'),
]
