from django.urls import path
from Api.views import order_views as views

urlpatterns = [
    path('add/',views.addOrderItems,name='order-Add')
]
