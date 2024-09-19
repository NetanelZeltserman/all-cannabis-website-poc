from django.urls import path
from .views.products.get_featured import GetFeaturedProducts

urlpatterns = [
    path('products/featured/', GetFeaturedProducts.as_view(), name='get_featured_products'),
]
