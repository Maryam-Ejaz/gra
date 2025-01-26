"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-[#444444] transform hover:scale-110 transition-transform duration-300">
              <img src="/logo1.png" alt="Logo" className="w-20 h-20" />
            </Link>
          </div>


          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/#about"
              className="text-[#444444] hover:text-[#00E083] transition-all duration-300 hover:scale-110"
            >
              About
            </Link>
            <Link
              href="/gallery"
              className="text-[#444444] hover:text-[#00E083] transition-all duration-300 hover:scale-110"
            >
              Gallery
            </Link>
            <Link
              href="#contact"
              className="text-[#444444] hover:text-[#00E083] transition-all duration-300 hover:scale-110"
            >
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#444444] hover:text-[#00E083] transition-all duration-300 hover:scale-110 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 top-20 bg-black backdrop-blur-lg z-50">
          <div className="pt-2 pb-3 space-y-1">
            <Link
              href="/#about"
              className="block px-4 py-2 text-black hover:bg-[#00E083]/20 transition-all duration-300"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              href="/gallery"
              className="block px-4 py-2 text-black hover:bg-[#00E083]/20 transition-all duration-300"
              onClick={() => setIsOpen(false)}
            >
              Gallery
            </Link>
            <Link
              href="#contact"
              className="block px-4 py-2 text-black hover:bg-[#00E083]/20 transition-all duration-300"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}