from django.shortcuts import render
from rest_framework import viewsets
from .serializers import PostSerializer
from rest_framework import status
from .models import Post
from rest_framework.response import Response
from rest_framework import permissions
from django.shortcuts import get_object_or_404

# Create your views here.

class PostAPI(viewsets.ModelViewSet):
	serializer_class = PostSerializer
	permission_classs = [permissions.IsAuthenticated]
	queryset = Post.objects.all()

	def perform_create(self, serializer):
		serializer.save(author=self.request.user)
	
	def retrieve(self, request, pk=None):
		post = get_object_or_404(self.queryset, pk=pk)
		serializer = PostSerializer(post)
		return Response(serializer.data)

	def update(self, request, pk=None):
		post = get_object_or_404(self.queryset, pk=pk)
		if(post.author != self.request.user):
			return Response(status=status.HTTP_403_FORBIDDEN)			
		serializer = PostSerializer(post, data=request.data)
		serializer.is_valid(raise_exception=True)
		serializer.save()
		return Response(serializer.data, status=status.HTTP_201_CREATED)

	def destroy(self, request, pk=None):
		post = get_object_or_404(self.queryset, pk=pk)
		if(post.author != self.request.user):
			return Response(status=status.HTTP_403_FORBIDDEN)
		post.delete()
		return Response(status=status.HTTP_204_NO_CONTENT)