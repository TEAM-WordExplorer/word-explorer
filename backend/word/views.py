# word/views.py

from django.shortcuts import render
from .models import Word
from datetime import date
import random
def word_select(current_date):
    seed = f"{current_date}"
    random.seed(seed)
    # 데이터베이스에서 모든 단어를 가져옴
    all_words = Word.objects.all()

    # 단어의 수를 가져와서 난수의 범위로 설정
    num_words = len(all_words)

    # 난수 생성
    random_index = random.randint(0, num_words - 1)

    return random_index


def today_word(request):
    # 오늘 날짜에 해당하는 단어 조회
    current_date = date.today()

    today_word = word_select(current_date)
    
    context = {'today_word': today_word}
    return render(request, 'today_word.html', context)
