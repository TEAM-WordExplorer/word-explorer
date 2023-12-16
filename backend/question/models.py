from django.db import models


class Question(models.Model):
    # 질문에 필요한 필드를 추가할 수 있습니다.

    # 질문의 식별자를 나타내는 정수 필드
    questionId = models.IntegerField(primary_key=True)

    # 질문 텍스트를 나타내는 문자열 필드
    text = models.TextField()

    def __str__(self):
        return f"Question {self.questionId}: {self.text}"

# 질문 모델을 정의합니다.
