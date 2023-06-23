from django.db import models

# Create your models here.
class Post(models.Model):
    title = models.CharField(max_length=30) #text가 저장됨
    content = models.TextField()
    writer = models.CharField(max_length=10)
    created_at = models.DateTimeField(auto_now_add=True)
    #자동으로 현재 시간을 사용하겠다!(처음으로 생성 시 저장)
    updated_at = models.DateTimeField(auto_now=True)
    #업데이트되거나 수정 될때 그 시간을 저장함(수정돼서 저장할때마다)


class Comment(models.Model):
    post = models.ForeignKey('Post', on_delete=models.CASCADE) 
    # Post 참조하겠다
    content = models.TextField()
    writer = models.CharField(max_length=10)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'Comment on {self.post.title}'

class HashTag(models.Model):
    post = models.ForeignKey("Post", on_delete=models.CASCADE)
    name = models.CharField(max_length=10)

    def __str__(self):
        return self.name
    