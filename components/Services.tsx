import { motion } from "framer-motion";
import { Section } from "./ui/Section";
import { ArrowRight } from "lucide-react";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export const Services = () => {
  return (
    <Section id="amenities" background="bg-sand">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="space-y-8"
        >
          <div className="w-20 h-1 bg-gold rounded-full" />
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-navy font-bold leading-tight">
            Our Services & <br />
            Facilities
          </h2>
          <p className="text-navy-deep/70 text-lg leading-relaxed max-w-lg">
            Neo Majestic is a 5 Star, business hotel in Goa. It's a part of the
            Majestic Pride Group. There are 94 luxurious rooms with king-size
            beds and state-of-the-art facilities along with a host of leisure
            activities to offer you a relaxed and entertaining experience, while
            you are on business in Goa.
          </p>
          <a
            href="#"
            className="inline-flex items-center text-gold font-semibold tracking-wide hover:text-gold-dark transition-colors group"
          >
            READ MORE
            <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>

        {/* Right Images */}
        <div className="grid grid-cols-2 gap-6 md:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-12"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl group aspect-[3/4]">
              <img
                src="https://images.unsplash.com/photo-1554020632-57ebe4b1933f?q=80&w=400&auto=format&fit=crop"
                alt="Golden Buddha"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl group aspect-[3/4]">
              <img
                src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=1000&auto=format&fit=crop"
                alt="Luxury Pool"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  );
};
