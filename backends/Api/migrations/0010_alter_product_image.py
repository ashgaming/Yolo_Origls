# Generated by Django 5.0.1 on 2024-05-18 08:25

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Api', '0009_product_lastimage'),
    ]

    operations = [
        migrations.AlterField(
            model_name='product',
            name='image',
            field=models.ImageField(blank=True, default='/placeholder.jpg', max_length=300, null=True, upload_to=''),
        ),
    ]
