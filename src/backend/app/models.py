from django.db import models

class Country(models.Model):
    name = models.CharField(max_length=255)
    slug = models.SlugField(unique=True)
    code = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name

class ProductFeature(models.Model):
    name = models.CharField(max_length=255)
    slug = models.SlugField(unique=True)
    color = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name


class Product(models.Model):
    name = models.CharField(max_length=255)
    slug = models.SlugField(unique=True)
    price_start_range = models.FloatField()
    price_end_range = models.FloatField()

    thc_start_range = models.FloatField()
    thc_end_range = models.FloatField()

    cbd_start_range = models.FloatField()
    cbd_end_range = models.FloatField()

    country = models.ForeignKey('Country', on_delete=models.CASCADE)
    in_stock = models.BooleanField(default=True)
    image = models.CharField(max_length=255)
    features = models.ManyToManyField('ProductFeature', blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name

