export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-[#444444] mb-12 text-center">
          About Us
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <p className="text-[#444444] text-lg leading-relaxed">
              Gujranwala Refrigeration Association is a dedicated organization for the welfare of HVAC workers and business persons in Gujranwala Division, Pakistan. We strive to create a sustainable future for our members by facilitating networking opportunities, promoting educational and skill-building programs, and advocating for the HVAC industry.
            </p>
          </div>
          <div className="space-y-6">
            <p className="text-[#444444] text-lg leading-relaxed">
              Our professional association aims to uplift the experiences of our members through strategic partnerships and collaborations. With a commitment to ongoing improvement and growth, we provide the resources needed to navigate the ever-evolving HVAC landscape.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}