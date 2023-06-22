from django.shortcuts import render, redirect
from django.views import View
from django.views.generic import ListView, CreateView, DetailView, UpdateView
from .models import Post
from .forms import PostForm
from django.urls import reverse_lazy
# Create your views here.
# 어떤 응답을 해 줄건지

class List(ListView):
    model = Post
    template_name = 'blog/post_list.html' 
    #템플릿 이름 - >html 파일 위치
    context_object_name = 'posts'


class Write(CreateView):
    model=Post
    form_class=PostForm
    success_url = reverse_lazy('blog:list')


class Detail(DetailView):
    model=Post
    template_name='blog/post_detail.html' 
    context_object_name = 'post'


class Update(UpdateView):
    model = Post
    fields = ['title', 'content', 'writer' ]
    template_name = 'blog/post_edit.html'
    contect_object_name = 'edit'