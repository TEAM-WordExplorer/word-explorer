# Generated by Django 4.2.7 on 2023-12-12 05:29

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('user', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Word',
            fields=[
                ('wordId', models.IntegerField(primary_key=True, serialize=False)),
                ('text', models.CharField(max_length=255)),
            ],
        ),
        migrations.CreateModel(
            name='WordGameResult',
            fields=[
                ('resultId', models.AutoField(primary_key=True, serialize=False)),
                ('timestamp', models.DateTimeField(auto_now_add=True)),
                ('isCorrect', models.BooleanField()),
                ('userId', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='user.user')),
                ('wordId', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='word.word')),
            ],
        ),
    ]