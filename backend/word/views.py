# word/views.py

from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt

from django.contrib.auth.decorators import login_required
from rest_framework.decorators import api_view


@login_required
@csrf_exempt
def like_word_list(request):
    try:
        user = request.user
        print(user)
        liked_words = user.likeWords.all()
        word_list = [{'word': word.word} for word in liked_words]
        print(word_list)
        return JsonResponse({'success': True, 'word_list': word_list})
    except Exception as e:
        return JsonResponse({'success': False, 'message': str(e)})
