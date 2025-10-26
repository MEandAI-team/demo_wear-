import { Sparkles, Shirt, User, Scissors, Wind, Layers, CloudRain, Star, Footprints, Watch } from 'lucide-react';

const iconMap: Record<string, any> = {
  Sparkles, Shirt, User, Scissors, Wind, Layers, CloudRain, Star, Footprints, Watch
};

interface CategoriesProps {
  categories: Array<{
    id: string;
    name: string;
    slug: string;
    icon: string;
  }>;
  onCategoryClick: (slug: string) => void;
}

export const Categories = ({ categories, onCategoryClick }: CategoriesProps) => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Shop by Category</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our curated collections designed for the modern man
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {categories.map((category) => {
            const Icon = iconMap[category.icon];
            return (
              <button
                key={category.id}
                onClick={() => onCategoryClick(category.slug)}
                className="group p-6 bg-gray-50 rounded-2xl hover:bg-black hover:text-white transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                <div className="flex flex-col items-center space-y-3">
                  <div className="p-4 bg-white group-hover:bg-white/10 rounded-xl transition-colors">
                    {Icon && <Icon size={28} />}
                  </div>
                  <span className="text-sm font-medium text-center">{category.name}</span>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};
