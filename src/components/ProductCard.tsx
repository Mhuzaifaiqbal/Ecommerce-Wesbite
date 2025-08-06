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
  image: string;
  rating: number;
  reviews: number;
  badge?: string;
  category: string;
  description: string;
  features: string[];
}

interface ProductCardProps {
  product: Product;
  onQuickView: () => void;
}

export function ProductCard({ product, onQuickView }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const { addItem } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image
    });
    toast.success("Added to cart!", {
      description: `${product.name} has been added to your cart.`
    });
  };

  const handleLike = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsLiked(!isLiked);
    toast.success(isLiked ? "Removed from favorites" : "Added to favorites", {
      description: `${product.name}`
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative cursor-pointer"
      onClick={onQuickView}
    >
      <div className="glass-card overflow-hidden transition-all duration-500 group-hover:shadow-glow transform group-hover:-translate-y-2">
        {/* Product Badge */}
        {product.badge && (
          <Badge 
            className={`absolute top-4 left-4 z-10 ${
              product.badge === 'Sale' ? 'bg-destructive' :
              product.badge === 'New' ? 'bg-success' :
              'bg-primary'
            }`}
          >
            {product.badge}
          </Badge>
        )}

        {/* Action Buttons */}
        <div className="absolute top-4 right-4 z-10 flex flex-col gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={handleLike}
            className={`opacity-0 group-hover:opacity-100 transition-all duration-300 bg-background/50 backdrop-blur-sm transform translate-x-8 group-hover:translate-x-0 ${
              isLiked ? 'text-red-500' : ''
            }`}
            style={{ transitionDelay: '0ms' }}
          >
            <Heart className={`w-4 h-4 ${isLiked ? 'fill-current' : ''}`} />
          </Button>
          
          <Button
            variant="ghost"
            size="icon"
            onClick={(e) => {
              e.stopPropagation();
              onQuickView();
            }}
            className="opacity-0 group-hover:opacity-100 transition-all duration-300 bg-background/50 backdrop-blur-sm transform translate-x-8 group-hover:translate-x-0"
            style={{ transitionDelay: '100ms' }}
          >
            <Eye className="w-4 h-4" />
          </Button>
        </div>

        {/* Product Image */}
        <div className="relative overflow-hidden aspect-square">
          <img 
            src={product.image} 
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          
          {/* Hover Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end justify-center pb-4"
          >
            <Button
              variant="secondary"
              size="sm"
              className="bg-white/90 text-black hover:bg-white backdrop-blur-sm"
              onClick={(e) => {
                e.stopPropagation();
                onQuickView();
              }}
            >
              <Eye className="w-4 h-4 mr-2" />
              Quick View
            </Button>
          </motion.div>
        </div>

        {/* Product Info */}
        <div className="p-6">
          <div className="flex items-center gap-1 mb-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star 
                key={i} 
                className={`w-4 h-4 ${
                  i < Math.floor(product.rating) 
                    ? 'text-yellow-400 fill-yellow-400' 
                    : 'text-gray-300'
                }`} 
              />
            ))}
            <span className="text-sm text-muted-foreground ml-2">
              ({product.reviews})
            </span>
          </div>

          <p className="text-sm text-primary mb-1 capitalize">{product.category}</p>
          <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors line-clamp-2">
            {product.name}
          </h3>
          
          <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
            {product.description}
          </p>
          
          <div className="flex items-center gap-2 mb-4">
            <span className="text-2xl font-bold">${product.price}</span>
            {product.originalPrice && (
              <span className="text-sm text-muted-foreground line-through">
                ${product.originalPrice}
              </span>
            )}
          </div>

          <Button 
            className="w-full bg-gradient-primary hover:opacity-90 transition-all duration-300 transform hover:scale-105"
            onClick={handleAddToCart}
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="flex items-center gap-2"
            >
              <ShoppingCart className="w-4 h-4" />
              Add to Cart
            </motion.div>
          </Button>
        </div>
      </div>
    </motion.div>
  );
}