from django.urls import path
from . import views
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('api/',views.getRoutes, name="api"),
    path('users/register/',views.registerUser, name="register"),
    path('products/',views.getProducts, name="products"),
    path('users/profile/',views.getUserProfile, name="userProfile"),
    path('users/',views.getUsers, name="users"),
    path('product/<str:pk>',views.getProduct, name="product"),
    path('users/login/', views.MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
]

urlpatterns += static(settings.MEDIA_URL,document_root=settings.MEDIA_ROOT)

