from rest_framework import generics, permissions
from rest_framework.response import Response
from rest_framework import viewsets
from knox.models import AuthToken
from .serializers import UserSerializer, RegisterSerializer, LoginSerializer
from .models import CustomUser
from django.shortcuts import get_object_or_404

# Register API
class RegisterAPI(generics.GenericAPIView):
  serializer_class = RegisterSerializer

  def post(self, request, *args, **kwargs):
    serializer = self.get_serializer(data=request.data)
    serializer.is_valid(raise_exception=True)
    user = serializer.save()
    return Response({
      "user": UserSerializer(user, context=self.get_serializer_context()).data,
      "token": AuthToken.objects.create(user)[1]
    })

# Login API
class LoginAPI(generics.GenericAPIView):
  serializer_class = LoginSerializer

  def post(self, request, *args, **kwargs):
    serializer = self.get_serializer(data=request.data)
    print("inside login api post func")
    serializer.is_valid(raise_exception=True)
    user = serializer.validated_data
    token = AuthToken.objects.create(user)[1]
    return Response({
      "user": UserSerializer(user, context=self.get_serializer_context()).data,
      "token": token
    })

# Get User API
class UserAPI(generics.RetrieveAPIView):
  permission_classes = [
    permissions.IsAuthenticated,
  ]
  serializer_class = UserSerializer

  def get_object(self):
    return self.request.user

class ProfileAPI(viewsets.ModelViewSet):
  serializer_class = UserSerializer
  permission_classs = [permissions.IsAuthenticated]
  queryset = CustomUser.objects.all()


