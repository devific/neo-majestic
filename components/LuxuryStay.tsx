import { motion } from 'framer-motion';
import { Section } from './ui/Section';

const cards = [
  { title: "Head out to the Beach", cat: "Relax", img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=600" },
  { title: "Unwind at the Spa", cat: "Wellness", img: "https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=600" },
  { title: "Play at the Casino", cat: "Fun", img: "https://images.unsplash.com/photo-1596838132731-3301c3fd4317?q=80&w=600" },
  { title: "Explore the Outdoors", cat: "Hotel", img: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=600" },
];

export const LuxuryStay = () => {
  return (
    <Section background="bg-sand" id="gallery">
      <div className="text-center mb-16">
        <h2 className="font-serif text-4xl md:text-5xl text-navy font-bold mb-4">A Luxurious Stay</h2>
        <p className="text-navy-deep/60">We have premium facilities to make your stay a memorable one.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-auto lg:h-[600px]">
        {/* Large Feature */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-2 relative rounded-3xl overflow-hidden shadow-xl group h-[400px] lg:h-full"
        >
          <img 
            src="https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=2000" 
            alt="Luxury Room" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-transparent to-transparent opacity-80" />
          <div className="absolute bottom-8 left-8 text-white">
            <span className="bg-gold text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-3 inline-block">Hotel & Travel</span>
            <h3 className="font-serif text-3xl md:text-4xl">Unforgettable Experiences</h3>
            <p className="text-white/80 mt-2 text-sm">July, 2026</p>
          </div>
        </motion.div>

        {/* Small Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 h-full">
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative rounded-2xl overflow-hidden shadow-lg group h-[200px] lg:h-auto"
            >
              <img 
                src={card.img} 
                alt={card.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
              <div className="absolute bottom-4 left-4 text-white">
                <span className="text-gold text-[10px] font-bold uppercase tracking-widest block mb-1">{card.cat}</span>
                <h4 className="font-serif text-lg leading-tight">{card.title}</h4>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};