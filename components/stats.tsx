import { Users, MapPin, Calendar } from 'lucide-react';

export default function Stats() {
  return (
    <section className="py-16 bg-[#00E083]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-[#444444]">
            <Users size={80} className="mb-4" />
            <h3 className="text-3xl font-bold mb-2">500+</h3>
            <p className="text-lg">Members</p>
          </div>
          <div className="flex flex-col items-center text-[#444444]">
            <MapPin size={80} className="mb-4" />
            <h3 className="text-3xl font-bold mb-2">50+</h3>
            <p className="text-lg">Cities</p>
          </div>
          <div className="flex flex-col items-center text-[#444444]">
            <Calendar size={80} className="mb-4" />
            <h3 className="text-3xl font-bold mb-2">3+</h3>
            <p className="text-lg">Events</p>
          </div>
        </div>
      </div>
    </section>
  );
}