# Generated by Django 5.0.1 on 2024-04-01 14:50

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Api', '0005_alter_product_image'),
    ]

    operations = [
        migrations.AlterField(
            model_name='product',
            name='rating',
            field=models.DecimalField(decimal_places=2, max_digits=7, null=True),
        ),
    ]
