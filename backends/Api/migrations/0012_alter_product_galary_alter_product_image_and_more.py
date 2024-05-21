# Generated by Django 5.0.1 on 2024-05-20 07:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Api', '0011_alter_product_lastimage'),
    ]

    operations = [
        migrations.AlterField(
            model_name='product',
            name='galary',
            field=models.ImageField(blank=True, default='https://detroit-watch.s3.eu-north-1.amazonaws.com/placeholder.jpg', null=True, upload_to=''),
        ),
        migrations.AlterField(
            model_name='product',
            name='image',
            field=models.ImageField(blank=True, default='https://detroit-watch.s3.eu-north-1.amazonaws.com/placeholder.jpg', max_length=300, null=True, upload_to=''),
        ),
        migrations.AlterField(
            model_name='product',
            name='lastImage',
            field=models.ImageField(blank=True, default='https://detroit-watch.s3.eu-north-1.amazonaws.com/placeholder.jpg', max_length=300, null=True, upload_to=''),
        ),
    ]
