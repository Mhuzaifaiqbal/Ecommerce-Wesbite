import { motion } from "framer-motion";
import { useState } from "react";
import { ShoppingCart, Heart, Eye, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useCart } from "@/hooks/useCart";
import { toast } from "sonner";

interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  images: string[]; // changed from `image`
  rating: number;
  reviewCount: number; // changed from `reviews`
  badge?: string;
  category: string;
}

const featuredProducts: Product[] = [
  {
    id: "1",
    name: "iPhone 15 Pro Max",
    price: 1199,
    originalPrice: 1299,
    images: [
      "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=400&h=400&fit=crop",
    ],
    rating: 4.9,
    reviewCount: 2847,
    badge: "New",
    category: "Smartphones",
  },
  {
    id: "2",
    name: "MacBook Pro M3",
    price: 1999,
    images: [
      "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=400&h=400&fit=crop",
    ],
    rating: 4.8,
    reviewCount: 1523,
    badge: "Bestseller",
    category: "Laptops",
  },
  {
    id: "3",
    name: "AirPods Pro 2",
    price: 249,
    originalPrice: 299,
    images: [
      "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=400&h=400&fit=crop",
    ],
    rating: 4.7,
    reviewCount: 3456,
    badge: "Sale",
    category: "Audio",
  },
  {
    id: "4",
    name: "Apple Watch Ultra 2",
    price: 799,
    images: [
      "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=400&h=400&fit=crop",
    ],
    rating: 4.8,
    reviewCount: 987,
    category: "Wearables",
  },
];

export function FeaturedProducts() {
  const [hoveredProduct, setHoveredProduct] = useState<string | null>(null);
  const [previewProduct, setPreviewProduct] = useState<Product | null>(null);
  const { addItem } = useCart();

  const handleAddToCart = (product: Product) => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0] || "", // use first image
    });
    toast.success("Added to cart!", {
      description: `${product.name} has been added to your cart.`,
    });
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-gradient">Products</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover our most popular items, handpicked for their quality and
            innovation
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
              className="group relative"
            >
              <div className="glass-card overflow-hidden transition-all duration-300 group-hover:shadow-glow">
                {/* Badge */}
                {product.badge && (
                  <Badge
                    className={`absolute top-4 left-4 z-10 ${
                      product.badge === "Sale"
                        ? "bg-destructive"
                        : product.badge === "New"
                        ? "bg-success"
                        : "bg-primary"
                    }`}
                  >
                    {product.badge}
                  </Badge>
                )}

                {/* Wishlist */}
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity bg-background/50 backdrop-blur-sm"
                >
                  <Heart className="w-4 h-4" />
                </Button>

                {/* Image */}
                <div className="relative overflow-hidden aspect-square">
                  <img
                    src={product.images[0] || ""}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: hoveredProduct === product.id ? 1 : 0,
                    }}
                    className="absolute inset-0 bg-black/20 flex items-center justify-center"
                  >
                    <Button
                      variant="secondary"
                      size="sm"
                      className="bg-white/90 text-black hover:bg-white dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700"
                      onClick={() => setPreviewProduct(product)}
                    >
                      <Eye className="w-4 h-4 mr-2" />
                      Quick View
                    </Button>
                  </motion.div>
                </div>

                {/* Info */}
                <div className="p-6">
                  <div className="flex items-center gap-1 mb-2">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(product.rating)
                            ? "text-yellow-400 fill-yellow-400"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                    <span className="text-sm text-muted-foreground ml-2">
                      ({product.reviewCount})
                    </span>
                  </div>

                  <p className="text-sm text-primary mb-1">{product.category}</p>
                  <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>

                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-2xl font-bold">${product.price}</span>
                    {product.originalPrice && (
                      <span className="text-sm text-muted-foreground line-through">
                        ${product.originalPrice}
                      </span>
                    )}
                  </div>

                  <Button
                    className="w-full bg-gradient-primary hover:opacity-90 transition-opacity"
                    onClick={() => handleAddToCart(product)}
                  >
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Add to Cart
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Products */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button variant="outline" size="lg" className="glass border-primary/30 hover:bg-primary/10">
            View All Products
          </Button>
        </motion.div>
      </div>

      {/* Modal */}
      {previewProduct && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          onClick={() => setPreviewProduct(null)}
        >
          <div
            className="bg-background dark:bg-gray-900 rounded-lg max-w-3xl w-full p-6 relative shadow-lg dark:shadow-black/80"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setPreviewProduct(null)}
              className="absolute top-2 right-2 text-muted-foreground hover:text-destructive text-2xl font-bold"
              aria-label="Close Quick View"
            >
              ×
            </button>

            <div className="flex flex-col md:flex-row gap-6">
              <img
                src={previewProduct.images[0] || ""}
                alt={previewProduct.name}
                className="w-full md:w-1/2 object-cover rounded"
              />

              <div className="md:w-1/2 text-foreground dark:text-foreground">
                <h3 className="text-2xl font-semibold mb-2">
                  {previewProduct.name}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {previewProduct.category}
                </p>
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-3xl font-bold">
                    ${previewProduct.price}
                  </span>
                  {previewProduct.originalPrice && (
                    <span className="text-sm text-muted-foreground line-through">
                      ${previewProduct.originalPrice}
                    </span>
                  )}
                </div>
                <p className="mb-4 text-muted-foreground">
                  This is a premium product with excellent features and top
                  ratings.
                </p>
                <Button
                  className="bg-gradient-primary hover:opacity-90 transition-opacity"
                  onClick={() => {
                    handleAddToCart(previewProduct);
                    setPreviewProduct(null);
                  }}
                >
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  Add to Cart
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
