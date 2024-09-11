import React, { useState } from 'react';
import { Sliders, Search, ShoppingBag } from 'lucide-react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Slider } from '@/components/ui/slider';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const dresses = [
  { id: 1, name: "Summer Floral Dress", price: 59.99, color: "Blue", size: "M", category: "Casual" },
  { id: 2, name: "Elegant Evening Gown", price: 129.99, color: "Black", size: "S", category: "Formal" },
  { id: 3, name: "Boho Maxi Dress", price: 79.99, color: "White", size: "L", category: "Bohemian" },
  { id: 4, name: "Cocktail Party Dress", price: 89.99, color: "Red", size: "M", category: "Party" },
  { id: 5, name: "Office Pencil Dress", price: 69.99, color: "Navy", size: "L", category: "Work" },
  { id: 6, name: "Casual T-shirt Dress", price: 39.99, color: "Gray", size: "S", category: "Casual" },
];

const EcommercePage = () => {
  const [filteredDresses, setFilteredDresses] = useState(dresses);
  const [priceRange, setPriceRange] = useState([0, 150]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [sortOption, setSortOption] = useState('');

  const applyFilters = () => {
    let result = dresses.filter(dress => 
      dress.price >= priceRange[0] && dress.price <= priceRange[1] &&
      dress.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedCategory === '' || dress.category === selectedCategory)
    );

    if (sortOption === 'price-asc') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortOption === 'price-desc') {
      result.sort((a, b) => b.price - a.price);
    }

    setFilteredDresses(result);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-white p-6 shadow-lg">
        <h2 className="text-2xl font-bold mb-6">Filters</h2>
        
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">Price Range</label>
          <Slider
            defaultValue={[0, 150]}
            max={150}
            step={1}
            onValueChange={setPriceRange}
            className="mb-2"
          />
          <div className="flex justify-between text-sm text-gray-600">
            <span>${priceRange[0]}</span>
            <span>${priceRange[1]}</span>
          </div>
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
          <Select onValueChange={setSelectedCategory}>
            <SelectTrigger>
              <SelectValue placeholder="Select category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="">All</SelectItem>
              <SelectItem value="Casual">Casual</SelectItem>
              <SelectItem value="Formal">Formal</SelectItem>
              <SelectItem value="Bohemian">Bohemian</SelectItem>
              <SelectItem value="Party">Party</SelectItem>
              <SelectItem value="Work">Work</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">Sort By</label>
          <Select onValueChange={setSortOption}>
            <SelectTrigger>
              <SelectValue placeholder="Sort options" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="">Default</SelectItem>
              <SelectItem value="price-asc">Price: Low to High</SelectItem>
              <SelectItem value="price-desc">Price: High to Low</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Button onClick={applyFilters} className="w-full">
          Apply Filters
        </Button>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        <div className="mb-8 flex items-center">
          <Input
            type="text"
            placeholder="Search dresses..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-grow mr-4"
          />
          <Button onClick={applyFilters} className="flex items-center">
            <Search className="mr-2 h-4 w-4" /> Search
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDresses.map(dress => (
            <Card key={dress.id} className="overflow-hidden">
              <img src={`/api/placeholder/300/400`} alt={dress.name} className="w-full h-48 object-cover" />
              <CardContent className="p-4">
                <h3 className="text-lg font-semibold">{dress.name}</h3>
                <p className="text-gray-600">${dress.price.toFixed(2)}</p>
                <p className="text-sm text-gray-500">{dress.color} | Size: {dress.size}</p>
              </CardContent>
              <CardFooter className="bg-gray-50 p-4">
                <Button className="w-full flex items-center justify-center">
                  <ShoppingBag className="mr-2 h-4 w-4" /> Add to Cart
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EcommercePage;