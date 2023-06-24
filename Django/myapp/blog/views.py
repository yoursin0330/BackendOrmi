from django.shortcuts import render, redirect
from django.views import View
from .models import Post, Comment, HashTag
from .forms import PostForm, CommentForm, HashTagForm
from django.urls import reverse_lazy
# Create your views here.
# 어떤 응답을 해 줄건지

class ListView(View):
    def get(self, request):
        posts = Post.objects.all()

        context = {
            'posts':posts
        }
        return render(request, 'blog/post_list.html', context)


class DetailView(View):
    def get(self, request, post_id):
        post = Post.objects.get(pk=post_id)

        comments = Comment.objects.filter(post=post)

        hashtags = HashTag.objects.filter(post=post)

        # Form
        comment_form = CommentForm()
        hashtag_form = HashTagForm()

        context ={
            'post':post,
            'comments':comments,
            'hashtags':hashtags,
            'comment_form':comment_form,
            'hashtag_form':hashtag_form,
        }

        return render(request,'blog/post_detail.html',context)
    

class WriteView(View):
    def get(self, request):
        form = PostForm(request.POST)
        return render(request, 'blog/post_form.html',{"form":form})
    def post(self, request):
        form = PostForm(request.POST)
        if form.is_valid():
            title = form.cleaned_data['title']
            content = form.cleaned_data['content']
            post = Post.objects.create(title=title, content=content)
            return redirect('blog:list')
        
