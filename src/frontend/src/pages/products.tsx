import FeaturedProducts from '../sections/featured-products';
import ProductSelectionGuideBanner from '../sections/product-selection-guide-banner';
import ProductsList from '../sections/products-list';

export default function ProductsPage() {
  return (
    <>
      <ProductsList />
      <ProductSelectionGuideBanner />
      <FeaturedProducts />
    </>
  );
}
