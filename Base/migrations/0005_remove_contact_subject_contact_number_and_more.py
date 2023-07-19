# Generated by Django 4.1.3 on 2023-07-08 19:15

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Base', '0004_servicedisplay_why_servicedisplay_why_img'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='contact',
            name='subject',
        ),
        migrations.AddField(
            model_name='contact',
            name='number',
            field=models.CharField(blank=True, max_length=13, null=True),
        ),
        migrations.AlterField(
            model_name='contact',
            name='email',
            field=models.EmailField(blank=True, max_length=50, null=True),
        ),
    ]