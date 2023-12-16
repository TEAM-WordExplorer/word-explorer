from django.core.management.base import BaseCommand
from django.db.models import Count
from django.http import HttpResponse,JsonResponse, HttpResponseBadRequest  # 추가된 부분

import requests
from django.shortcuts import render
from django.db import models
from django.utils import timezone
from word.models import Word, WordGameResult
from user.models import User
from django.views.decorators.csrf import csrf_exempt
import json
# 오늘의 단어
# 1) 게임화면
# 2) 틀렸을때 -> 유사도를 검색해서 보여준다. & 뒤로가기 버튼
# 3) 맞혔을때 -> 답 보여주고, 하트 누를 수 있게


def call_ETRI_Word_Relation_API(first_word, first_sense_id, second_word, second_sense_id):
    # ETRI 어휘 간 관계 분석 API를 이용하여 두 단어 간의 관계를 검사하는 함수

    # ETRI API endpoint 및 API key 설정
    api_url = "http://aiopen.etri.re.kr:8000/WiseWWN/WordRel"
    access_key = "60e382da-3080-4a0f-819a-e8ff6e4bd650"

    # API 호출을 위한 입력 데이터 구성
    request_json = {
        "argument": {
            'first_word': first_word,
            'first_sense_id': first_sense_id,
            'second_word': second_word,
            'second_sense_id': second_sense_id
        }
    }

    # ETRI API 호출
    response = requests.post(
        api_url,
        headers={"Content-Type": "application/json; charset=UTF-8",
                 "Authorization": access_key},
        json=request_json
    )

    if response.status_code == 200:
        result = response.json()
        # Process the result as needed
        print("[ETRI API Response] " + str(result))
    else:
        # Handle the error scenario
        print(f"API 불러오기 실패: {response.status_code}")
        print("[ETRI API Error Response] " + str(response.text))


@csrf_exempt
def play_game(request):
    try:
        data = json.loads(request.body)
        user_input = data.get('user_input')
        print(data)
        if user_input:
            # Call ETRI API
            #call_ETRI_Word_Relation_API(user_input, 'sense_id_1', 'example_word_2', 'sense_id_2')

            # Process the ETRI API result (replace with your logic)
            {
                "results": {"word": "apple", "similarity": 0.8}
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
