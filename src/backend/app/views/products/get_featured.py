from .base import BaseProductView
from app.models import Product

class GetFeaturedProducts(BaseProductView):
    def get(self, request):
        products = Product.objects.order_by('?')[:6]
        serializer = self.get_serializer(products, many=True)
        return self.get_response(serializer.data)