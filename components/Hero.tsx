import { motion } from 'framer-motion';
import { Button } from './ui/Button';

export const Hero = () => {
  return (
    <div id="home" className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background with Parallax effect simulated by fixed bg */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed transform scale-105"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2574&auto=format&fit=crop')"
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-navy/60 via-navy/40 to-navy" />
      </div>

      {/* Content */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative z-10 text-center max-w-4xl mx-auto px-6"
      >
        <div className="glass-card p-8 md:p-12 rounded-3xl border border-white/10 shadow-2xl backdrop-blur-md">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="block text-gold text-sm md:text-base font-medium tracking-[0.2em] uppercase mb-4"
          >
            Experience Premium Luxury
          </motion.span>
          
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white font-bold mb-6 leading-tight drop-shadow-lg">
            Welcome to <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/80">
              Neo Majestic
            </span>
          </h1>

          <p className="text-white/80 text-lg md:text-xl font-light max-w-2xl mx-auto mb-10 leading-relaxed">
            Stay at the classiest and finest hotel in Goa. Where comfort meets entertainment in a symphony of elegance.
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <Button variant="primary" size="lg" className="min-w-[180px]">
              Book a Room
            </Button>
            <Button variant="outline" size="lg" className="min-w-[180px]">
              Explore Services
            </Button>
          </div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 flex flex-col items-center gap-2"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-gold to-transparent" />
      </motion.div>
    </div>
  );
};