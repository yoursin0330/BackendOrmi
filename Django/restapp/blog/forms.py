from django import forms
from .models import Post, Comment, HashTag

# Form : html에 있는 form 태그
# Model Form : model을 사용하는  래그
class PostForm(forms.ModelForm):


    class Meta:
        model = Post
        fields = ['title', 'content']
        

class CommentForm(forms.ModelForm):


    class Meta:
        model = Comment
        fields = ['content'] #작성받을 화면
       

class HashTagForm(forms.ModelForm):


    class Meta:
        model = HashTag
        fields = ['name']