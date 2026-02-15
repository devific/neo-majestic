import { Section } from "./ui/Section";
const logos = ["/FHRAI.jpg", "/FSSAI.jpg", "/HAI.jpg", "/HRAI.jpg", "/TT.jpg"];

export const Certifications = () => {
  return (
    <Section background="bg-white border-t border-gray-100" className="py-20">
      <div className="text-center mb-12">
        <h2 className="font-serif text-3xl text-navy font-bold">
          Our Certifications
        </h2>
      </div>
      <div className="flex flex-wrap justify-center gap-12 md:gap-20">
        {logos.map((logo, i) => (
          <img
            src={logo}
            alt=""
            className="h-14 w-auto object-contain  opacity-60 grayscale hover:grayscale-0 transition-all duration-500"
          />
        ))}
      </div>
    </Section>
  );
};
