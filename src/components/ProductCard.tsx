import { Heart, ShoppingBag } from 'lucide-react';
import { useState } from 'react';

interface ProductCardProps {
  product: {
    id: string;
    name: string;
    price: number;
    originalPrice?: number;
    image: string;
    category: string;
    isNew?: boolean;
    colors?: string[];
  };
  onQuickView: (product: any) => void;
  onAddToWishlist: (productId: string) => void;
  isInWishlist: boolean;
}

export const ProductCard = ({
  product,
  onQuickView,
  onAddToWishlist,
  isInWishlist
}: ProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <div
      className="group relative bg-white rounded-lg overflow-hidden cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onQuickView(product)}
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-gray-100">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        <div className={`absolute inset-0 bg-black/20 transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`} />

        {product.isNew && (
          <div className="absolute top-4 left-4 bg-black text-white text-xs font-medium px-3 py-1 rounded-full">
            NEW
          </div>
        )}

        {discount > 0 && (
          <div className="absolute top-4 right-4 bg-red-600 text-white text-xs font-medium px-3 py-1 rounded-full">
            -{discount}%
          </div>
        )}

        <div className={`absolute top-4 right-4 space-y-2 transition-all duration-300 ${
          isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
        } ${discount > 0 ? 'top-16' : ''}`}>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onAddToWishlist(product.id);
            }}
            className={`p-3 rounded-full backdrop-blur-xl transition-all ${
              isInWishlist
                ? 'bg-red-600 text-white'
                : 'bg-white/90 text-gray-900 hover:bg-white'
            }`}
          >
            <Heart size={18} fill={isInWishlist ? 'currentColor' : 'none'} />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onQuickView(product);
            }}
            className="p-3 bg-white/90 backdrop-blur-xl rounded-full hover:bg-white transition-all"
          >
            <ShoppingBag size={18} />
          </button>
        </div>

        <div className={`absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent transition-all duration-300 ${
          isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          {product.colors && product.colors.length > 0 && (
            <div className="flex gap-2">
              {product.colors.slice(0, 4).map((color, index) => (
                <div
                  key={index}
                  className="w-6 h-6 rounded-full border-2 border-white shadow-lg"
                  style={{ backgroundColor: color }}
                />
              ))}
              {product.colors.length > 4 && (
                <div className="w-6 h-6 rounded-full border-2 border-white shadow-lg bg-white flex items-center justify-center text-xs">
                  +{product.colors.length - 4}
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      <div className="p-4 space-y-2">
        <div className="text-xs text-gray-500 uppercase tracking-wider">
          {product.category}
        </div>
        <h3 className="font-medium text-gray-900 group-hover:text-gray-600 transition-colors">
          {product.name}
        </h3>
        <div className="flex items-center gap-2">
          <span className="text-lg font-semibold text-gray-900">
            ${product.price.toFixed(2)}
          </span>
          {product.originalPrice && (
            <span className="text-sm text-gray-500 line-through">
              ${product.originalPrice.toFixed(2)}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};
