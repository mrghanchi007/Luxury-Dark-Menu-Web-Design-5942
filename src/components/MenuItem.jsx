import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiStar, FiLeaf, FiZap } = FiIcons;

const MenuItem = ({ item }) => {
  const [isHovered, setIsHovered] = useState(false);

  const getBadgeIcon = (badge) => {
    switch (badge) {
      case 'chef-special':
        return FiStar;
      case 'vegetarian':
        return FiLeaf;
      case 'spicy':
        return FiZap;
      default:
        return FiStar;
    }
  };

  const getBadgeColor = (badge) => {
    switch (badge) {
      case 'chef-special':
        return 'text-luxury-accent bg-luxury-accent/20';
      case 'vegetarian':
        return 'text-green-400 bg-green-400/20';
      case 'spicy':
        return 'text-red-400 bg-red-400/20';
      default:
        return 'text-luxury-accent bg-luxury-accent/20';
    }
  };

  return (
    <motion.div
      className="bg-luxury-slate rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 group"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ y: -5 }}
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
        
        {/* Badges */}
        {item.badges && item.badges.length > 0 && (
          <div className="absolute top-4 left-4 flex gap-2">
            {item.badges.map((badge, index) => (
              <div
                key={index}
                className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${getBadgeColor(badge)}`}
              >
                <SafeIcon icon={getBadgeIcon(badge)} className="text-xs" />
                <span className="capitalize">{badge.replace('-', ' ')}</span>
              </div>
            ))}
          </div>
        )}

        {/* Price */}
        <div className="absolute bottom-4 right-4 bg-luxury-accent text-luxury-dark px-3 py-1 rounded-full font-bold text-lg">
          ${item.price}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-serif font-semibold text-white group-hover:text-luxury-accent transition-colors duration-300">
            {item.name}
          </h3>
        </div>

        <p className="text-gray-400 text-sm leading-relaxed mb-4">
          {item.description}
        </p>

        {/* Ingredients */}
        {item.ingredients && (
          <div className="mb-4">
            <p className="text-xs text-gray-500 uppercase tracking-wide font-medium mb-2">
              Key Ingredients
            </p>
            <div className="flex flex-wrap gap-2">
              {item.ingredients.slice(0, 4).map((ingredient, index) => (
                <span
                  key={index}
                  className="text-xs bg-luxury-dark text-gray-300 px-2 py-1 rounded-md"
                >
                  {ingredient}
                </span>
              ))}
              {item.ingredients.length > 4 && (
                <span className="text-xs text-luxury-accent">
                  +{item.ingredients.length - 4} more
                </span>
              )}
            </div>
          </div>
        )}

        {/* Allergens */}
        {item.allergens && item.allergens.length > 0 && (
          <div className="border-t border-luxury-dark pt-3">
            <p className="text-xs text-gray-500 mb-1">
              <span className="font-medium">Allergens:</span> {item.allergens.join(', ')}
            </p>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default MenuItem;