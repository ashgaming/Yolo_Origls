# Generated by Django 5.0.1 on 2024-04-18 14:46

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Api', '0008_product_galary_product_originalprice_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='product',
            name='lastImage',
            field=models.ImageField(blank=True, default='/placeholder.jpg', null=True, upload_to=''),
        ),
    ]
