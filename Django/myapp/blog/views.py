from django.shortcuts import render, redirect
from django.http import HttpResponse
from django.views import View
from .models import Post
from .forms import PostForm

# Create your views here.
# 어떤 응답을 해 줄건지

# def index(request):
#     if request.method =='GET':
#         return HttpResponse('Index Page GET')
#     #나머지 요청 -> 에러. 예외처리!
#     return HttpResponse('404')

class Index(View):
    def get(self, request):
        # return HttpResponse('Index Page GET class')

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