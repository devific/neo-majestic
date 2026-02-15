import { Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-navy text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        
        {/* Brand */}
        <div className="space-y-6">
          <div className="flex flex-col">
            <span className="font-serif text-2xl font-bold tracking-wider text-gold">
              NEO MAJESTIC
            </span>
            <span className="text-[0.65rem] tracking-[0.3em] uppercase opacity-60">
              HOTEL
            </span>
          </div>
          <p className="text-white/60 text-sm leading-relaxed">
            You have questions regarding our services? Contact us, we will be happy to help you out!
          </p>
          <div className="text-white/60 text-sm space-y-2">
            <p>Porvorim, Bardez, Near Azad Bhavan, Goa - 403521</p>
            <p>(0832)6710000 | (0832)6710100</p>
            <p>gm@neomajestic.com</p>
          </div>
        </div>

        {/* Links 1 */}
        <div className="space-y-6">
          <h4 className="font-serif text-lg font-bold text-gold">About Majestic</h4>
          <ul className="space-y-4 text-sm text-white/70">
            <li><a href="#" className="hover:text-gold transition-colors">About Us</a></li>
            <li><a href="#" className="hover:text-gold transition-colors">Rooms</a></li>
            <li><a href="#" className="hover:text-gold transition-colors">Room Pricing</a></li>
            <li><a href="#" className="hover:text-gold transition-colors">Restaurants</a></li>
            <li><a href="#" className="hover:text-gold transition-colors">Amenities</a></li>
            <li><a href="#" className="hover:text-gold transition-colors">Casino</a></li>
          </ul>
        </div>

        {/* Links 2 */}
        <div className="space-y-6">
          <h4 className="font-serif text-lg font-bold text-gold">More Links</h4>
          <ul className="space-y-4 text-sm text-white/70">
            <li><a href="#" className="hover:text-gold transition-colors">News</a></li>
            <li><a href="#" className="hover:text-gold transition-colors">Career</a></li>
            <li><a href="#" className="hover:text-gold transition-colors">Contact Us</a></li>
            <li><a href="#" className="hover:text-gold transition-colors">Terms of Use</a></li>
            <li><a href="#" className="hover:text-gold transition-colors">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Social */}
        <div className="space-y-6">
          <h4 className="font-serif text-lg font-bold text-gold">Connect Us</h4>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-gold hover:text-navy transition-all">
              <Facebook size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-gold hover:text-navy transition-all">
              <Twitter size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-gold hover:text-navy transition-all">
              <Instagram size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-gold hover:text-navy transition-all">
              <Linkedin size={18} />
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-white/10 text-center md:text-left flex flex-col md:flex-row justify-between text-xs text-white/40">
        <p>© 2026 Hotel Neo Majestic. All rights reserved.</p>
        <p>Designed with Luxury & Passion.</p>
      </div>
    </footer>
  );
};