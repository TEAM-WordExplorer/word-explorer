from django.db import models


class Word(models.Model):
    wordId = models.IntegerField(primary_key=True)
    text = models.CharField(max_length=255)

    def __str__(self):
        return f"Word {self.wordId}: {self.text}"


class WordGameResult(models.Model):
    resultId = models.AutoField(primary_key=True)
    # User 모델을 직접 import하지 않고, 문자열로 참조
    userId = models.ForeignKey('user.User', on_delete=models.CASCADE)
    wordId = models.ForeignKey(Word, on_delete=models.CASCADE)
    timestamp = models.DateTimeField(auto_now_add=True)
    isCorrect = models.BooleanField()

    def __str__(self):
        return f"Game Result {self.resultId}: Word {self.wordId}, User {self.userId}, Correct: {self.isCorrect}"
