from django.urls import path, include
from .views import PostAPI
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register('posts', PostAPI, basename='posts')
urlpatterns = router.urls


