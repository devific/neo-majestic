import { motion } from "framer-motion";
import { Section } from "./ui/Section";
import { ArrowRight, Star } from "lucide-react";

const offers = [
  {
    title: "A Majestic Experience",
    image:
      "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1000",
    desc: "Neo Majestic is a 5 Star, business hotel in Goa. Part of the Majestic Pride Group, offering luxurious rooms with king-size beds.",
    reviews: 20,
  },
  {
    title: "Goa's Largest Casino",
    image:
      "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1000",
    desc: "Our very own exclusive casino that lets you unwind after a day's work. Engage in your all time favorites like Roulette, Baccarat, and more.",
    reviews: 45,
  },
  {
    title: "Get Cozy",
    image:
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=500&auto=format&fit=crop",
    desc: "We have 94 luxurious rooms with king size beds and superior air conditioning to make you feel cozy and calm throughout your stay.",
    reviews: 75,
  },
];

export const Offers = () => {
  return (
    <Section background="bg-sand" id="rooms">
      <div className="text-center mb-16">
        <h2 className="font-serif text-4xl md:text-5xl text-navy font-bold mb-4">
          Awesome Offers
        </h2>
        <p className="text-navy-deep/60 max-w-2xl mx-auto">
          For anything that brings people together to celebrate an occasion, we
          create truly memorable experiences.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {offers.map((offer, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col h-full"
          >
            <div className="h-64 overflow-hidden relative">
              <img
                src={offer.image}
                alt={offer.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-navy tracking-widest shadow-sm">
                EXCLUSIVE
              </div>
            </div>

            <div className="p-8 flex-1 flex flex-col">
              <h3 className="font-serif text-2xl text-navy font-bold mb-4">
                {offer.title}
              </h3>
              <p className="text-navy-deep/70 text-sm leading-relaxed mb-6 flex-1">
                {offer.desc}
              </p>

              <div className="mt-auto pt-6 border-t border-gray-100 flex items-center justify-between">
                <a
                  href="#"
                  className="flex items-center text-sm font-bold text-gold hover:text-navy transition-colors"
                >
                  READ MORE <ArrowRight className="ml-2 w-4 h-4" />
                </a>
                <div className="flex items-center text-gray-400 text-xs gap-1">
                  <Star className="w-3 h-3 text-gold fill-gold" />
                  <span>{offer.reviews} Reviews</span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};
