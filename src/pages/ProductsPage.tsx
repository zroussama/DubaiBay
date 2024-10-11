import React, { useState } from 'react';
import { Search, Filter } from 'lucide-react';

const products = [
  { id: 1, name: 'Moroccan Spices Set', category: 'Spices', price: 29.99, image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
  { id: 2, name: 'Handwoven Berber Rug', category: 'Textiles', price: 299.99, image: 'https://images.unsplash.com/photo-1600166898405-da9535204843?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
  { id: 3, name: 'Ceramic Tagine Pot', category: 'Ceramics', price: 79.99, image: 'https://images.unsplash.com/photo-1578263798251-ec2a0b83a3a8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
  { id: 4, name: 'Leather Pouf', category: 'Leather goods', price: 129.99, image: 'https://images.unsplash.com/photo-1540932239986-30128078f3c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
  { id: 5, name: 'Argan Oil', category: 'Beauty', price: 39.99, image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
  { id: 6, name: 'Moroccan Tea Set', category: 'Kitchenware', price: 89.99, image: 'https://images.unsplash.com/photo-1577968897966-3d4325b36b61?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
];

const ProductsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [priceRange, setPriceRange] = useState({ min: 0, max: 1000 });

  const filteredProducts = products.filter(product => 
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (selectedCategory === '' || product.category === selectedCategory) &&
    product.price >= priceRange.min && product.price <= priceRange.max
  );

  return (
    <div className="bg-gray-100 min-h-screen py-12">
      <div className="container mt-6 mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-blue-900 text-center">Our Products</h1>

        {/* Search and Filter */}
        <div className="mb-8 flex flex-col md:flex-row justify-between items-center">
          <div className="relative w-full md:w-1/3 mb-4 md:mb-0">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full pl-10 pr-4 py-2 border rounded-lg"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
          </div>
          <div className="flex items-center space-x-4">
            <select
              className="border rounded-lg px-4 py-2"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option value="">All Categories</option>
              <option value="Spices">Spices</option>
              <option value="Textiles">Textiles</option>
              <option value="Ceramics">Ceramics</option>
              <option value="Leather goods">Leather goods</option>
              <option value="Beauty">Beauty</option>
              <option value="Kitchenware">Kitchenware</option>
            </select>
            <div className="flex items-center space-x-2">
              <Filter size={20} />
              <input
                type="number"
                placeholder="Min Price"
                className="border rounded-lg px-2 py-1 w-24"
                value={priceRange.min}
                onChange={(e) => setPriceRange({ ...priceRange, min: Number(e.target.value) })}
              />
              <span>-</span>
              <input
                type="number"
                placeholder="Max Price"
                className="border rounded-lg px-2 py-1 w-24"
                value={priceRange.max}
                onChange={(e) => setPriceRange({ ...priceRange, max: Number(e.target.value) })}
              />
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredProducts.map(product => (
            <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-2">{product.category}</p>
                <p className="text-blue-600 font-bold">${product.price.toFixed(2)}</p>
                <button className="mt-4 bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600 transition-colors">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Coming Soon Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold mb-8 text-blue-900 text-center">Coming Soon</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src="https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="Turkish Products" className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">Turkish Delights</h3>
                <p>Explore our upcoming collection of authentic Turkish products.</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src="https://images.unsplash.com/photo-1589519160732-57fc498494f8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="Venezuelan Products" className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">Venezuelan Treasures</h3>
                <p>Discover the rich culture of Venezuela through our future product line.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;