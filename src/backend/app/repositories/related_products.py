from django.db.models import Q, Count
from app.models import Product

class RelatedProductsRepository:
    MAX_RELATED_PRODUCTS = 7

    def __init__(self, product: Product):
        self.product = product

    def get_related_products(self):
        original_features = self.product.features.all()
        related_products = Product.objects.filter(
            Q(features__in=original_features) | Q(country=self.product.country)
        ).exclude(id=self.product.id).distinct()

        return (
            related_products.annotate(
                matching_features_count=Count('features', filter=Q(features__in=original_features))
            )
            .order_by('-matching_features_count', 'country')[:self.MAX_RELATED_PRODUCTS]
        )