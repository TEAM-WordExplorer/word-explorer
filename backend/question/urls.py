from django.urls import path
from . import views
from django.views.decorators.csrf import csrf_exempt
from word.models import Word

app_name = 'question'


urlpatterns = [
    #path('get-csrf-token/', csrf_exempt(views.get_csrf_token),name='get_csrf_token'),
    path('game/', views.play_game, name='game'),
    
]
