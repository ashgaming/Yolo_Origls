from django.shortcuts import render
from django.http import JsonResponse
from .Products import products
from rest_framework.response import Response
from rest_framework.decorators import api_view

# Create your views here.
@api_view(['GET'])
def getRoutes(request):
    return Response(products)

@api_view(['GET'])
def getProducts(request):
    return Response(products)