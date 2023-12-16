from question.models import Question
from django.db import models


class Quiz(models.Model):
    # 퀴즈의 구조와 진행을 관리하는 역할
    # 필요한 필드를 추가하여 역할과 책임을 정의합니다.

    # 퀴즈의 식별자를 나타내는 정수 필드
    quizId = models.IntegerField(primary_key=True)

    # 퀴즈를 시작한 사용자의 식별자를 나타내는 정수 필드
    userId = models.IntegerField()

    # 퀴즈에 포함된 질문들의 리스트를 나타내는 필드
    questions = models.ManyToManyField(Question, related_name='quizzes')

    def __str__(self):
        return f"Quiz {self.quizId} by User {self.userId}"

