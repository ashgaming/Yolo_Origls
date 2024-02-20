from django.urls import path
from Api.views import user_views as views

urlpatterns = [
    path('register/',views.registerUser, name="register"),
    path('profile/',views.getUserProfile, name="userProfile"),
    path('',views.getUsers, name="users"),
    path('login/', views.MyTokenObtainPairView.as_view(), name='token_obtain_pair'),

]


