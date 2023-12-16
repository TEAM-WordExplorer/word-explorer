from django.urls import path
from word import views
from django.views.decorators.csrf import csrf_exempt
app_name = "word"

urlpatterns = [
    path('word_like/',views.like,name="like"), #단어 좋아요 처리 url
    path('like/', views.like_word_list, name='like_word_list'),
]
