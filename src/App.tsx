import { useState } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Cart } from './components/Cart';
import { QuickView } from './components/QuickView';
import { HomePage } from './pages/HomePage';
import { ShopPage } from './pages/ShopPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { useCart } from './hooks/useCart';
import { useWishlist } from './hooks/useWishlist';

type Page = 'home' | 'shop' | 'about' | 'contact';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [cartOpen, setCartOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [showWishlistAlert, setShowWishlistAlert] = useState(false);

  const { cart, addToCart, updateQuantity, removeFromCart, total, itemCount } = useCart();
  const { wishlist, toggleWishlist, isInWishlist } = useWishlist();

  const handleAddToCart = (item: any) => {
    addToCart(item);
  };

  const handleAddToWishlist = (productId: string) => {
    toggleWishlist(productId);
    setShowWishlistAlert(true);
    setTimeout(() => setShowWishlistAlert(false), 2000);
  };

  const handleQuickView = (product: any) => {
    setSelectedProduct(product);
  };

  const handleShopNow = () => {
    setCurrentPage('shop');
  };

  const handleCategoryClick = () => {
    setCurrentPage('shop');
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <HomePage
            onShopNow={handleShopNow}
            onCategoryClick={handleCategoryClick}
            onQuickView={handleQuickView}
            onAddToWishlist={handleAddToWishlist}
            isInWishlist={isInWishlist}
          />
        );
      case 'shop':
        return (
          <ShopPage
            onQuickView={handleQuickView}
            onAddToWishlist={handleAddToWishlist}
            isInWishlist={isInWishlist}
          />
        );
      case 'about':
        return <AboutPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header
        cartCount={itemCount}
        wishlistCount={wishlist.length}
        onCartClick={() => setCartOpen(true)}
        onWishlistClick={() => alert('Wishlist feature coming soon!')}
        currentPage={currentPage}
        onNavigate={(page) => setCurrentPage(page as Page)}
      />

      {renderPage()}

      <Footer />

      <Cart
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        cart={cart}
        onUpdateQuantity={updateQuantity}
        onRemove={removeFromCart}
        total={total}
      />

      {selectedProduct && (
        <QuickView
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          onAddToCart={handleAddToCart}
          onAddToWishlist={handleAddToWishlist}
          isInWishlist={isInWishlist(selectedProduct.id)}
        />
      )}

      {showWishlistAlert && (
        <div className="fixed bottom-8 right-8 bg-black text-white px-6 py-4 rounded-xl shadow-2xl z-50 animate-slide-up">
          <p className="font-medium">Added to wishlist!</p>
        </div>
      )}
    </div>
  );
}

export default App;
