import { Layout } from "@/components/Layout";
import { ProductGrid } from "@/components/ProductGrid";
import { ProductFilters } from "@/components/ProductFilters";
import { SearchBar } from "@/components/SearchBar";
import { useState } from "react";

export default function Shop() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [priceRange, setPriceRange] = useState([0, 2000]);
  const [sortBy, setSortBy] = useState("featured");

  return (
    <Layout>
      <div className="pt-24 min-h-screen">
        <div className="container mx-auto px-6">
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
              Our <span className="text-gradient">Store</span>
            </h1>
            <p className="text-xl text-muted-foreground text-center max-w-2xl mx-auto">
              Discover amazing products with immersive 3D experiences
            </p>
          </div>

          <SearchBar 
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
          />

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mt-8">
            <div className="lg:col-span-1">
              <ProductFilters
                selectedCategory={selectedCategory}
                onCategoryChange={setSelectedCategory}
                priceRange={priceRange}
                onPriceRangeChange={setPriceRange}
                sortBy={sortBy}
                onSortChange={setSortBy}
              />
            </div>
            
            <div className="lg:col-span-3">
              <ProductGrid
                searchQuery={searchQuery}
                selectedCategory={selectedCategory}
                priceRange={priceRange}
                sortBy={sortBy}
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}