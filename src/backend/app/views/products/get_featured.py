from app.serializers.product import ProductSerializer
from rest_framework.response import Response
from rest_framework.views import APIView
from app.models import Product


class GetFeaturedProducts(APIView):
    def get(self, request):
        # Returns random products for simplicity
        products = Product.objects.order_by('?')[:6]
        serializer = ProductSerializer(products, many=True)
        return Response(serializer.data)