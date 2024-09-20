import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import ProductFeatures from "../components/product/product-features";
import ProductDetails from "../components/product/product-details";
import RelatedProducts from '../sections/related-products';
import { Product } from '../components/product/product';
import getProduct from '../api/product/product';
import { useParams } from 'react-router-dom';
import Spinner from "../components/spinner";
import { useState, useEffect } from 'react';
import Button from "../components/button";

export default function ProductDetailsPage() {
  const { slug } = useParams<{ slug: string }>();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      if (slug) {
        const data = await getProduct(slug);
        setProduct(data);
      }
    };

    fetchProduct();
  }, [slug]);

  if (!product) {
    return <LoadingSpinner />;
  }

  return (
    <>
        <div className="container max-w-screen-lg mx-auto px-4 py-8 sm:py-12 md:py-16 lg:py-20">
                <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
                    <ProductImage image={product.image} name={product.name} />
                    <ProductInfo product={product} />
                </div>
            </div>
        <RelatedProducts productSlug={product.slug} />
    </>
  );
}

function LoadingSpinner() {
  return (
    <div className="flex justify-center items-center h-screen">
      <Spinner />
    </div>
  );
}

function ProductImage({ image, name }: { image: string; name: string }) {
  return (
    <div className="w-full md:w-1/2 flex justify-center md:justify-start">
      <img 
        src={image} 
        alt={name} 
        className="w-full max-w-sm md:max-w-md h-auto rounded-lg"
      />
    </div>
  );
}

function ProductInfo({ product }: { product: Product }) {
  return (
    <div dir="ltr" className="w-full md:w-1/2">
      <h1 className="text-center md:text-right text-3xl md:text-4xl font-bold mb-4">{product.name}</h1>
      <ProductFeatures features={product.features} />
      <ProductDetails
        country={product.country}
        priceRange={product.priceRange}
        cbdRange={product.cbdRange}
        thcRange={product.thcRange}
      />
      <AddToCartButton />
    </div>
  );
}

function AddToCartButton() {
  return (
    <div className="mt-6 md:mt-8">
      <Button 
        buttonVariant="primary" 
        className="w-full"
      >
        <KeyboardArrowLeftIcon />
        הוסף לעגלה
      </Button>
    </div>
  );
}
