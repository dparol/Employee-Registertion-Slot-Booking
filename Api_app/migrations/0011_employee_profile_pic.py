# Generated by Django 4.1.2 on 2022-10-19 06:49

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Api_app', '0010_slot_slot_row_alter_slot_booked_by'),
    ]

    operations = [
        migrations.AddField(
            model_name='employee',
            name='profile_pic',
            field=models.ImageField(blank=True, null=True, upload_to='profile_pic'),
        ),
    ]