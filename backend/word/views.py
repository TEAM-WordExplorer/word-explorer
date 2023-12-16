from django.shortcuts import get_object_or_404
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from user.models import User

from rest_framework.decorators import api_view



@csrf_exempt
@api_view(['POST'])
def like_word_list(request):
    print('.')
    try:
        # user_id = request.POST.get("userId")  # 이 부분을 변경합니다.
        # React에서 POST로 전송한 데이터는 request.data에서 가져옵니다.
        user_id = request.data.get("userId")

        user = get_object_or_404(User, id=user_id)
        liked_words = user.likeWords.all()

        # You can now do something with the liked words, for example, serialize them to JSON
        # 'word.text'를 'word.name'으로 변경했습니다. React 측에서 'message'로 전송하고 있기 때문입니다.
        serialized_words = [{'id': word.id, 'name': word.name}
                            for word in liked_words]

        return JsonResponse({'liked_words': serialized_words})

    except User.DoesNotExist:
        return JsonResponse({'error': 'User not found'}, status=404)
