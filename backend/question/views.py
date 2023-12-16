#-*- coding:utf-8 -*-
from django.core.management.base import BaseCommand
from django.db.models import Count
from django.http import HttpResponse,JsonResponse, HttpResponseBadRequest  # 추가된 부분
from rest_framework.decorators import api_view

from datetime import date
import requests
import random
from django.shortcuts import render
from django.db import models
from django.utils import timezone
from word.models import Word
from user.models import User
from django.views.decorators.csrf import csrf_exempt

import urllib3
import json
# 오늘의 단어
# 1) 게임화면
# 2) 틀렸을때 -> 유사도를 검색해서 보여준다. & 뒤로가기 버튼
# 3) 맞혔을때 -> 답 보여주고, 하트 누를 수 있게


def word_select():
    current_date = date.today()
    seed = f"{current_date}"
    random.seed(seed)
    # 데이터베이스에서 모든 단어를 가져옴
    all_words = Word.objects.all()

    # 단어의 수를 가져와서 난수의 범위로 설정
    num_words = len(all_words)

    # 난수 생성
    random_index = random.randint(0, num_words - 1)
    
    try:
        today_word = Word.objects.get(wordId=random_index)
        today_word = str(today_word)
        idx=today_word.index(":")
        today_word = today_word[idx+2:]
        #print(today_word)

    except Word.DoesNotExist:
        print("해당 ID에 해당하는 객체가 존재하지 않습니다.")
    
    return today_word


def call_Word_Relation_API(first_word, second_word):
    # ETRI API endpoint 및 API key 설정

    openApiURL = "http://aiopen.etri.re.kr:8000/WiseWWN/WordRel"
    accessKey = "60e382da-3080-4a0f-819a-e8ff6e4bd650"

    firstWord = 'first_word'
    secondWord = 'second_word'

    requestJson = {
        "argument": {
            'first_word': firstWord,
            'second_word': secondWord,
        }
    }

    http = urllib3.PoolManager()
    response = http.request(
        "POST",
        openApiURL,
        headers={"Content-Type": "application/json; charset=UTF-8",
                "Authorization": accessKey},
        body=json.dumps(requestJson)
    )

    response_data = json.loads(response.data.decode("utf-8"))
    
    # 유사도 값 추출 (ETRI 알고리즘의 유사도 값)

    etri_similarity = response_data["return_object"]["WWN WordRelInfo"]["WordRelInfo"]["Similarity"][0]["SimScore"]
    print("ETRI Similarity:", etri_similarity)
    return etri_similarity



@csrf_exempt
@api_view(['POST'])
def play_game(request):
    try:
        data = request.data.get("word")
        print(data)
        today_word=word_select()
        #print(today_word)
        if data:
            # Call ETRI API
            sim=call_Word_Relation_API(data, today_word)
            print(sim)
            # Process the ETRI API result (replace with your logic)
            {
                "results": {"word": "data", "similarity": 0.8}
            }  # test
            return JsonResponse(result)

        return HttpResponseBadRequest("Invalid input data")
    except json.JSONDecodeError:
        return HttpResponseBadRequest("Invalid JSON data")


def incorrect_answer(request):
    # Add your logic for the incorrect answer view
    # test
    return render(request, 'question/incorrect_answer_template.html')


def correct_answer(request):
    # Add your logic for the correct answer view
    return render(request, 'question/correct_answer_template.html') # test

'''
@api_view(['GET'])
def get_csrf_token(request):
    # 클라이언트에게 CSRF 토큰을 반환
    return JsonResponse({'csrfToken': get_token(request)})
'''
