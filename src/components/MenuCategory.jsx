import React from 'react';
import { motion } from 'framer-motion';
import MenuItem from './MenuItem';

const MenuCategory = ({ category, items }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {items.map((item, index) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
        >
          <MenuItem item={item} />
        </motion.div>
      ))}
    </div>
  );
};

export default MenuCategory;