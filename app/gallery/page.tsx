"use client"
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import Navigation from '@/components/navigation';
import Footer from '@/components/footer';

// Generate images dynamically from the gallery folder (1.jpeg to 64.jpeg)
const images = Array.from({ length: 64 }, (_, i) => ({
  id: i + 1,
  url: `/images/gallery/${i + 1}.jpeg`, // Assuming images are located in public/images/gallery
  title: `GRA Event Image ${i + 1}`,
}));

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [visibleImages, setVisibleImages] = useState<number[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setVisibleImages(prev => [...prev, Number(entry.target.id)]);
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.gallery-image').forEach(img => {
      observer.observe(img);
    });

    return () => observer.disconnect();
  }, []);

  const handleNext = () => {
    setSelectedImage(prev => (prev === null || prev === images.length - 1) ? 0 : prev + 1);
  };

  const handlePrev = () => {
    setSelectedImage(prev => (prev === null || prev === 0) ? images.length - 1 : prev - 1);
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Escape') setSelectedImage(null);
    if (e.key === 'ArrowRight') handleNext();
    if (e.key === 'ArrowLeft') handlePrev();
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      
      <div className="pt-32 px-8 md:px-16">
        <h1 className="text-4xl font-bold text-[#444444] mb-4 animate-fadeIn">
          Our Gallery
        </h1>
        <p className="text-[#444444]/60 max-w-2xl mb-12 animate-fadeIn" style={{ animationDelay: '0.2s' }}>
        Explore our curated gallery showcasing the highlights of the Gujranwala Refrigeration Association's most recent event, featuring cutting-edge innovations in refrigeration and HVAC technology.
        </p>

        <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-8 space-y-8 mb-20">
          {images.map((image, index) => (
            <div
              key={image.id}
              id={String(index)}
              className={`gallery-image break-inside-avoid transition-all duration-700 ${
                visibleImages.includes(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
              }`}
              onClick={() => setSelectedImage(index)}
            >
              <div className="relative group cursor-pointer">
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-[1.02]"
                />
                <div className="absolute inset-0 bg-[#00E083]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
                <div className="absolute inset-0 flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-black/70 text-white p-2 rounded-lg text-sm w-full">
                    <h3 className="font-semibold">{image.title}</h3>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Fullscreen Image View */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center">
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 text-white hover:text-[#00E083] transition-colors"
          >
            <X size={32} />
          </button>
          
          <button
            onClick={handlePrev}
            className="absolute left-4 text-white hover:text-[#00E083] transition-colors"
          >
            <ChevronLeft size={48} />
          </button>
          
          <img
            src={images[selectedImage].url}
            alt={images[selectedImage].title}
            className="max-h-[90vh] max-w-[90vw] object-contain"
          />
          
          <button
            onClick={handleNext}
            className="absolute right-4 text-white hover:text-[#00E083] transition-colors"
          >
            <ChevronRight size={48} />
          </button>
        </div>
      )}

      <Footer />
    </main>
  );
}

