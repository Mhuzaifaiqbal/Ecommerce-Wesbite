
//   );
// }
import { useState, useMemo } from "react";
import { ProductModal } from "./ProductModal";
import { ProductCard } from "./ProductCard";
import { allProducts, Product as RawProduct } from "@/data/products";

// Define what ProductCard and ProductModal expect
interface UIProduct extends RawProduct {
  image: string;
  reviews: number;
}

interface ProductGridProps {
  searchQuery: string;
  selectedCategory: string;
  priceRange: [number, number];
  sortBy: string;
}

export function ProductGrid({
  searchQuery,
  selectedCategory,
  priceRange,
  sortBy,
}: ProductGridProps) {
  const [selectedProduct, setSelectedProduct] = useState<UIProduct | null>(null);

  const filteredAndSortedProducts = useMemo(() => {
    let filtered = allProducts.filter((product) => {
      const matchesSearch =
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory =
        selectedCategory === "all" || product.category === selectedCategory;

      const matchesPrice =
        product.price >= priceRange[0] && product.price <= priceRange[1];

      return matchesSearch && matchesCategory && matchesPrice;
    });

    switch (sortBy) {
      case "price-low":
        filtered.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        filtered.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case "newest":
        filtered.sort((a, b) => b.id.localeCompare(a.id));
        break;
      default:
        break;
    }

    // Convert RawProduct → UIProduct
    return filtered.map((product) => ({
      ...product,
      image: product.images[0] || "",      // map first image
      reviews: product.reviewCount         // map review count
    }));
  }, [searchQuery, selectedCategory, priceRange, sortBy]);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {filteredAndSortedProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onQuickView={() => setSelectedProduct(product)}
          />
        ))}
      </div>

      {filteredAndSortedProducts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground text-lg">
            No products found matching your criteria.
          </p>
        </div>
      )}

      <ProductModal
        product={selectedProduct}
        isOpen={!!selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </>
  );
}

