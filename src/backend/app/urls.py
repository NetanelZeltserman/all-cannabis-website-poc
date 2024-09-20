from .views.products.get_featured import GetFeaturedProducts
from .views.products.get import GetProducts
from django.urls import path

urlpatterns = [
    path('products/featured/', GetFeaturedProducts.as_view(), name='get_featured_products'),
    path('products/', GetProducts.as_view(), name='get_products'),

]
