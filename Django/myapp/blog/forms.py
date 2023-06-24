from django import forms
from .models import Post, Comment, HashTag

# Form : html에 있는 form 태그
# Model Form : model을 사용하는  래그

class PostForm(forms.ModelForm):


    class Meta:
        model = Post
        fields = ['title', 'content']
        #form에서 입력받을 필드 설정


class CommentForm(forms.ModelForm):


    class Meta:
        model = Comment
        fields = ['content']


class HashTagForm(forms.ModelForm):


    class Meta:
        model = HashTag
        fields = ['name']