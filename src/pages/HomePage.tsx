import { Hero } from '../components/Hero';
import { Categories } from '../components/Categories';
import { FeaturedProducts } from '../components/FeaturedProducts';
import { Newsletter } from '../components/Newsletter';
import { categories, products } from '../data/mockData';

interface HomePageProps {
  onShopNow: () => void;
  onCategoryClick: (slug: string) => void;
  onQuickView: (product: any) => void;
  onAddToWishlist: (productId: string) => void;
  isInWishlist: (productId: string) => boolean;
}

export const HomePage = ({
  onShopNow,
  onCategoryClick,
  onQuickView,
  onAddToWishlist,
  isInWishlist
}: HomePageProps) => {
  return (
    <div>
      <Hero onShopNow={onShopNow} />
      <Categories categories={categories} onCategoryClick={onCategoryClick} />
      <FeaturedProducts
        products={products}
        onQuickView={onQuickView}
        onAddToWishlist={onAddToWishlist}
        isInWishlist={isInWishlist}
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative h-96 rounded-3xl overflow-hidden">
            <img
              src="https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt="Style Banner"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40 flex items-center">
              <div className="max-w-xl px-12 space-y-6">
                <h2 className="text-5xl font-bold text-white">
                  Elevate Your Style
                </h2>
                <p className="text-xl text-white/90">
                  Premium quality meets modern design in every piece
                </p>
                <button
                  onClick={onShopNow}
                  className="px-8 py-4 bg-white text-black font-medium rounded-full hover:bg-gray-100 transition-colors"
                >
                  Explore Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Newsletter />
    </div>
  );
};
