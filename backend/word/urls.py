from django.urls import path
from word import views
from django.views.decorators.csrf import csrf_exempt
app_name = "word"

urlpatterns = [
    path('word_like/',views.like,name="like"), #단어 좋아요 처리 url
    path('word_quiz/', views.word_quiz, name="word_quiz"),  # 단어 퀴즈용

    path('like/', views.like_word_list, name='like_word_list'),
]
