import { X, Plus, Minus, Heart, Ruler } from 'lucide-react';
import { useState } from 'react';

interface QuickViewProps {
  product: any;
  onClose: () => void;
  onAddToCart: (item: any) => void;
  onAddToWishlist: (productId: string) => void;
  isInWishlist: boolean;
}

export const QuickView = ({
  product,
  onClose,
  onAddToCart,
  onAddToWishlist,
  isInWishlist
}: QuickViewProps) => {
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState(product.colors?.[0] || '#000000');
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert('Please select a size');
      return;
    }

    onAddToCart({
      productId: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      size: selectedSize,
      color: selectedColor,
      quantity,
    });

    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-auto shadow-2xl">
        <div className="grid md:grid-cols-2 gap-8 p-8">
          <div className="space-y-4">
            <div className="relative aspect-[3/4] rounded-xl overflow-hidden bg-gray-100">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              {product.isNew && (
                <div className="absolute top-4 left-4 bg-black text-white text-xs font-medium px-3 py-1 rounded-full">
                  NEW
                </div>
              )}
            </div>
          </div>

          <div className="flex flex-col">
            <div className="flex items-start justify-between mb-6">
              <div>
                <p className="text-sm text-gray-500 uppercase tracking-wider mb-2">
                  {product.category}
                </p>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">
                  {product.name}
                </h2>
                <div className="flex items-center gap-3">
                  <span className="text-2xl font-bold">${product.price.toFixed(2)}</span>
                  {product.originalPrice && (
                    <span className="text-lg text-gray-500 line-through">
                      ${product.originalPrice.toFixed(2)}
                    </span>
                  )}
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            <p className="text-gray-600 mb-6">{product.description}</p>

            <div className="space-y-6 mb-8">
              {product.colors && (
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <label className="text-sm font-medium text-gray-900">Color</label>
                  </div>
                  <div className="flex gap-3">
                    {product.colors.map((color: string, index: number) => (
                      <button
                        key={index}
                        onClick={() => setSelectedColor(color)}
                        className={`w-10 h-10 rounded-full transition-all ${
                          selectedColor === color
                            ? 'ring-2 ring-offset-2 ring-gray-900 scale-110'
                            : 'hover:scale-105'
                        }`}
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>
                </div>
              )}

              {product.sizes && (
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <label className="text-sm font-medium text-gray-900">Size</label>
                    <button className="text-sm text-gray-600 hover:text-gray-900 flex items-center gap-1">
                      <Ruler size={14} />
                      Size Guide
                    </button>
                  </div>
                  <div className="grid grid-cols-5 gap-2">
                    {product.sizes.map((size: string) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`py-3 text-sm font-medium rounded-lg transition-all ${
                          selectedSize === size
                            ? 'bg-black text-white'
                            : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <div>
                <label className="text-sm font-medium text-gray-900 mb-3 block">
                  Quantity
                </label>
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
                  >
                    <Minus size={18} />
                  </button>
                  <span className="text-lg font-medium w-12 text-center">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
                  >
                    <Plus size={18} />
                  </button>
                </div>
              </div>
            </div>

            <div className="space-y-3 mt-auto">
              <button
                onClick={handleAddToCart}
                className="w-full py-4 bg-black text-white font-medium rounded-xl hover:bg-gray-900 transition-colors"
              >
                Add to Cart - ${(product.price * quantity).toFixed(2)}
              </button>
              <button
                onClick={() => onAddToWishlist(product.id)}
                className={`w-full py-4 font-medium rounded-xl transition-all flex items-center justify-center gap-2 ${
                  isInWishlist
                    ? 'bg-red-50 text-red-600 border border-red-600'
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                }`}
              >
                <Heart size={18} fill={isInWishlist ? 'currentColor' : 'none'} />
                {isInWishlist ? 'In Wishlist' : 'Add to Wishlist'}
              </button>
            </div>

            {product.material && (
              <div className="mt-6 pt-6 border-t border-gray-200 space-y-2 text-sm text-gray-600">
                <div className="flex justify-between">
                  <span>Material:</span>
                  <span className="font-medium text-gray-900">{product.material}</span>
                </div>
                <div className="flex justify-between">
                  <span>Fit:</span>
                  <span className="font-medium text-gray-900">{product.fit}</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
