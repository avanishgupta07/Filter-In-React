import React, { useState } from 'react';
import { Search, ShoppingBag } from 'lucide-react';
import '../App.css';
// Example product data with image URLs
const products = [
  { id: 1, name: "Summer Floral Dress", price: 59.99, color: "Blue", size: "M", category: "Casual", imageUrl: "https://empirescollection.pk/wp-content/uploads/Baroque-women-new-dress-design-winters-collection-2024-raza-textiles-Pakistan-fashion-clothing-printed-3piece-winters.jpg" },
  { id: 2, name: "Elegant Evening Gown", price: 129.99, color: "Black", size: "S", category: "Formal", imageUrl: "https://empirescollection.pk/wp-content/uploads/kayseria-original-brand-dress-winters-empires-collection-new-women-dress-fashion-Pakistan-clothing-suit.jpg" },
  { id: 3, name: "Boho Maxi Dress", price: 79.99, color: "White", size: "L", category: "Bohemian", imageUrl: "https://empirescollection.pk/wp-content/uploads/laam-original-brand-women-new-dress-design-summer-collection-Pakistan-lawn-3-piece.jpg" },
  { id: 4, name: "Cocktail Party Dress", price: 89.99, color: "Red", size: "M", category: "Party", imageUrl: "https://empirescollection.pk/wp-content/uploads/Mariab-women-new-dress-design-eid-empires-collection-pakistan-top-brand-latest-dress-design-1.jpg" },
  { id: 5, name: "Office Pencil Dress", price: 69.99, color: "Navy", size: "L", category: "Work", imageUrl: "https://empirescollection.pk/wp-content/uploads/Aisling-original-brand-suit-buy-women-new-dress-designs-winters-collection-buy-online-2024-Pakistan-girls-online.jpg" },
  { id: 6, name: "Casual T-shirt Dress", price: 39.99, color: "Gray", size: "S", category: "Casual", imageUrl: "https://empirescollection.pk/wp-content/uploads/Zara-Shah-Jahan-women-new-red-dress-design-winters-collection-raza-textiles-Pakistan-fashion-clothing-embroidered-3piece-winters-2024.jpg" },
  { id: 7, name: "Summer Floral Dress-2", price: 99.99, color: "Blue", size: "M", category: "Casual", imageUrl: "https://empirescollection.pk/wp-content/uploads/Baroque-women-new-dress-design-winters-collection-2024-raza-textiles-Pakistan-fashion-clothing-printed-3piece-winters.jpg" },
  { id: 8, name: "Elegant Evening Gown-2", price: 140.99, color: "Black", size: "S", category: "Formal", imageUrl: "https://empirescollection.pk/wp-content/uploads/kayseria-original-brand-dress-winters-empires-collection-new-women-dress-fashion-Pakistan-clothing-suit.jpg" },
];

const EcommercePage = () => {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [priceRange, setPriceRange] = useState([0, 150]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [sortOption, setSortOption] = useState('');

  const applyFilters = () => {
    let result = products.filter(product =>
      product.price >= priceRange[0] && product.price <= priceRange[1] &&
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedCategory === '' || product.category === selectedCategory)
    );

    if (sortOption === 'price-asc') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortOption === 'price-desc') {
      result.sort((a, b) => b.price - a.price);
    }

    setFilteredProducts(result);
  };

  return (
    <div className="full-page">
      {/* Sidebar */}
      <aside className="sidebar">
        <h2>Filters</h2>

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">Price Range</label>
          <input
            type="range"
            min="0"
            max="150"
            value={priceRange[0]}
            onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
            className="w-full mb-2"
          />
          <input
            type="range"
            min="0"
            max="150"
            value={priceRange[1]}
            onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
            className="w-full"
          />
          <div className="flex justify-between text-sm text-gray-600 mt-2">
            <span>${priceRange[0]}</span>
            <span>${priceRange[1]}</span>
          </div>
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="block w-full border rounded-md p-2"
          >
            <option value="">All</option>
            <option value="Casual">Casual</option>
            <option value="Formal">Formal</option>
            <option value="Bohemian">Bohemian</option>
            <option value="Party">Party</option>
            <option value="Work">Work</option>
          </select>
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">Sort By</label>
          <select
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
            className="block w-full border rounded-md p-2"
          >
            <option value="">Default</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
          </select>
        </div>

        <button
          onClick={applyFilters}
          className="w-full bg-purple-600 text-white hover:bg-purple-700 py-2 rounded-md"
        >
          Apply Filters
        </button>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button onClick={applyFilters}>
            <Search className="mr-2 h-4 w-4" /> Search
          </button>
        </div>

        <div className="item-grid">
          {filteredProducts.map(product => (
            <div key={product.id} className="item-card">
              <img src={product.imageUrl} alt={product.name} />
              <div className="item-card-content">
                <h3>{product.name}</h3>
                <p className="item-price">${product.price.toFixed(2)}</p>
                <p className="item-details">{product.color} | Size: {product.size}</p>
                <button>
                  <ShoppingBag className="mr-2 h-4 w-4" /> Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default EcommercePage;
