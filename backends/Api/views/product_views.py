from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view , permission_classes
from rest_framework.permissions import IsAuthenticated , IsAdminUser
from rest_framework_simplejwt.tokens import Token
from Api.models import Product
from Api.serializer import ProductSerializer
from rest_framework import status

@api_view(['GET'])
def getProduct(request,pk):
    product = Product.objects.get(_id=pk)
    serializer = ProductSerializer(product,many=False)
    return Response(serializer.data)

@api_view(['GET'])
def getProducts(request):
    products = Product.objects.all()
    serializer = ProductSerializer(products,many=True)
    return Response(serializer.data)

@api_view(['POST'])
@permission_classes([IsAdminUser])
def createProduct(request):
    user = request.user
    data=request.data
    print(data)
    product = Product.objects.create(
        user=user,
        name='name',
        price=100,
        brand='brand',
        countInStock=0,
        category='category',
        description='description',
        rating='0'
      #  name=data['name'],
      #  price=data['price'],
      #  brand= data['brand'],
      #  countInStock=data['countInStock'],
      #  catagory =data['catagory'],
      #  description=data['description'],
    )
    serializer = ProductSerializer(product,many=False)
    return Response(serializer.data)

@api_view(['PUT'])
@permission_classes([IsAdminUser])
def updateProduct(request,pk):
    data = request.data
    print(data)
    product = Product.objects.get(_id=pk)
    product.name = data['name']
    product.price = data['price']
    product.brand = data['brand']
    product.countInStock = data['countInStock']
    product.category = data['category']
    product.description = data['description']
    product.image = data['image']

    product.save()
    serializer = ProductSerializer(product,many=False)
    return Response(serializer.data)
    

@api_view(['DELETE'])
@permission_classes([IsAdminUser])
def deleteProduct(request,pk):
    product = Product.objects.get(_id=pk)
    product.delete()
    return Response('Product deleted')

@api_view(['POST'])
def uploadImage(request):
    data=request.data

    product_id = data['product_id']
    product = Product.objects.get(_id=product_id)

    product.image = request.FILES.get('image')
    product.save()
    return Response('Image was uploaded')
