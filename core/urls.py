from django.urls import path

from .views import index, contato, produto, alimentacao, exercicios, progresso


urlpatterns = [
    path('', index, name='index'),
    path('contato', contato, name='contato'),
    path('produto/<int:pk>', produto, name='produto'),
    path('alimentacao', alimentacao, name='alimentacao'),
    path('exercicios', exercicios, name='exercicios'),
    path('progresso', progresso, name='progresso'),
]
