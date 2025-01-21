import Link from "next/link";

export default function Events() {
  const events = [
    {
      name: "Annual GRA Conference",
      image: `/images/events/conference.jpeg`,
      description: "Join us for the largest HVAC industry gathering in the region, featuring keynote speakers and networking opportunities."
    },
    {
      name: "Annual GRA Meeting 2023",
      image: `/images/events/meeting.jpeg`,
      description: "Hands-on training sessions covering the latest HVAC technologies and maintenance techniques."
    },
    {
      name: "GRA Protest",
      image: `/images/events/protest.jpeg`,
      description: "Participate to bring about change in HVAC Sector."
    },
    {
      name: "GRA Tour",
      image: `/images/events/tour.jpeg`,
      description: "Connect with fellow HVAC professionals and industry leaders in a casual networking environment."
    }
  ];

  return (
    <section className="py-20 bg-[#444444]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center animate-fadeIn">
          Our Events
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {events.map((event, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-all duration-300"
              style={{
                animation: `fadeIn 0.5s ease-out forwards ${index * 0.2}s`,
                opacity: 0
              }}
            >
              <div className="relative aspect-video group">
                <img
                  src={event.image}
                  alt={event.name}
                  className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[#00E083]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#444444] mb-2">{event.name}</h3>
                <p className="text-[#444444]/60">{event.description}</p>
                <button className="mt-4 px-6 py-2 bg-[#00E083] text-white rounded-full hover:bg-[#00E083]/90 transition-colors duration-300">
                  <Link
                    href="/gallery"
                  >
                    Learn More
                  </Link>

                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}