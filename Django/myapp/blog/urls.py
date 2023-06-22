from django.urls import path
from . import views

app_name = 'blog'
urlpatterns = [
    #path( 패턴, 매핑 ) /blog/
    
    #글 조회
    path("",views.List.as_view(), name='list'),
    #글 상세조회
    path("detail/<int:pk>",views.Detail.as_view(),name='detail'),
    #글 작성
    path("write/",views.Write.as_view(), name='write'),
    #글 수정
    path("edit/<int:pk>",views.Update.as_view(), name='edit')
    #글 삭제
    #코멘트 작성
    #코멘트 삭제
]