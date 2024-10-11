import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

interface Product {
  id: number;
  name: string;
  category: string;
  image: string;
}

interface ProductShowcaseProps {
  searchTerm: string;
  selectedCategory: string;
}

const products: Product[] = [
  { id: 1, name: 'Moroccan Saffron', category: 'spices', image: '/images/products/saffron.jpg' },
  { id: 2, name: 'Handwoven Berber Rug', category: 'textiles', image: '/images/products/rug.jpg' },
  { id: 3, name: 'Blue Ceramic Tagine', category: 'ceramics', image: '/images/products/tagine.jpg' },
  { id: 4, name: 'Argan Oil', category: 'oils', image: '/images/products/argan-oil.jpg' },
  // Add more products here
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

const ProductShowcase: React.FC<ProductShowcaseProps> = ({ searchTerm, selectedCategory }) => {
  const { t } = useTranslation();

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === '' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-3 gap-8"
      variants={container}
      initial="hidden"
      animate="show"
    >
      {filteredProducts.map((product) => (
        <motion.div
          key={product.id}
          className="bg-white rounded-lg shadow-md overflow-hidden"
          variants={item}
        >
          <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
            <p className="text-gray-600">{t(`productCategories.${product.category}`)}</p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default ProductShowcase;