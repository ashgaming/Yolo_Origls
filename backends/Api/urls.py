from django.urls import path
from . import views
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('api/',views.getRoutes, name="routes"),
    path('products/',views.getProducts, name="routes"),
    path('product/<str:pk>',views.getProduct, name="routes"),
    
]

urlpatterns += static(settings.MEDIA_URL,document_root=settings.MEDIA_ROOT)

