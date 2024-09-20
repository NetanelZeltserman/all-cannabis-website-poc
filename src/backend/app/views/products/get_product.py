from django.shortcuts import get_object_or_404
from .base import BaseProductView
from app.models import Product

class GetProduct(BaseProductView):
    def get(self, request, product_slug):
        product = get_object_or_404(Product, slug=product_slug)
        serializer = self.get_serializer(product)
        return self.get_response(serializer.data)