import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import abstractImage from "@assets/generated_images/Abstract_boho_organic_shapes_in_earth_tones_8a9ac13b.png";
import lemonImage from "@assets/Lemon Groves_1763571283788.jpg";
import coconutFarmsImage from "@assets/Coconut Farms_1763571409389.jpeg";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  
  return (
    <div className="min-h-screen bg-background selection:bg-primary selection:text-primary-foreground overflow-x-hidden font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-6 flex justify-between items-center backdrop-blur-sm bg-background/80 border-b border-border/40">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-3xl font-extrabold text-foreground tracking-tighter"
        >
          Pickswell
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <Button variant="outline" className="rounded-full border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 font-normal text-lg" asChild>
            <a href="mailto:cody@pickswell.com">Get In Touch</a>
          </Button>
        </motion.div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col lg:flex-row items-center justify-center pt-32 pb-20 px-6 lg:px-20 overflow-hidden">
        {/* Organic Blob Background */}
        <div className="absolute top-[-20%] right-[-10%] w-[60vw] h-[60vw] bg-secondary/10 rounded-full blur-[100px] -z-10 animate-pulse" />
        <div className="absolute bottom-[-20%] left-[-10%] w-[50vw] h-[50vw] bg-primary/10 rounded-full blur-[100px] -z-10" />

        <div className="flex-1 z-10 lg:pr-12">
          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl md:text-7xl lg:text-8xl font-extrabold leading-[0.95] text-foreground mb-8"
          >
            Connecting You with <span className="italic text-primary font-extrabold">Premium</span> Food Ingredients
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="text-lg md:text-2xl text-muted-foreground max-w-xl font-normal leading-relaxed mb-10"
          >
            Pickswell bridges the gap between food manufacturers, retailers, and the finest specialty producers worldwide.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          >
             <Button size="lg" className="rounded-full px-8 py-6 text-xl font-extrabold bg-primary hover:bg-primary/90 text-primary-foreground group shadow-lg shadow-primary/20" asChild>
                <a href="mailto:cody@pickswell.com" className="flex items-center gap-2">
                  Partner with Us <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
             </Button>
          </motion.div>
        </div>

        <div className="flex-1 relative mt-12 lg:mt-0 w-full max-w-lg lg:max-w-none">
           {/* Wrapper div for positioning the card relative to the image area, but outside overflow hidden */}
           <div className="relative">
             <motion.div 
               initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
               animate={{ opacity: 1, scale: 1, rotate: 0 }}
               transition={{ duration: 1.2, ease: "easeOut" }}
               className="relative aspect-[4/5] md:aspect-square rounded-[2rem] overflow-hidden shadow-2xl border-8 border-card"
             >
               <motion.img 
                 style={{ y }}
                 src={coconutFarmsImage} 
                 alt="Coconut Farms" 
                 className="object-cover w-full h-[120%]"
               />
             </motion.div>
             
             {/* Floating Card - Bottom Right to cover brush */}
             <motion.div 
               initial={{ opacity: 0, x: 50 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ delay: 0.8, duration: 0.8 }}
               className="absolute bottom-8 -right-4 md:-right-12 bg-card/90 backdrop-blur-md p-6 rounded-xl shadow-xl border border-border max-w-[200px] hidden md:block z-20"
             >
               <p className="font-extrabold text-2xl italic text-foreground">"Exceptional quality, delivered seamlessly."</p>
             </motion.div>
           </div>
        </div>
      </section>

      {/* Marquee Section (Replaces Features) */}
      <section className="py-24 bg-card rounded-t-[3rem] relative z-20 shadow-[-10px_-10px_30px_rgba(0,0,0,0.02)] overflow-hidden border-y border-border/50">
        <div className="flex whitespace-nowrap">
          <MarqueeGroup />
          <MarqueeGroup />
          <MarqueeGroup />
          <MarqueeGroup />
        </div>
      </section>

      {/* Visual Break / Image Section */}
      <section className="relative py-32 px-6 overflow-hidden flex items-center justify-center min-h-[60vh]">
        <div className="absolute inset-0 z-0">
          <img src={lemonImage} alt="Lemon Groves" className="w-full h-full object-cover opacity-90" />
          <div className="absolute inset-0 bg-foreground/20 mix-blend-multiply" />
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative z-10 bg-background/90 backdrop-blur-md p-10 md:p-16 rounded-2xl max-w-3xl text-center shadow-2xl mx-4 border border-border/50 flex flex-col items-center"
        >
          <h2 className="text-4xl md:text-6xl font-extrabold text-foreground mb-6 text-center">
            Elevate your retail offering.
          </h2>
          <p className="text-lg md:text-2xl text-muted-foreground font-normal mb-8 text-center leading-relaxed">
            We deliver end-to-end product development solutions that launch, scale, and define the future of food.
          </p>
          <Button variant="outline" size="lg" className="rounded-full px-8 py-6 text-xl font-extrabold border-foreground text-foreground hover:bg-foreground hover:text-background transition-colors" asChild>
            <a href="mailto:cody@pickswell.com">Contact Us Today</a>
          </Button>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-20 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-10">
          <div>
            <h3 className="text-5xl md:text-7xl font-extrabold mb-4 text-background">Pickswell</h3>
            <p className="text-background/60 max-w-md font-normal text-xl">
              Connecting you with the finest specialty producers worldwide.
            </p>
          </div>
          
          <div className="flex flex-col gap-4 items-start md:items-end">
             <a href="mailto:cody@pickswell.com" className="text-2xl md:text-4xl font-extrabold hover:text-primary transition-colors flex items-center gap-3">
               <Mail className="w-6 h-6 md:w-8 md:h-8" /> cody@pickswell.com
             </a>
             <p className="text-lg text-background/40 font-normal mt-4">
               © 2025 Pickswell Holdings LLC.
             </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function MarqueeGroup() {
  return (
    <motion.div 
      initial={{ x: "0%" }}
      animate={{ x: "-100%" }}
      transition={{ duration: 20, ease: "linear", repeat: Infinity }}
      className="flex gap-12 pr-12 items-center"
    >
      <span className="text-6xl md:text-8xl font-extrabold text-foreground/10 uppercase tracking-widest whitespace-nowrap hover:text-primary/80 transition-colors cursor-default">Unmatched Quality</span>
      <span className="text-4xl text-primary">✦</span>
      <span className="text-6xl md:text-8xl font-extrabold text-foreground/10 uppercase tracking-widest whitespace-nowrap hover:text-primary/80 transition-colors cursor-default">Global Network</span>
      <span className="text-4xl text-primary">✦</span>
      <span className="text-6xl md:text-8xl font-extrabold text-foreground/10 uppercase tracking-widest whitespace-nowrap hover:text-primary/80 transition-colors cursor-default">Tailored Solutions</span>
      <span className="text-4xl text-primary">✦</span>
    </motion.div>
  );
}
