from django.urls import path, include
from .views import RegisterAPI, LoginAPI, UserAPI, ProfileAPI
from knox import views as knox_views
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register('api/auth/profile', ProfileAPI, basename='profile')

urlpatterns = [
  path('api/auth', include('knox.urls')),
  path('api/auth/register', RegisterAPI.as_view()),
  path('api/auth/login', LoginAPI.as_view()),
  path('api/auth/user', UserAPI.as_view()),
  path('api/auth/logout', knox_views.LogoutView.as_view(), name='knox_logout'),

]

urlpatterns += router.urls

