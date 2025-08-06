import { Link } from "react-router-dom";
import { Github, Twitter, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-muted/50 border-t border-border mt-20">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">E</span>
              </div>
              <span className="text-xl font-bold text-gradient">FutureStore</span>
            </div>
            <p className="text-muted-foreground">
              Your premium destination for the latest tech and fashion.
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com/Mhuzaifaiqbal" className="text-muted-foreground hover:text-primary transition-colors">
                <Github className="h-5 w-5" />
              </a>
          
              <a href="https://www.linkedin.com/in/muhammad-huzaifa-iqbal/" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div className="space-y-4">
            <h3 className="font-semibold">Shop</h3>
            <div className="space-y-2">
              <Link to="/shop?category=electronics" className="block text-muted-foreground hover:text-primary transition-colors">
                Electronics
              </Link>
              <Link to="/shop?category=clothing" className="block text-muted-foreground hover:text-primary transition-colors">
                Clothing
              </Link>
              <Link to="/shop?category=accessories" className="block text-muted-foreground hover:text-primary transition-colors">
                Accessories
              </Link>
            
            </div>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h3 className="font-semibold">Support</h3>
            <div className="space-y-2">
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                Help Center
              </a>
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                Shipping Info
              </a>
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                Returns
              </a>
          
            </div>
          </div>

          {/* Hire Me */}
          <div className="space-y-4">
            <h3 className="font-semibold">Hire Me</h3>
            <p className="text-muted-foreground">
              Need a custom e-commerce solution? Let's work together!
            </p>
            <div className="space-y-2">
              <a 
                href="https://www.linkedin.com/in/muhammad-huzaifa-iqbal/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-gradient-primary text-white px-4 py-2 rounded-lg hover:opacity-90 transition-opacity"
              >
                Contact Me
              </a>
              <Link 
                to="/contact"
                className="block text-primary hover:text-primary/80 transition-colors"
              >
                Contact Form
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; 2024 FutureStore. All rights reserved. Built with React & Tailwind CSS.</p>
        </div>
      </div>
    </footer>
  );
}