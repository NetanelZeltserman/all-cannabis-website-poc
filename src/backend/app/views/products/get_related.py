from app.repositories.related_products import RelatedProductsRepository
from django.shortcuts import get_object_or_404
from .base import BaseProductView
from app.models import Product

class GetRelatedProducts(BaseProductView):
    def get(self, request, product_slug):
        product = get_object_or_404(Product, slug=product_slug)
        related_products = RelatedProductsRepository(product).get_related_products()
        serializer = self.get_serializer(related_products, many=True)
        return self.get_response(serializer.data)
