import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import MenuCategory from './MenuCategory';
import { menuData } from '../data/menuData';

const MenuSection = () => {
  const [activeCategory, setActiveCategory] = useState('appetizers');
  const categories = Object.keys(menuData);

  return (
    <section id="menu" className="py-20 bg-luxury-charcoal">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
            Our <span className="text-luxury-accent">Menu</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Discover our curated selection of exceptional dishes, 
            crafted with passion and premium ingredients
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
                activeCategory === category
                  ? 'bg-luxury-accent text-luxury-dark shadow-lg'
                  : 'bg-luxury-slate text-white hover:bg-luxury-accent hover:text-luxury-dark'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </motion.div>

        {/* Menu Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5 }}
          >
            <MenuCategory 
              category={activeCategory}
              items={menuData[activeCategory]}
            />
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default MenuSection;