from django.core.management.base import BaseCommand
from django.db.models import Count
from django.http import HttpResponse
import requests
from django.shortcuts import render
from django.db import models
from django.utils import timezone
from word.models import Word, WordGameResult
from user.models import User

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


def calculate_similarity(word1, word2):
    # Add your logic to calculate similarity between words
    pass


def play_game(request, user_id, user_input, word_id):
    # 게임을 진행하는 함수
    if user_input:  # 사용자 input
        # 게임
        word = Word.objects.create(text=user_input)
        word.save()
        call_ETRI_Word_Relation_API(
            user_input, 'sense_id1', 'admin_input_word', 'sense_id2')

        return HttpResponse(f"User input word '{user_input}' successfully processed!")
    else:  # 관리자 input
        try:
            # 관리자가 하나 input(매일 교체)
            word = Word.objects.get(wordId=word_id)
            word_text = word.text

            # ETRI API 호출
            call_ETRI_Word_Relation_API(
                'admin_input_word', 'sense_id1', word_text, 'sense_id2')

            # 유사도 검사
            similarity_score = calculate_similarity(
                'admin_input_word', word_text)

            if similarity_score >= 1:
                result_message = "정답"
            else:
                result_message = f"유사도: {similarity_score}"

            # 게임 결과 저장
            result = WordGameResult.objects.create(
                wordId=word,
                userId=User.objects.get(userId=user_id),
                isCorrect=similarity_score >= 1
            )
            result.save()

            return HttpResponse(result_message)
        except ObjectDoesNotExist:
            return HttpResponse("Word not found")



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
