# Generated by Django 5.0.1 on 2024-04-01 14:33

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Api', '0004_alter_product_image'),
    ]

    operations = [
        migrations.AlterField(
            model_name='product',
            name='image',
            field=models.ImageField(blank=True, default='/placeholder.jpg', null=True, upload_to=''),
        ),
    ]
