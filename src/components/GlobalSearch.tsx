import { useState, useEffect } from "react";
import { Search, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { allProducts, Product } from "@/data/products";

const PLACEHOLDER_IMAGE = "https://via.placeholder.com/300";

interface GlobalSearchProps {
  isOpen: boolean;
  onClose: () => void;
}

export function GlobalSearch({ isOpen, onClose }: GlobalSearchProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<Product[]>([]);
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    if (!searchQuery.trim()) {
      setSearchResults([]);
      return;
    }

    setIsSearching(true);
    const timeoutId = setTimeout(() => {
      const results = allProducts.filter(
        (product) =>
          product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setSearchResults(results);
      setIsSearching(false);
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [searchQuery]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  const handleResultClick = () => {
    setSearchQuery("");
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm"
        onClick={onClose}
      >
        <div className="fixed top-20 left-1/2 transform -translate-x-1/2 w-full max-w-2xl px-4">
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            onClick={(e) => e.stopPropagation()}
            className="w-full"
          >
            <Card className="glass p-6">
              {/* Search Input */}
              <div className="relative mb-6">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                <Input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-10 glass border-primary/30 text-lg h-12"
                  autoFocus
                />
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={onClose}
                  className="absolute right-1 top-1/2 transform -translate-y-1/2 h-10 w-10 p-0"
                >
                  <X className="w-5 h-5" />
                </Button>
              </div>

              {/* Search Results */}
              <AnimatePresence>
                {searchQuery && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="space-y-2 max-h-96 overflow-y-auto"
                  >
                    {isSearching ? (
                      <div className="text-center py-8">
                        <div className="animate-spin w-6 h-6 border-2 border-primary border-t-transparent rounded-full mx-auto mb-2"></div>
                        <p className="text-muted-foreground">Searching...</p>
                      </div>
                    ) : searchResults.length === 0 ? (
                      <div className="text-center py-8">
                        <p className="text-muted-foreground">
                          No products found for "{searchQuery}"
                        </p>
                      </div>
                    ) : (
                      <>
                        <p className="text-sm text-muted-foreground mb-4">
                          {searchResults.length} result
                          {searchResults.length !== 1 ? "s" : ""} found
                        </p>
                        {searchResults.map((product) => (
                          <motion.div
                            key={product.id}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="group"
                          >
                            <Link
                              to={`/product/${product.id}`}
                              onClick={handleResultClick}
                              className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors"
                            >
                              <img
                                src={product.images[0] || PLACEHOLDER_IMAGE}
                                alt={product.name}
                                className="w-12 h-12 object-cover rounded-lg"
                                onError={(e) => {
                                  (e.target as HTMLImageElement).src =
                                    PLACEHOLDER_IMAGE;
                                }}
                              />
                              <div className="flex-1">
                                <h3 className="font-medium group-hover:text-primary transition-colors">
                                  {product.name}
                                </h3>
                                <p className="text-sm text-muted-foreground capitalize">
                                  {product.category}
                                </p>
                              </div>
                              <p className="font-semibold text-primary">
                                ${product.price}
                              </p>
                            </Link>
                          </motion.div>
                        ))}

                        {searchResults.length > 0 && (
                          <div className="text-center pt-4 border-t border-border">
                            <Link
                              to={`/shop?search=${encodeURIComponent(
                                searchQuery
                              )}`}
                              onClick={handleResultClick}
                              className="text-primary hover:underline"
                            >
                              View all results for "{searchQuery}"
                            </Link>
                          </div>
                        )}
                      </>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Quick Actions */}
              {!searchQuery && (
                <div className="space-y-4">
                  <h3 className="text-sm font-medium text-muted-foreground">
                    Quick Links
                  </h3>
                  <div className="grid grid-cols-2 gap-2">
                    <Link
                      to="/shop?category=smartphones"
                      onClick={handleResultClick}
                      className="p-2 text-sm hover:bg-muted/50 rounded-lg transition-colors"
                    >
                      📱 Smartphones
                    </Link>
                    <Link
                      to="/shop?category=laptops"
                      onClick={handleResultClick}
                      className="p-2 text-sm hover:bg-muted/50 rounded-lg transition-colors"
                    >
                      💻 Laptops
                    </Link>
                    <Link
                      to="/shop?category=audio"
                      onClick={handleResultClick}
                      className="p-2 text-sm hover:bg-muted/50 rounded-lg transition-colors"
                    >
                      🎧 Audio
                    </Link>
                    <Link
                      to="/shop?category=wearables"
                      onClick={handleResultClick}
                      className="p-2 text-sm hover:bg-muted/50 rounded-lg transition-colors"
                    >
                      ⌚ Wearables
                    </Link>
                  </div>
                </div>
              )}
            </Card>
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
