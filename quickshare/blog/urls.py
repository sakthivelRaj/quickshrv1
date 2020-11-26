from django.urls import path, include
from .api import PostAPI
from rest_framework.routers import DefaultRouter
from . import views 

router = DefaultRouter()
router.register('api/posts', PostAPI, basename='posts')


urlpatterns = [
	path('home/', views.home)
]

urlpatterns += router.urls


