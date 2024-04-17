from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view , permission_classes
from rest_framework.permissions import IsAuthenticated , IsAdminUser
from rest_framework_simplejwt.tokens import Token
from Api.models import Product , Review
from Api.serializer import ProductSerializer,ProductImageSerializer
from rest_framework import status

@api_view(['GET'])
def getProduct(request,pk):
    product = Product.objects.get(_id=pk)
    serializer = ProductSerializer(product,many=False)
    return Response(serializer.data)

@api_view(['GET'])
def getProducts(request):
    query = request.query_params.get('keyword')
    if query==None:
        query=''
    
 #   products = Product.objects.all()
    products = Product.objects.filter(name__icontains=query)
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
        originalPrice=120,
        brand='brand',
        countInStock=0,
        category='category',
        description='description',
        shortDescription='shortDescription',
        rating='0'
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
    product.originalPrice = data['originalPrice']
    product.brand = data['brand']
    product.countInStock = data['countInStock']
    product.category = data['category']
    product.description = data['description']
    product.shortDescription = data['shortDescription']
    product.image = data['image'][7:]
    product.galary = data['galary']

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
    serializer = ProductImageSerializer(product,many=False)
    return Response(serializer.data)

@api_view(['POST'])
def uploadGalary(request):
    data=request.data

    product_id = data['product_id']
    product = Product.objects.get(_id=product_id)

    product.galary = request.FILES.get('image')
    product.save()
    print(product.galary)
    serializer = ProductImageSerializer(product,many=False)
    return Response(serializer.data)

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def createProductReview(request,pk):
    user = request.user
    product = Product.objects.get(_id=pk)
    data = request.data

    alreadyExists = product.review_set.filter(user=user).exists()

    if alreadyExists:
        content = {'detail':'Product Review already exists'}
        return Response(content,status=status.HTTP_400_BAD_REQUEST)
    
    elif data['rating'] == 0:
        content = {'detail':'Please select your rating'}
        return Response(content,status=status.HTTP_400_BAD_REQUEST)
    
    else:
        review = Review.objects.create(
            user=user,
            product=product,
            name=user.first_name,
            rating=data['rating'],
            comment=data['comment']
        )

        reviews = product.review_set.all()
        product.numReviews = len(reviews)

        total = 0
        for i in reviews:
            total += i.rating 
        
        product.rating = total / len(reviews)
        product.save()

        return Response('review added')

