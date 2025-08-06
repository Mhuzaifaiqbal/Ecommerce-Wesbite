// import { useState } from "react";
// import { useParams } from "react-router-dom";
// import { Layout } from "@/components/Layout";
// import { Button } from "@/components/ui/button";
// import { Card } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import { Heart, Share2, Star, Plus, Minus, ShoppingCart, Truck, Shield, RotateCcw } from "lucide-react";
// import { motion } from "framer-motion";
// import { useCart } from "@/hooks/useCart";
// import { useToast } from "@/hooks/use-toast";

// // Mock data (same as before)
// const mockProduct = {
//   id: "1",
//   name: "iPhone 15 Pro",
//   price: 999,
//   originalPrice: 1199,
//   rating: 4.8,
//   reviewCount: 2847,
//   images: [
//     "/api/placeholder/600/600",
//     "/api/placeholder/600/600",
//     "/api/placeholder/600/600",
//     "/api/placeholder/600/600"
//   ],
//   category: "Smartphones",
//   brand: "Apple",
//   inStock: true,
//   stockCount: 23,
//   description: "The iPhone 15 Pro features a titanium design, A17 Pro chip, and advanced camera system with 5x telephoto zoom.",
//   features: [
//     "6.1-inch Super Retina XDR display",
//     "A17 Pro chip with 6-core GPU",
//     "Pro camera system with 5x telephoto",
//     "Action button for quick actions",
//     "USB-C connectivity",
//     "All-day battery life"
//   ],
//   specifications: {
//     "Display": "6.1-inch Super Retina XDR",
//     "Chip": "A17 Pro",
//     "Storage": "128GB, 256GB, 512GB, 1TB",
//     "Camera": "48MP Main, 12MP Ultra Wide, 12MP Telephoto",
//     "Video": "4K Dolby Vision up to 60 fps",
//     "Battery": "Up to 23 hours video playback",
//     "Weight": "187 grams",
//     "Colors": "Natural Titanium, Blue Titanium, White Titanium, Black Titanium"
//   }
// };

// const mockReviews = [
//   {
//     id: 1,
//     user: "John Smith",
//     rating: 5,
//     date: "2024-01-15",
//     comment: "Amazing phone! The camera quality is outstanding and the titanium build feels premium.",
//     helpful: 24
//   },
//   {
//     id: 2,
//     user: "Sarah Johnson",
//     rating: 4,
//     date: "2024-01-10",
//     comment: "Great performance and battery life. The Action button is really useful.",
//     helpful: 18
//   },
//   {
//     id: 3,
//     user: "Mike Chen",
//     rating: 5,
//     date: "2024-01-05",
//     comment: "Best iPhone yet! The Pro camera system is incredible for photography enthusiasts.",
//     helpful: 31
//   }
// ];

// const relatedProducts = [
//   { id: "2", name: "iPhone 15", price: 799, image: "/api/placeholder/300/300" },
//   { id: "3", name: "AirPods Pro", price: 249, image: "/api/placeholder/300/300" },
//   { id: "4", name: "Apple Watch Series 9", price: 399, image: "/api/placeholder/300/300" },
//   { id: "5", name: "MagSafe Charger", price: 39, image: "/api/placeholder/300/300" },
// ];

// export default function ProductDetail() {
//   const { id } = useParams();
//   const [quantity, setQuantity] = useState(1);
//   const [selectedImage, setSelectedImage] = useState(0);
//   const [isFavorite, setIsFavorite] = useState(false);
//   const { addItem } = useCart();
//   const { toast } = useToast();

//   const product = mockProduct; // Replace with actual product fetch based on id

//   const handleAddToCart = () => {
//     for (let i = 0; i < quantity; i++) {
//       addItem({
//         id: product.id,
//         name: product.name,
//         price: product.price,
//         image: product.images[0]
//       });
//     }
//     toast({
//       title: "Added to cart!",
//       description: `${quantity} ${product.name}${quantity > 1 ? 's' : ''} added to your cart.`,
//     });
//   };

//   const renderStars = (rating: number) => {
//     return Array.from({ length: 5 }, (_, i) => (
//       <Star
//         key={i}
//         className={`w-4 h-4 ${i < Math.floor(rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
//       />
//     ));
//   };

//   return (
//     <Layout>
//       <div className="pt-24 min-h-screen">
//         <div className="container mx-auto px-6">
//           {/* Breadcrumb */}
//           <nav className="text-sm breadcrumbs mb-8">
//             <div className="flex items-center space-x-2 text-muted-foreground">
//               <span>Home</span>
//               <span>/</span>
//               <span>Shop</span>
//               <span>/</span>
//               <span>{product.category}</span>
//               <span>/</span>
//               <span className="text-foreground">{product.name}</span>
//             </div>
//           </nav>

//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
//             {/* Product Images */}
//             <div className="space-y-4">
//               <motion.div
//                 initial={{ opacity: 0, scale: 0.9 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 className="aspect-square bg-muted rounded-xl overflow-hidden"
//               >
//                 <img
//                   src={product.images[selectedImage]}
//                   alt={product.name}
//                   className="w-full h-full object-cover"
//                 />
//               </motion.div>

//               {/* Image Thumbnails */}
//               <div className="flex gap-2 overflow-x-auto">
//                 {product.images.map((image, index) => (
//                   <button
//                     key={index}
//                     onClick={() => setSelectedImage(index)}
//                     className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors ${
//                       selectedImage === index ? "border-primary" : "border-transparent"
//                     }`}
//                   >
//                     <img
//                       src={image}
//                       alt={`${product.name} ${index + 1}`}
//                       className="w-full h-full object-cover"
//                     />
//                   </button>
//                 ))}
//               </div>
//             </div>

//             {/* Product Info */}
//             <motion.div
//               initial={{ opacity: 0, x: 20 }}
//               animate={{ opacity: 1, x: 0 }}
//               className="space-y-6"
//             >
//               <div>
//                 <Badge variant="outline" className="mb-2">{product.category}</Badge>
//                 <h1 className="text-4xl font-bold mb-2">{product.name}</h1>
//                 <p className="text-muted-foreground mb-4">{product.description}</p>
//                 <div className="flex items-center gap-4 mb-4">
//                   <div className="flex items-center gap-1">
//                     {renderStars(product.rating)}
//                     <span className="ml-2 text-sm">
//                       {product.rating} ({product.reviewCount} reviews)
//                     </span>
//                   </div>
//                 </div>
//               </div>

//               <div className="flex items-center gap-4">
//                 <div className="text-3xl font-bold text-primary">${product.price}</div>
//                 {product.originalPrice > product.price && (
//                   <div className="text-xl text-muted-foreground line-through">
//                     ${product.originalPrice}
//                   </div>
//                 )}
//                 <Badge variant="destructive">
//                   Save ${product.originalPrice - product.price}
//                 </Badge>
//               </div>

//               <div className="flex items-center gap-2">
//                 {product.inStock ? (
//                   <>
//                     <div className="w-2 h-2 bg-green-500 rounded-full"></div>
//                     <span className="text-green-600 font-medium">In Stock ({product.stockCount} available)</span>
//                   </>
//                 ) : (
//                   <>
//                     <div className="w-2 h-2 bg-red-500 rounded-full"></div>
//                     <span className="text-red-600 font-medium">Out of Stock</span>
//                   </>
//                 )}
//               </div>

//               {/* Quantity & Actions */}
//               <div className="space-y-4">
//                 <div className="flex items-center gap-4">
//                   <span className="font-medium">Quantity:</span>
//                   <div className="flex items-center gap-2">
//                     <Button
//                       variant="outline"
//                       size="icon"
//                       onClick={() => setQuantity(Math.max(1, quantity - 1))}
//                       disabled={quantity <= 1}
//                     >
//                       <Minus className="w-4 h-4" />
//                     </Button>
//                     <span className="w-12 text-center font-medium">{quantity}</span>
//                     <Button
//                       variant="outline"
//                       size="icon"
//                       onClick={() => setQuantity(quantity + 1)}
//                       disabled={quantity >= product.stockCount}
//                     >
//                       <Plus className="w-4 h-4" />
//                     </Button>
//                   </div>
//                 </div>

//                 <div className="flex gap-3">
//                   <Button
//                     onClick={handleAddToCart}
//                     disabled={!product.inStock}
//                     className="flex-1 bg-gradient-primary hover:opacity-90"
//                     size="lg"
//                   >
//                     <ShoppingCart className="w-5 h-5 mr-2" />
//                     Add to Cart
//                   </Button>
//                   <Button
//                     variant="outline"
//                     size="lg"
//                     onClick={() => setIsFavorite(!isFavorite)}
//                     className={isFavorite ? "text-red-500 border-red-500" : ""}
//                   >
//                     <Heart className={`w-5 h-5 ${isFavorite ? "fill-current" : ""}`} />
//                   </Button>
//                   <Button variant="outline" size="lg">
//                     <Share2 className="w-5 h-5" />
//                   </Button>
//                 </div>
//               </div>

//               {/* Features */}
//               <Card className="glass p-6">
//                 <h3 className="font-semibold mb-4">Key Features</h3>
//                 <ul className="space-y-2">
//                   {product.features.map((feature, index) => (
//                     <li key={index} className="flex items-center gap-2">
//                       <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
//                       <span className="text-sm">{feature}</span>
//                     </li>
//                   ))}
//                 </ul>
//               </Card>

//               {/* Trust Signals */}
//               <div className="grid grid-cols-3 gap-4">
//                 <div className="flex items-center gap-2 text-sm">
//                   <Truck className="w-4 h-4 text-primary" />
//                   <span>Free Shipping</span>
//                 </div>
//                 <div className="flex items-center gap-2 text-sm">
//                   <Shield className="w-4 h-4 text-primary" />
//                   <span>1 Year Warranty</span>
//                 </div>
//                 <div className="flex items-center gap-2 text-sm">
//                   <RotateCcw className="w-4 h-4 text-primary" />
//                   <span>30-Day Returns</span>
//                 </div>
//               </div>
//             </motion.div>
//           </div>

//           {/* Product Details Tabs */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.3 }}
//             className="mb-16"
//           >
//             <Tabs defaultValue="specs" className="w-full">
//               <TabsList className="grid w-full grid-cols-3 glass">
//                 <TabsTrigger value="specs">Specifications</TabsTrigger>
//                 <TabsTrigger value="reviews">Reviews ({product.reviewCount})</TabsTrigger>
//                 <TabsTrigger value="shipping">Shipping & Returns</TabsTrigger>
//               </TabsList>
              
//               <TabsContent value="specs" className="mt-6">
//                 <Card className="glass p-6">
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                     {Object.entries(product.specifications).map(([key, value]) => (
//                       <div key={key} className="flex justify-between py-2 border-b border-border">
//                         <span className="font-medium">{key}</span>
//                         <span className="text-muted-foreground">{value}</span>
//                       </div>
//                     ))}
//                   </div>
//                 </Card>
//               </TabsContent>
              
//               <TabsContent value="reviews" className="mt-6">
//                 <Card className="glass p-6">
//                   <div className="space-y-6">
//                     {mockReviews.map((review) => (
//                       <div key={review.id} className="border-b border-border pb-6 last:border-b-0">
//                         <div className="flex items-center justify-between mb-2">
//                           <div className="flex items-center gap-2">
//                             <span className="font-medium">{review.user}</span>
//                             <div className="flex">{renderStars(review.rating)}</div>
//                           </div>
//                           <span className="text-sm text-muted-foreground">{review.date}</span>
//                         </div>
//                         <p className="text-sm mb-2">{review.comment}</p>
//                         <button className="text-xs text-muted-foreground hover:text-foreground">
//                           Helpful ({review.helpful})
//                         </button>
//                       </div>
//                     ))}
//                   </div>
//                 </Card>
//               </TabsContent>
              
//               <TabsContent value="shipping" className="mt-6">
//                 <Card className="glass p-6">
//                   <div className="space-y-4">
//                     <div>
//                       <h3 className="font-semibold mb-2">Shipping Information</h3>
//                       <ul className="space-y-1 text-sm text-muted-foreground">
//                         <li>• Free standard shipping on orders over $50</li>
//                         <li>• Express shipping available for $9.99</li>
//                         <li>• Same-day delivery in select cities</li>
//                         <li>• International shipping available</li>
//                       </ul>
//                     </div>
//                     <div>
//                       <h3 className="font-semibold mb-2">Returns & Exchanges</h3>
//                       <ul className="space-y-1 text-sm text-muted-foreground">
//                         <li>• 30-day return policy</li>
//                         <li>• Free returns on all orders</li>
//                         <li>• Items must be in original condition</li>
//                         <li>• Refunds processed within 5-7 business days</li>
//                       </ul>
//                     </div>
//                   </div>
//                 </Card>
//               </TabsContent>
//             </Tabs>
//           </motion.div>

//           {/* Related Products */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.4 }}
//           >
//             <h2 className="text-2xl font-bold mb-6">Related Products</h2>
//             <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
//               {relatedProducts.map((item) => (
//                 <Card key={item.id} className="glass overflow-hidden hover:shadow-lg transition-shadow">
//                   <div className="aspect-square bg-muted">
//                     <img
//                       src={item.image}
//                       alt={item.name}
//                       className="w-full h-full object-cover"
//                     />
//                   </div>
//                   <div className="p-4">
//                     <h3 className="font-medium mb-2">{item.name}</h3>
//                     <p className="text-primary font-bold">${item.price}</p>
//                   </div>
//                 </Card>
//               ))}
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </Layout>
//   );
// }
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Heart,
  Share2,
  Star,
  Plus,
  Minus,
  ShoppingCart,
  Truck,
  Shield,
  RotateCcw,
} from "lucide-react";
import { motion } from "framer-motion";
import { useCart } from "@/hooks/useCart";
import { useToast } from "@/hooks/use-toast";

// Import product data
import { allProducts } from "@/data/products";

const mockReviews = [
  {
    id: 1,
    user: "Momin Tayyab",
    rating: 5,
    date: "2024-01-15",
    comment:
      "Amazing phone! The camera quality is outstanding and the titanium build feels premium.",
    helpful: 24,
  },
  {
    id: 2,
    user: "Fardeen Nadeem",
    rating: 4,
    date: "2024-01-10",
    comment:
      "Great performance and battery life. The Action button is really useful.",
    helpful: 18,
  },
  {
    id: 3,
    user: "Anas Usman",
    rating: 5,
    date: "2024-01-05",
    comment:
      "Best iPhone yet! The Pro camera system is incredible for photography enthusiasts.",
    helpful: 31,
  },
];

export default function ProductDetail() {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);
  const { addItem } = useCart();
  const { toast } = useToast();

  // Find product by ID param
  const product = allProducts.find((p) => p.id === id);

  if (!product) {
    return (
      <Layout>
        <div className="pt-24 min-h-screen flex justify-center items-center">
          <h2 className="text-2xl font-semibold">Product not found.</h2>
        </div>
      </Layout>
    );
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addItem({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.images[0],
      });
    }
    toast({
      title: "Added to cart!",
      description: `${quantity} ${product.name}${quantity > 1 ? "s" : ""} added to your cart.`,
    });
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < Math.floor(rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <Layout>
      <div className="pt-24 min-h-screen">
        <div className="container mx-auto px-6">
          {/* Breadcrumb */}
          <nav className="text-sm breadcrumbs mb-8">
            <div className="flex items-center space-x-2 text-muted-foreground">
              <span>Home</span>
              <span>/</span>
              <span>Shop</span>
              <span>/</span>
              <span>{product.category}</span>
              <span>/</span>
              <span className="text-foreground">{product.name}</span>
            </div>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Product Images */}
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="aspect-square bg-muted rounded-xl overflow-hidden"
              >
                <img
                  src={product.images[selectedImage]}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Image Thumbnails */}
              <div className="flex gap-2 overflow-x-auto">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors ${
                      selectedImage === index ? "border-primary" : "border-transparent"
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${product.name} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
              <div>
                <Badge variant="outline" className="mb-2">
                  {product.category}
                </Badge>
                <h1 className="text-4xl font-bold mb-2">{product.name}</h1>
                <p className="text-muted-foreground mb-4">{product.description}</p>
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center gap-1">
                    {renderStars(product.rating)}
                    <span className="ml-2 text-sm">
                      {product.rating} ({product.reviewCount} reviews)
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="text-3xl font-bold text-primary">${product.price}</div>
                {product.originalPrice && product.originalPrice > product.price && (
                  <div className="text-xl text-muted-foreground line-through">${product.originalPrice}</div>
                )}
                {product.originalPrice && product.originalPrice > product.price && (
                  <Badge variant="destructive">Save ${product.originalPrice - product.price}</Badge>
                )}
              </div>

              <div className="flex items-center gap-2">
                {product.inStock ? (
                  <>
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-green-600 font-medium">In Stock ({product.stockCount} available)</span>
                  </>
                ) : (
                  <>
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span className="text-red-600 font-medium">Out of Stock</span>
                  </>
                )}
              </div>

              {/* Quantity & Actions */}
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <span className="font-medium">Quantity:</span>
                  <div className="flex items-center gap-2">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      disabled={quantity <= 1}
                    >
                      <Minus className="w-4 h-4" />
                    </Button>
                    <span className="w-12 text-center font-medium">{quantity}</span>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => setQuantity(quantity + 1)}
                      disabled={quantity >= product.stockCount}
                    >
                      <Plus className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Button
                    onClick={handleAddToCart}
                    disabled={!product.inStock}
                    className="flex-1 bg-gradient-primary hover:opacity-90"
                    size="lg"
                  >
                    <ShoppingCart className="w-5 h-5 mr-2" />
                    Add to Cart
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    onClick={() => setIsFavorite(!isFavorite)}
                    className={isFavorite ? "text-red-500 border-red-500" : ""}
                  >
                    <Heart className={`w-5 h-5 ${isFavorite ? "fill-current" : ""}`} />
                  </Button>
                  <Button variant="outline" size="lg">
                    <Share2 className="w-5 h-5" />
                  </Button>
                </div>
              </div>

              {/* Features */}
              <Card className="glass p-6">
                <h3 className="font-semibold mb-4">Key Features</h3>
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </Card>

              {/* Trust Signals */}
              <div className="grid grid-cols-3 gap-4">
                <div className="flex items-center gap-2 text-sm">
                  <Truck className="w-4 h-4 text-primary" />
                  <span>Free Shipping</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Shield className="w-4 h-4 text-primary" />
                  <span>1 Year Warranty</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <RotateCcw className="w-4 h-4 text-primary" />
                  <span>30-Day Returns</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Product Details Tabs */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="mb-16">
            <Tabs defaultValue="specs" className="w-full">
              <TabsList className="grid w-full grid-cols-3 glass">
                <TabsTrigger value="specs">Specifications</TabsTrigger>
                <TabsTrigger value="reviews">Reviews ({product.reviewCount})</TabsTrigger>
                <TabsTrigger value="shipping">Shipping & Returns</TabsTrigger>
              </TabsList>

              <TabsContent value="specs" className="mt-6">
                <Card className="glass p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {Object.entries(product.specifications).map(([key, value]) => (
                      <div key={key} className="flex justify-between py-2 border-b border-border">
                        <span className="font-medium">{key}</span>
                        <span className="text-muted-foreground">{value}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              </TabsContent>

              <TabsContent value="reviews" className="mt-6">
                <Card className="glass p-6">
                  <div className="space-y-6">
                    {mockReviews.map((review) => (
                      <div key={review.id} className="border-b border-border pb-6 last:border-b-0">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <span className="font-medium">{review.user}</span>
                            <div className="flex">{renderStars(review.rating)}</div>
                          </div>
                          <span className="text-sm text-muted-foreground">{review.date}</span>
                        </div>
                        <p className="text-sm mb-2">{review.comment}</p>
                        <button className="text-xs text-muted-foreground hover:text-foreground">
                          Helpful ({review.helpful})
                        </button>
                      </div>
                    ))}
                  </div>
                </Card>
              </TabsContent>

              <TabsContent value="shipping" className="mt-6">
                <Card className="glass p-6">
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold mb-2">Shipping Information</h3>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• Free standard shipping on orders over $50</li>
                        <li>• Express shipping available for $9.99</li>
                        <li>• Same-day delivery in select cities</li>
                        <li>• International shipping available</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Returns & Exchanges</h3>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• 30-day return policy</li>
                        <li>• Free returns on all orders</li>
                        <li>• Items must be in original condition</li>
                        <li>• Refunds processed within 5-7 business days</li>
                      </ul>
                    </div>
                  </div>
                </Card>
              </TabsContent>
            </Tabs>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
}
