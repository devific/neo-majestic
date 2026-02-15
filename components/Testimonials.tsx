import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

export const Testimonials = () => {
  return (
    <section className="relative py-32 w-full flex items-center justify-center">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2000')"
        }}
      >
        <div className="absolute inset-0 bg-navy/40" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass-card p-12 md:p-16 rounded-3xl text-center border-none shadow-2xl backdrop-blur-xl bg-navy/30"
        >
          <div className="flex justify-center gap-1 mb-8">
            {[1, 2, 3, 4, 5].map((s) => (
              <Star key={s} className="w-6 h-6 text-gold fill-gold" />
            ))}
          </div>

          <h2 className="font-serif text-3xl md:text-5xl text-white mb-8 leading-snug">
            "Very nice hotel, food quality and other services is very nice."
          </h2>

          <div className="w-16 h-1 bg-gold mx-auto mb-6" />
          
          <p className="text-white font-medium tracking-wide uppercase text-sm">
            Sourabh Salunke
          </p>
          <p className="text-white/60 text-xs uppercase tracking-widest mt-2">Verified Guest</p>
        </motion.div>
      </div>
    </section>
  );
};