from django.shortcuts import render
from django.http import HttpResponse
from django.views import View

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
        # context
        return render(request, 'blog/board.html')