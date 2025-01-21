export default function Hero() {
  return (
    <section className="h-screen relative flex items-center justify-center bg-gradient-to-br from-gray-700 to-gray-700">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3')] bg-cover bg-center opacity-10" />
      <div className="text-center z-10 px-4 space-y-6">
        <h1 
          className="text-4xl md:text-6xl font-bold text-white mb-4 opacity-0 animate-[fadeIn_1s_ease-out_forwards]"
          style={{ animationDelay: '0.3s' }}
        >
          Gujranwala Refrigeration Association
        </h1>
        <p 
          className="text-xl md:text-2xl text-white max-w-3xl mx-auto opacity-0 animate-[fadeIn_1s_ease-out_forwards]"
          style={{ animationDelay: '0.6s' }}
        >
          The premier association for HVAC workers and businesses
        </p>
        <div 
          className="flex justify-center space-x-4 opacity-0 animate-[fadeIn_1s_ease-out_forwards]"
          style={{ animationDelay: '0.9s' }}
        >
          <a 
            href="#about"
            className="px-8 py-3 bg-[#00E083] text-white rounded-full hover:bg-[#00E083]/90 transition-all duration-300 transform hover:scale-105"
          >
            Learn More
          </a>
          <a 
            href="#contact"
            className="px-8 py-3 border-2 border-white text-white rounded-full hover:bg-[#444444] hover:text-white transition-all duration-300 transform hover:scale-105"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}