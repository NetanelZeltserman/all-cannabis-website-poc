from rest_framework.pagination import PageNumberPagination
from .base import BaseProductView
from app.models import Product

class ProductPagination(PageNumberPagination):
    page_size = 5
    page_size_query_param = 'page_size'
    max_page_size = 100

class GetProducts(BaseProductView):
    pagination_class = ProductPagination

    def get(self, request):
        products = Product.objects.all()
        paginator = self.pagination_class()
        paginated_products = paginator.paginate_queryset(products, request)
        serializer = self.get_serializer(paginated_products, many=True)
        return paginator.get_paginated_response(serializer.data)