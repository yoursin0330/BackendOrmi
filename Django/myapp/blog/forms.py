from django import forms
from .models import Post

# Form : html에 있는 form 태그
# Model Form : model을 사용하는  래그
class PostForm(forms.ModelForm):


    class Meta:
        model = Post
        fields = ['title', 'content', 'writer']
        

