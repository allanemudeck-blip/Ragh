import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Filter, Pill, ArrowRight, AlertCircle, MessageCircle } from 'lucide-react';
import { PRODUCTS, PRODUCT_CATEGORIES, ProductCategory } from '../../constants/products';
import { getWhatsAppLink } from '../../constants/whatsapp';

export default function ProductCatalog() {
  const [activeCategory, setActiveCategory] = useState<ProductCategory | 'All'>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = PRODUCTS.filter(product => {
    const matchesCategory = activeCategory === 'All' || product.category === activeCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         product.composition.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="products" className="py-24 bg-transparent relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-96 medical-grid opacity-5" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-medical-600 font-bold tracking-widest uppercase text-sm mb-3">Product Portfolio</h2>
          <h3 className="text-4xl font-bold text-gray-900 mb-6">Our Pharmaceutical Range</h3>
          <p className="text-gray-600">
            A comprehensive catalog of high-quality formulations across major therapeutic areas, sourced from reliable global partners.
          </p>
        </div>

        {/* Controls */}
        <div className="flex flex-col lg:flex-row gap-6 mb-12 items-center justify-between">
          <div className="relative w-full lg:max-w-md group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-medical-600 transition-colors" />
            <input 
              type="text"
              placeholder="Search products or ingredients..."
              className="w-full pl-12 pr-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-medical-500/20 focus:border-medical-500 transition-all"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="flex gap-2 overflow-x-auto pb-4 lg:pb-0 w-full lg:w-auto scrollbar-hide">
            {['All', ...PRODUCT_CATEGORIES].map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat as any)}
                className={`px-6 py-3 rounded-xl text-sm font-bold whitespace-nowrap transition-all ${
                  activeCategory === cat 
                  ? 'bg-medical-600 text-white shadow-lg shadow-medical-600/20' 
                  : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => (
              <motion.div
                layout
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                whileHover={{ 
                  y: -8,
                  scale: 1.02,
                  transition: { duration: 0.2 }
                }}
                className="glass-card rounded-3xl p-8 transition-all flex flex-col group h-full"
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="w-12 h-12 bg-medical-50 text-medical-600 rounded-xl flex items-center justify-center">
                    <Pill className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-gray-100 text-gray-500 px-3 py-1 rounded-full">
                    {product.category}
                  </span>
                </div>
                
                <h4 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h4>
                <div className="flex-1">
                  <p className="text-xs font-bold text-medical-600 mb-4 uppercase tracking-wide">
                    {product.composition}
                  </p>
                  <p className="text-sm text-gray-600 leading-relaxed mb-6">
                    {product.indication}
                  </p>
                </div>

                <div className="flex flex-col gap-3 pt-6 border-t border-gray-50">
                  <button className="flex items-center gap-2 text-sm font-bold text-gray-900 group-hover:text-medical-600 transition-colors uppercase tracking-widest">
                    View Specifications
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <a 
                    href={getWhatsAppLink(`Hello, I want to order ${product.name}`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full bg-[#25D366] text-white py-3 rounded-xl text-xs font-bold hover:bg-[#20bd5a] transition-all shadow-lg shadow-[#25D366]/10"
                  >
                    <MessageCircle className="w-4 h-4 fill-current" />
                    Order on WhatsApp
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-20 bg-gray-50 rounded-3xl">
            <AlertCircle className="w-12 h-12 text-gray-300 mx-auto mb-4" />
            <h4 className="text-xl font-bold text-gray-900">No products found</h4>
            <p className="text-gray-500 mt-2">Try adjusting your filters or search terms.</p>
          </div>
        )}
      </div>
    </section>
  );
}
