import { useRef } from 'react';
import { Section } from './ui/Section';
import { ArrowRight, ArrowLeft } from 'lucide-react';

const images = [
  { name: "Cafeteria", url: "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=800" },
  { name: "Lobby", url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800" },
  { name: "Kids Room", url: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=800" },
  { name: "Business Center", url: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=800" },
  { name: "Gym", url: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=800" },
  { name: "Swimming Pool", url: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=800" },
];

export const Gallery = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 400;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <Section background="bg-white">
      <div className="flex justify-between items-end mb-12">
        <div className="max-w-xl">
          <h2 className="font-serif text-4xl md:text-5xl text-navy font-bold mb-4">Our Gallery</h2>
          <p className="text-navy-deep/60">Take a sneak peak through our gallery to see the luxurious services available at our 5 star hotel.</p>
        </div>
        <div className="hidden md:flex gap-2">
          <button 
            onClick={() => scroll('left')} 
            className="p-3 rounded-full border border-navy/20 hover:bg-navy hover:text-white transition-all"
          >
            <ArrowLeft size={20} />
          </button>
          <button 
            onClick={() => scroll('right')} 
            className="p-3 rounded-full border border-navy/20 hover:bg-navy hover:text-white transition-all"
          >
            <ArrowRight size={20} />
          </button>
        </div>
      </div>

      <div 
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-8 hide-scrollbar"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {images.map((img, idx) => (
          <div 
            key={idx} 
            className="snap-start min-w-[85vw] md:min-w-[400px] h-[300px] rounded-2xl overflow-hidden relative group flex-shrink-0"
          >
            <img 
              src={img.url} 
              alt={img.name} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute bottom-6 left-6 translate-y-0 md:translate-y-4 md:group-hover:translate-y-0 transition-transform duration-300">
              <h3 className="text-white font-serif text-2xl">{img.name}</h3>
              <p className="text-white/70 text-sm">4 Photos</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};