import { Layout } from "@/components/Layout";
import { HeroSection } from "@/components/HeroSection";
import { FeaturedProducts } from "@/components/FeaturedProducts";
// import { Product3DShowcase } from "@/components/Product3D";
import { TestimonialsSection } from "@/components/TestimonialsSection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <FeaturedProducts />
      {/* <Product3DShowcase /> */}
      <TestimonialsSection />
    </Layout>
  );
};

export default Index;
