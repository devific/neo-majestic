import { motion } from 'framer-motion';

export const Entertainment = () => {
  return (
    <section id="entertainment" className="relative h-[80vh] w-full flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1596838132731-3301c3fd4317?q=80&w=2574&auto=format&fit=crop')"
        }}
      >
        <div className="absolute inset-0 bg-navy/80 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-navy/40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white font-bold mb-8">
            The Best of <br />
            <span className="text-gold italic">Hospitality</span>
          </h2>
          
          <div className="inline-block">
             <div className="glass-card px-8 py-4 rounded-full flex items-center gap-4 text-white/90">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="tracking-widest text-sm font-semibold uppercase">Premium Casino & Lounge</span>
             </div>
          </div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-sand to-transparent" />
    </section>
  );
};