import { Section } from './ui/Section';

const logos = [
  "https://via.placeholder.com/150x80/ffffff/0F2B46?text=FHRAI",
  "https://via.placeholder.com/150x80/ffffff/0F2B46?text=H%26RA",
  "https://via.placeholder.com/150x80/ffffff/0F2B46?text=Hotel+Assn",
  "https://via.placeholder.com/150x80/ffffff/0F2B46?text=Tourism",
  "https://via.placeholder.com/150x80/ffffff/0F2B46?text=FSSAI",
];

export const Certifications = () => {
  return (
    <Section background="bg-white border-t border-gray-100" className="py-20">
      <div className="text-center mb-12">
        <h2 className="font-serif text-3xl text-navy font-bold">Our Certifications</h2>
      </div>
      <div className="flex flex-wrap justify-center gap-12 md:gap-20 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
        {logos.map((logo, i) => (
           <div key={i} className="flex items-center justify-center p-4 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow">
             {/* Using text fallback since placeholders might look ugly, simulating logos with text */}
             <span className="font-bold text-navy-light text-xl tracking-tighter">CERTIFIED {i+1}</span>
           </div>
        ))}
      </div>
    </Section>
  );
};