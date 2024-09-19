from app.serializers.product_feature import ProductFeatureSerializer
from app.utils.range_utils import get_price_range, get_percentage_range
from app.serializers.country import CountrySerializer
from rest_framework import serializers
from app.models import Product


class ProductSerializer(serializers.ModelSerializer):
    price_range = serializers.SerializerMethodField()
    thc_range = serializers.SerializerMethodField()
    cbd_range = serializers.SerializerMethodField()
    country = CountrySerializer()
    features = ProductFeatureSerializer(many=True, read_only=True)

    class Meta:
        model = Product
        fields = ['id', 'name', 'slug', 'price_range', 'thc_range', 'cbd_range', 'country', 'in_stock', 'image', 'features']

    def get_price_range(self, obj):
        return get_price_range(obj.price_start_range, obj.price_end_range)

    def get_thc_range(self, obj):
        return get_percentage_range(obj.thc_start_range, obj.thc_end_range)

    def get_cbd_range(self, obj):
        return get_percentage_range(obj.cbd_start_range, obj.cbd_end_range)

    def to_representation(self, instance):
        representation = super().to_representation(instance)
        for field in ['price', 'thc', 'cbd']:
            representation[f'{field}_range'] = getattr(self, f'get_{field}_range')(instance)
            representation.pop(f'{field}_start_range', None)
            representation.pop(f'{field}_end_range', None)
        return representation