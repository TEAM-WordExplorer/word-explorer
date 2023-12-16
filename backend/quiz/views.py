from django.shortcuts import render, redirect
from user.models import User
from django.contrib import messages
from django.contrib.auth.decorators import login_required


@login_required(login_url='user:login')
def quiz(request):
    user = request.user  # 현재 로그인한 사용자

    # 사용자가 저장한 단어 쌍 가져오기
    user_words = user.likeWords.all()

    # 사용자가 정답을 제출한 경우 처리

    # 다음 단어로 넘어가기 전에 현재까지의 퀴즈 수 세기
    quiz_count = QuizWordPair.objects.count()

    # 다음 단어 가져오기
    next_word = None
    if user_words.exists():
        # 사용자가 저장한 단어 중에서 무작위로 선택
        next_word = random.choice(user_words)

        # 해당 단어를 퀴즈로 저장
        QuizWordPair.objects.create(
            user=user,
            english_word=next_word.english_word,
            korean_word=next_word.korean_word,
        )

    context = {
        'next_word': next_word,
        'quiz_count': quiz_count,
    }

    return render(request, 'quiz/quiz.html', context)
