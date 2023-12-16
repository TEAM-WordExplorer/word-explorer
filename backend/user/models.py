
from word.models import Word

from django.db import models
from django.contrib.auth.models import AbstractBaseUser


class User(AbstractBaseUser):
    email = models.EmailField(unique=True, default="")
    nickname = models.CharField(max_length=30)
    password = models.CharField(max_length=128)
    likeWords = models.ManyToManyField(Word, related_name='users', blank=True)


    USERNAME_FIELD = 'email'


    def likeWord(self, word):
        self.likeWords.add(word)

    def __str__(self):
        return f"User {self.userId}"

