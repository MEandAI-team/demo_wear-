import { ProductCard } from './ProductCard';

interface FeaturedProductsProps {
  products: any[];
  onQuickView: (product: any) => void;
  onAddToWishlist: (productId: string) => void;
  isInWishlist: (productId: string) => boolean;
}

export const FeaturedProducts = ({
  products,
  onQuickView,
  onAddToWishlist,
  isInWishlist
}: FeaturedProductsProps) => {
  const featuredProducts = products.filter(p => p.isFeatured);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Collection</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Handpicked essentials that define contemporary style
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onQuickView={onQuickView}
              onAddToWishlist={onAddToWishlist}
              isInWishlist={isInWishlist(product.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
