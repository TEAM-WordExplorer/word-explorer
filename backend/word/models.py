from django.db import models


class Word(models.Model):
    wordId = models.IntegerField(primary_key=True)
    text = models.CharField(max_length=255)
    #eng_text=models.CharField(max_length=255)
    def __str__(self):
        return f"Word {self.wordId}: {self.text}"

