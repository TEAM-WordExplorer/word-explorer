from django.contrib import admin
from django.urls import include, path
from django.conf.urls.static import static
from django.conf import settings

urlpatterns = [
    path("admin/", admin.site.urls),
    path("question/", include("question.urls")),  # 매일 한단어 추측
    path("user/", include("user.urls")),
    path("", include("word.urls")),  # 단어 시험

] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
