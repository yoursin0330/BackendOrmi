from typing import Any, Dict
from django.shortcuts import render, redirect
from django.views import View
from django.views.generic import ListView, CreateView,  UpdateView, DeleteView #DetailView
from .models import Post, Comment
from .forms import PostForm, CommentForm
from django.urls import reverse_lazy
# Create your views here.
# 어떤 응답을 해 줄건지

# def index(request):
#     if request.method =='GET':
#         return HttpResponse('Index Page GET')
#     #나머지 요청 -> 에러. 예외처리!
#     return HttpResponse('404')

class Index(View):
    def get(self, request):
        #데이터베이스에 접근해서 값을 가져와야 합니다.
        post_objs = Post.objects.all()
        # context = 데이터베이스에서 가져온 값
        context = {
            "posts" : post_objs
        }
        # print(post_objs)
        return render(request, 'blog/board.html', context)
    
    # write
    # post - form
    # 글 작성 화면
    def write(request):
        if request.method =='POST':
            #form 확인
            form = PostForm(request.POST)
            #post일 떄는 사용자가 준 값을 다 넣어서 생성
            if form.is_valid():
                post = form.save()
                return redirect('blog:list')
        #아닐때는 새롭게 form을 생성해준다
        form = PostForm()
        return render(request, 'blog/write.html',{'form' : form} )
    

### Post
# Django 자체의 클래스 뷰 기능도 강력하고 편리
# django.views.generic -> ListView
class List(ListView):
    model = Post #모델이 어떤 건지 보여주고
    template_name='blog/post_list.html'
    context_object_name = 'posts'
    


class Write(CreateView):
    model = Post
    form_class = PostForm
    success_url = reverse_lazy('blog:list') #성공시 보내줄 url


# class Detail(DetailView):
#     model = Post
#     template_name = 'blog/post_detail.html'
#     context_object_name = 'post'


class Update(UpdateView):
    model = Post
    template_name = 'blog/post_edit.html'
    fields = ['title', 'content']
    success_url = reverse_lazy('blog:list')


    #initial 기능 -> form 안에 값을 미리 넣어주기 위해서
    def get_initial(self) -> Dict[str, Any]:
        initial = super().get_initial() # UpdateView(generic view)에서 제공하는 initial(딕셔너리 형태)
        post = self.get_object() # pk 기반으로 객체를 가져옴
        initial['title'] = post.title
        initial['content'] = post.content
        return initial
    
    def get_success_url(self): 
        post = self.get_object() #pk  기반으로 현재 객체 가져오기
        return reverse_lazy('blog:detail', kwargs={'pk' : post.pk})
    
    # # get_absolute_url
    # def get_absolute_url(self):

class Delete(DeleteView):
    model = Post
    success_url = reverse_lazy('blog:list')

class DetailView(View):
    
    def get(self, request, post_id):
        # list -> object 상세 페이지 -> 상세 페이지 하나의 내용

        # 데이터베이스 방문(POST 아님)
        # 해당 글
        post = Post.objects.get(pk=post_id)
        # 댓글
        comments = Comment.objects.all(post=post)
        return response

### Comment
class CommentWrite(View):
    # GET, POST에 따라 알아서 함수 작동됨
    # def get(self, request):
    #     pass
    def post(self, request, post_id): 
        #post의 id를 외부에서 이 함수가 동작할 때 받아옴
        form = CommentForm(request.POST)
        if form.is_valid():
            content = form.cleaned_data['content']
            #우측은 input에 있는  fields의 content
            #좌측은 새로 만든 변수
            post = Post.objects.get(pk = post_id)
            # 연결될 수 있도록. 그냥 숫자 넣으면 연결X
            # id를 통해 Post 객체를 불러와서 넣어줌

            #댓글 객체 생성
            comment = Comment.objects.create(post=post, content=content)
        return redirect('blog:detail', pk=post_id)


