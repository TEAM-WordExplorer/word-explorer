# models.py

from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager
from word.models import Word

class CustomUserManager(BaseUserManager):
    def create_user(self, email,name, password=None, **extra_fields):
        if not email:
            raise ValueError('The Email field must be set')
        email = self.normalize_email(email)
        user = self.model(email=email, name=name, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    

class User(AbstractBaseUser):
    email = models.EmailField(unique=True,default='@a.com')
    nickname = models.CharField(max_length=30, default='none')
    password = models.CharField(max_length=128, default='111')
    likeWords = models.ManyToManyField(Word, related_name='users', blank=True)

    
    objects = CustomUserManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['name']

    def __str__(self):
        return self.email

