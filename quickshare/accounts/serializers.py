from rest_framework import serializers
from .models import CustomUser
from django.contrib.auth import authenticate
from .models import Profile


# Profile Serializer
class ProfileSerializer(serializers.ModelSerializer):
  extra_kwargs = {'image': {'required': False}}  

  class Meta:
    model = Profile 
    fields = ("user", "image")

# User Serializer
class UserSerializer(serializers.ModelSerializer):
  profile = ProfileSerializer()
  class Meta:
    model = CustomUser
    fields = ('id', 'username','first_name', 'last_name', 'email', 'profile')

# Register Serializer
class RegisterSerializer(serializers.ModelSerializer):
  class Meta:
    model = CustomUser
    fields = ('id', 'username', 'first_name', 'last_name', 'email', 'password')
    extra_kwargs = {'password': {'write_only': True}}

  def create(self, validated_data):
    user = CustomUser.objects.create_user(**validated_data)
    profile = Profile.objects.create(user=user)
    return user

# Login Serializer
class LoginSerializer(serializers.Serializer):
  email = serializers.EmailField()
  password = serializers.CharField()

  def validate(self, data):
    user = authenticate(**data)
    if user and user.is_active:
      return user
    raise serializers.ValidationError("Incorrect Credentials")