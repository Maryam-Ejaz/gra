import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#444444] text-white" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <MapPin className="text-[#00E083]" />
                <span>Gujranwala, Pakistan</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="text-[#00E083]" />
                <span>+92 318 6430574</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="text-[#00E083]" />
                <span>grw.ref.assoc@gmail.com</span>
              </div>
            </div>
            <div className="mt-8 flex space-x-4">
              <a href="https://www.facebook.com/profile.php?id=100095064949367" className="hover:text-[#00E083] transition-colors duration-300"><Facebook /></a>
              <a href="#" className="hover:text-[#00E083] transition-colors duration-300"><Twitter /></a>
              <a href="#" className="hover:text-[#00E083] transition-colors duration-300"><Instagram /></a>
              <a href="#" className="hover:text-[#00E083] transition-colors duration-300"><Linkedin /></a>
            </div>
            
            {/* Navigation Links */}
            <nav className="mt-8 space-y-2">
              <Link href="#about" className="block text-white hover:text-[#00E083] transition-colors duration-300">
                About
              </Link>
              <Link href="/gallery" className="block text-white hover:text-[#00E083] transition-colors duration-300">
                Gallery
              </Link>
              <Link href="#contact" className="block text-white hover:text-[#00E083] transition-colors duration-300">
                Contact
              </Link>
            </nav>
          </div>
          <div className="h-[300px] rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3377.339378575319!2d74.1853789756377!3d32.16812187392404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzLCsDEwJzA1LjIiTiA3NMKwMTEnMTYuNiJF!5e0!3m2!1sen!2s!4v1737903194140!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            />
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-white/10 text-center">
          <p>&copy; {new Date().getFullYear()} Gujranwala Refrigeration Association. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}