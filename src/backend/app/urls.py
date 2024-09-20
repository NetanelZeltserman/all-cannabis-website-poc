from app.views.products.get_related import GetRelatedProducts
from app.views.products.get_featured import GetFeaturedProducts
from app.views.products.get_products import GetProducts
from app.views.products.get_product import GetProduct
from django.urls import path

urlpatterns = [
    path('products/', GetProducts.as_view(), name='get_products'),
    path('products/featured/', GetFeaturedProducts.as_view(), name='get_featured_products'),
    path('products/<slug:product_slug>/', GetProduct.as_view(), name='get_product_by_slug'),
    path('products/<slug:product_slug>/related/', GetRelatedProducts.as_view(), name='get_related_products_by_slug'),
]
