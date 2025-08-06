import { Layout } from "@/components/Layout";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { User, Lightbulb, Rocket, ShieldCheck } from "lucide-react";

export default function About() {
  return (
    <Layout>
      <div className="pt-24 min-h-screen">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              About <span className="text-gradient">FutureStore</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                I blend cutting-edge design, smooth animations, and a sleek user interface to craft premium e-commerce experiences that captivate and convert.            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: User,
                title: "Who I Am",
                description:
                    "A passionate young developer crafting immersive eCommerce sites, dynamic portfolios, research platforms, and engaging blog pages with modern design and performance at heart."},
              {
                icon: Lightbulb,
                title: "My Vision",
                description:
                  "To bridge the power of artificial intelligence with intuitive, immersive web experiences. I aim to create smart, scalable, and user-centric digital solutions—from eCommerce platforms to intelligent web apps—that not only look stunning but also solve real-world problems. By blending modern web technologies with AI and automation, I strive to redefine how people interact with the web and empower businesses with tools of the future."
              },
              {
                icon: Rocket,
                title: "My Mission",
                description:
                  "To design and develop intelligent, responsive, and aesthetically engaging web applications that harness the potential of AI and modern technology. I’m committed to delivering seamless user experiences and impactful solutions that help individuals, startups, and businesses grow in the digital era. My mission is to continually learn, build, and contribute to technology that makes life simpler, smarter, and more connected."
              },
              {
                icon: ShieldCheck,
                title: "What I Value",
                description:
                  "Security, accessibility, performance, and innovation — seamlessly blended into one powerful digital experience."
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="glass p-6 text-center hover:shadow-glow transition-all duration-300 h-full">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/20 rounded-full mb-4">
                    <item.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold mb-4">Why Choose Me?</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
              I’m passionate about creating websites that are not only visually appealing but also fast,
               secure, and accessible to everyone. I focus on clean code, smooth user experiences, and 
               modern technologies to build web applications that truly serve users’ needs and stand the
                test of time.


            </p>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
}
