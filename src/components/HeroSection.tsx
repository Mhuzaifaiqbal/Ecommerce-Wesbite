// import { motion } from "framer-motion";
// import { ArrowRight, Play, Sparkles } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Link } from "react-router-dom";
// import heroImage from "@/assets/75418f97-ace1-4200-a0e2-f44fd3da7a15.jpg";

// export function HeroSection() {
//   return (
//     <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
//       {/* Background Image with Overlay */}
//       <div className="absolute inset-0">
//         <img 
//           src={heroImage} 
//           alt="Hero Background" 
//           className="w-full h-full object-cover"
//         />
//         <div className="absolute inset-0 bg-background/80" />
//       </div>

//       {/* Floating Elements */}
//       <div className="absolute inset-0 overflow-hidden">
//         <motion.div
//           animate={{ 
//             y: [0, -20, 0],
//             rotate: [0, 5, 0] 
//           }}
//           transition={{ 
//             duration: 4, 
//             repeat: Infinity, 
//             ease: "easeInOut" 
//           }}
//           className="absolute top-20 left-10 w-20 h-20 bg-gradient-primary rounded-xl blur-sm opacity-30"
//         />
//         <motion.div
//           animate={{ 
//             y: [0, 30, 0],
//             rotate: [0, -5, 0] 
//           }}
//           transition={{ 
//             duration: 5, 
//             repeat: Infinity, 
//             ease: "easeInOut" 
//           }}
//           className="absolute top-40 right-20 w-16 h-16 bg-gradient-secondary rounded-full blur-sm opacity-40"
//         />
//         <motion.div
//           animate={{ 
//             y: [0, -15, 0],
//             x: [0, 10, 0] 
//           }}
//           transition={{ 
//             duration: 6, 
//             repeat: Infinity, 
//             ease: "easeInOut" 
//           }}
//           className="absolute bottom-40 left-1/4 w-12 h-12 bg-accent rounded-lg blur-sm opacity-25"
//         />
//       </div>

//       {/* Main Content */}
//       <div className="relative z-10 container mx-auto px-6 text-center">
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="mb-6"
//         >
//           <motion.div
//             initial={{ scale: 0 }}
//             animate={{ scale: 1 }}
//             transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
//             className="inline-flex items-center gap-2 bg-glass px-4 py-2 rounded-full border border-primary/20 mb-6"
//           >
//             <Sparkles className="w-4 h-4 text-primary" />
//             <span className="text-sm font-medium">New Collection Available</span>
//           </motion.div>
//         </motion.div>

//         <motion.h1
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.2 }}
//           className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
//         >
//           <span className="block">Experience the</span>
//           <span className="block text-gradient animate-glow">Future of</span>
//           <span className="block">Shopping</span>
//         </motion.h1>

//         <motion.p
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.4 }}
//           className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto"
//         >
//           Discover premium products with immersive 3D experiences, 
//           cutting-edge technology, and unparalleled customer service.
//         </motion.p>

//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.6 }}
//           className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
//         >
//           <Link to="/shop">
//             <Button 
//               size="lg" 
//               className="bg-gradient-primary hover:opacity-90 transition-opacity group px-8 py-4 text-lg"
//             >
//               Explore Collection
//               <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
//             </Button>
//           </Link>
          
//           <Button 
//             variant="outline" 
//             size="lg" 
//             className="glass border-primary/30 hover:bg-primary/10 px-8 py-4 text-lg"
//           >
//             <Play className="mr-2 w-5 h-5" />
//             Watch Demo
//           </Button>
//         </motion.div>

//         {/* Stats */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.8 }}
//           className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto"
//         >
//           {[
//             { number: "10K+", label: "Happy Customers" },
//             { number: "500+", label: "Premium Products" },
//             { number: "99%", label: "Satisfaction Rate" }
//           ].map((stat, index) => (
//             <motion.div
//               key={stat.label}
//               initial={{ scale: 0 }}
//               animate={{ scale: 1 }}
//               transition={{ delay: 0.8 + index * 0.1, type: "spring", stiffness: 200 }}
//               className="glass-card p-6"
//             >
//               <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
//               <div className="text-muted-foreground">{stat.label}</div>
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>

//       {/* Scroll Indicator */}
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 1.2 }}
//         className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
//       >
//         <motion.div
//           animate={{ y: [0, 10, 0] }}
//           transition={{ duration: 2, repeat: Infinity }}
//           className="w-6 h-10 border-2 border-primary rounded-full flex justify-center"
//         >
//           <motion.div
//             animate={{ y: [0, 12, 0] }}
//             transition={{ duration: 2, repeat: Infinity }}
//             className="w-1 h-3 bg-primary rounded-full mt-2"
//           />
//         </motion.div>
//       </motion.div>
//     </section>
//   );
// }
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Play, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroImage from "@/assets/75418f97-ace1-4200-a0e2-f44fd3da7a15.jpg";

export function HeroSection() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Hero Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/80" />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 5, 0] 
          }}
          transition={{ 
            duration: 4, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute top-20 left-10 w-20 h-20 bg-gradient-primary rounded-xl blur-sm opacity-30"
        />
        <motion.div
          animate={{ 
            y: [0, 30, 0],
            rotate: [0, -5, 0] 
          }}
          transition={{ 
            duration: 5, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute top-40 right-20 w-16 h-16 bg-gradient-secondary rounded-full blur-sm opacity-40"
        />
        <motion.div
          animate={{ 
            y: [0, -15, 0],
            x: [0, 10, 0] 
          }}
          transition={{ 
            duration: 6, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute bottom-40 left-1/4 w-12 h-12 bg-accent rounded-lg blur-sm opacity-25"
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="inline-flex items-center gap-2 bg-glass px-4 py-2 rounded-full border border-primary/20 mb-6"
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">New Collection Available</span>
          </motion.div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
        >
          <span className="block">Experience</span>
          <span className="block text-gradient animate-glow">Premium Quality</span>
          <span className="block">Products</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto"
        >
          Discover premium products with immersive 3D experiences, 
          cutting-edge technology, and unparalleled customer service.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
        >
          <Link to="/shop">
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:opacity-90 transition-opacity group px-8 py-4 text-lg"
            >
              Explore Collection
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
          
          <Button 
            variant="outline" 
            size="lg" 
            className="glass border-primary/30 hover:bg-primary/10 px-8 py-4 text-lg flex items-center"
            onClick={() => setIsVideoOpen(true)}
          >
            <Play className="mr-2 w-5 h-5" />
            Watch Demo
          </Button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto"
        >
          {[ 
            { number: "10K+", label: "Happy Customers" },
            { number: "500+", label: "Premium Products" },
            { number: "99%", label: "Satisfaction Rate" }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.8 + index * 0.1, type: "spring", stiffness: 200 }}
              className="glass-card p-6"
            >
              <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
              <div className="text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-primary rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-primary rounded-full mt-2"
          />
        </motion.div>
      </motion.div>

      {/* Video Modal */}
      {isVideoOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={() => setIsVideoOpen(false)}
        >
          <div 
            className="relative max-w-3xl w-full rounded-lg overflow-hidden aspect-video"
            onClick={e => e.stopPropagation()} // prevent modal close when clicking inside
          >
            <button
              onClick={() => setIsVideoOpen(false)}
              className="absolute top-2 right-2 text-white text-3xl font-bold hover:text-red-500 z-50"
              aria-label="Close Video Modal"
            >
              ×
            </button>
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/_PHfeKXA2x4?autoplay=1"
              title="YouTube demo video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </section>
  );
}
