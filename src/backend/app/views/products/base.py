from app.serializers.product import ProductSerializer
from rest_framework.response import Response
from rest_framework.views import APIView

class BaseProductView(APIView):
    serializer_class = ProductSerializer
    
    def get_serializer(self, *args, **kwargs):
        return self.serializer_class(*args, **kwargs)
    
    def get_response(self, data):
        return Response(data)