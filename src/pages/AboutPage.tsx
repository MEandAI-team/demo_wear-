import { Award, Leaf, Users, Globe } from 'lucide-react';

export const AboutPage = () => {
  return (
    <div className="pt-20 min-h-screen">
      <div className="relative h-96 bg-black">
        <img
          src="https://images.pexels.com/photos/297933/pexels-photo-297933.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="About Banner"
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div>
            <h1 className="text-6xl font-bold text-white mb-4">Our Story</h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto px-4">
              Crafting refined style for the modern gentleman
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="prose prose-lg max-w-none">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Refined Style. Redefined Confidence.
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-8">
            Founded with a vision to redefine men's fashion, REFINED brings together timeless elegance
            and contemporary design. We believe that great style isn't about following trends—it's about
            expressing confidence through carefully crafted pieces that stand the test of time.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed mb-8">
            Every garment in our collection is thoughtfully designed and meticulously crafted using
            premium materials sourced from around the world. From the first sketch to the final stitch,
            we maintain an unwavering commitment to quality, comfort, and style.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-16">
          <div className="p-8 bg-gray-50 rounded-2xl">
            <Award className="mb-4" size={32} />
            <h3 className="text-xl font-bold text-gray-900 mb-3">Quality Craftsmanship</h3>
            <p className="text-gray-600">
              Each piece is crafted with attention to detail, using premium materials
              and traditional techniques combined with modern innovation.
            </p>
          </div>

          <div className="p-8 bg-gray-50 rounded-2xl">
            <Leaf className="mb-4" size={32} />
            <h3 className="text-xl font-bold text-gray-900 mb-3">Sustainable Fashion</h3>
            <p className="text-gray-600">
              We're committed to reducing our environmental impact through ethical
              sourcing and responsible manufacturing practices.
            </p>
          </div>

          <div className="p-8 bg-gray-50 rounded-2xl">
            <Users className="mb-4" size={32} />
            <h3 className="text-xl font-bold text-gray-900 mb-3">Customer First</h3>
            <p className="text-gray-600">
              Your satisfaction is our priority. We provide exceptional service and
              support throughout your shopping journey.
            </p>
          </div>

          <div className="p-8 bg-gray-50 rounded-2xl">
            <Globe className="mb-4" size={32} />
            <h3 className="text-xl font-bold text-gray-900 mb-3">Global Inspiration</h3>
            <p className="text-gray-600">
              Our designs draw inspiration from cultures worldwide, creating a unique
              fusion of international style and local craftsmanship.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-black text-white py-20 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Join Our Journey</h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto mb-8">
            Be part of a community that values quality, style, and confidence. Experience
            the difference of refined menswear.
          </p>
          <button className="px-8 py-4 bg-white text-black font-medium rounded-full hover:bg-gray-100 transition-colors">
            Shop Collection
          </button>
        </div>
      </div>
    </div>
  );
};
