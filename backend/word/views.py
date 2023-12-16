from word.models import Word
from django.shortcuts import get_object_or_404
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from user.models import User
from .models import Word
import googletrans
from rest_framework.decorators import api_view

def translator_to_eng(korean):
    translator=googletrans.Translator()
    english = translator.translate(korean, dest="en")
    print(english.text)
    return english.text


@csrf_exempt
@api_view(['POST'])
def like(request):
    print("like")
    try:
        user_id = request.data.get("userId")
        word_id = request.data.get("wId")
        print(word_id, user_id)
        # 사용자와 단어 객체 가져오기
        user = get_object_or_404(User, id=user_id)
        word = get_object_or_404(Word, wordId=word_id)  # 'wordId' 필드로 수정


        #print(word.text)
        #eng = translator_to_eng(word.text)
        #word.eng_text = eng_text
        #word.save()

        # 사용자의 likeWords에 단어 추가
        user.likeWords.add(word)

        return JsonResponse({'success': True, 'message': 'Word liked successfully'})
    except User.DoesNotExist:
        return JsonResponse({'success': False, 'error': 'User not found'}, status=404)
    except Word.DoesNotExist:
        return JsonResponse({'success': False, 'error': 'Word not found'}, status=404)
    

@csrf_exempt
@api_view(['POST'])
def like_word_list(request):
    print('.')
    try:
        # user_id = request.POST.get("userId")  # 이 부분을 변경합니다.
        # React에서 POST로 전송한 데이터는 request.data에서 가져옵니다.
        user_id = request.data.get("userId")
        print(user_id)
        user = get_object_or_404(User, id=user_id)
        like_words = user.likeWords.all()
        for word in like_words:
            print(word.text)
        serialized_words = [{'id': word.wordId, 'name': word.text}
                            for word in like_words]

        return JsonResponse({'liked_words': serialized_words})

    except User.DoesNotExist:
        return JsonResponse({'error': 'User not found'}, status=404)
