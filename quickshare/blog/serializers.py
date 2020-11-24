from .models import Post
from rest_framework import serializers
from accounts.serializers import UserSerializer

class PostSerializer(serializers.ModelSerializer):
	author = UserSerializer(required=False)
	class Meta:
		model = Post
		fields = ("id", "title", "content", "date_posted", "author")
		extra_kwargs = {"author":{"required": False}}
