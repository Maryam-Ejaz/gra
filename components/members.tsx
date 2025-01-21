import { Facebook, Twitter, Linkedin, Instagram, Youtube, Music2 } from 'lucide-react';

type Socials = {
  facebook?: string;
  twitter?: string;
  linkedin?: string;
  instagram?: string;
  tiktok?: string;
  youtube?: string;
};

const executiveMembers: { name: string; designation: string; image: string; socials: Socials }[] = [

  {
    name: "Mian Muhammad Rafique",
    designation: "Chairman",
    image: "/images/members/chairman.jpeg",
    socials: {
      facebook: "#",
      twitter: "#",
      linkedin: "#"
    }
  },
  {
    name: "Zia ul Haq Qureshi",
    designation: "Vice Chairman",
    image: "/images/members/vice_chairman.jpeg",
    socials: {
      facebook: "#",
      twitter: "#",
      linkedin: "#"
    }
  },
  {
    name: "Mehar Ejaz Hussain",
    designation: "President",
    image: "/images/members/president.jpeg",
    socials: {
      facebook: "#",
      twitter: "#",
      linkedin: "#"
    }
  },
  {
    name: "Ejaz Arif",
    designation: "General Secretary",
    image: "/images/members/general_secretary.jpeg",
    socials: {
      facebook: "https://www.facebook.com/ejaz.arif.16",
      youtube: "https://youtube.com/@falcon_insights?si=O0SF-vZZY5rJfsg7",
      instagram: "https://www.instagram.com/ejaz_arif_?igsh=cTVyeGhmajlrMmZ0"
    }
  },
 
  
];

const otherMembers:  { name: string; designation: string; image: string; socials: Socials }[] = [
  {
    name: "Imran Abid Butt",
    designation: "Advisor to Chairman",
    image: "/images/members/Advisor to Chairman.jpeg",
    socials: {
      facebook: "#",
      twitter: "#",
      linkedin: "#"
    }
  },
  {
    name: "M. Ilyas Chuhan",
    designation: "Chairman Audit",
    image: "/images/members/chairman_audit.jpeg",
    socials: {
      facebook: "#",
      twitter: "#",
      linkedin: "#"
    }
  },
  {
    name: "Nasir Ali",
    designation: "Senior Vice President",
    image: "/images/members/senior_vice_president.jpg",
    socials: {
      facebook: "#",
      twitter: "#",
      linkedin: "#"
    }
  },
  {
    name: "Muhammad Ashraf",
    designation: "Organizer",
    image: "/images/members/organizer.jpeg",
    socials: {
      facebook: "#",
      twitter: "#",
      linkedin: "#"
    }
  },
  {
    name: "Ali Mehar",
    designation: "Senior Sector Incharge",
    image: "/images/members/senior_sector_incharge.jpeg",
    socials: {
      facebook: "https://www.facebook.com/share/18SDTAE7eS/",
      twitter: "https://x.com/AliMehar83?s=08",
      instagram: "https://www.instagram.com/alinsafengineering?igsh=MTZ2cXY5dWh0ZXltYQ==",
      tiktok: "https://www.tiktok.com/@alinsafengineering?_t=ZS-8tEN81MvHmi&_r=1"
    }
  },
  {
    name: "Rana Abdul Raouf",
    designation: "Vice President",
    image: "/images/members/vice_president.jpeg",
    socials: {
      facebook: "#",
      twitter: "#",
      linkedin: "#"
    }
  },
  {
    name: "Ch. Khalid Siddique",
    designation: "Vice President",
    image: "/images/members/vice_president1.jpeg",
    socials: {
      facebook: "#",
      twitter: "#",
      linkedin: "#"
    }
  },
  {
    name: "Tariq Mehmood Bhatti",
    designation: "Information Secratary",
    image: "/images/members/information_secratary.jpeg",
    socials: {
      facebook: "#",
      twitter: "#",
      linkedin: "#"
    }
  },
  {
    name: "Abid Mehmood",
    designation: "Deputy General Secratary",
    image: "/images/members/dpt_general_secratay.jpg",
    socials: {
      facebook: "#",
      twitter: "#",
      linkedin: "#"
    }
  },
  {
    name: "Taswar Hussain",
    designation: "Deputy Finance Secratary",
    image: "/images/members/dpt_finance_Seratary.jpeg",
    socials: {
      facebook: "#",
      twitter: "#",
      linkedin: "#"
    }
  },
  {
    name: "Falak Sher",
    designation: "Audit Officer",
    image: "/images/members/audit_officer.jpeg",
    socials: {
      facebook: "#",
      twitter: "#",
      linkedin: "#"
    }
  },
  {
    name: "Muhammad Ramzan",
    designation: "Auditor",
    image: "/images/members/auditor.jpg",
    socials: {
      facebook: "#",
      twitter: "#",
      linkedin: "#"
    }
  },
  {
    name: "Ehsaan Ullah",
    designation: "Reconciliation Officer",
    image: "/images/members/reconcilation_officer.jpeg",
    socials: {
      facebook: "#",
      twitter: "#",
      linkedin: "#"
    }
  },
  
];

export default function Members() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-[#444444] mb-10 text-center animate-fadeIn">
          Our Members
        </h2>
        <h3 className="text-1xl md:text-2xl text-[#444444] mx-80 mb-12 text-center animate-fadeIn">
          Meet the passionate individuals who are the driving force behind Gujranwala Refrigeration Association's Success.
        </h3>
        
        {/* Executive Members */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {executiveMembers.map((member, index) => (
            <div
              key={index}
              className="text-center transform hover:scale-105 transition-all duration-300"
              style={{
                animation: `fadeIn 0.5s ease-out forwards ${index * 0.2}s`,
                opacity: 0,
              }}
            >
              <div className="relative mb-4 aspect-square group">
                <img
                  src={member.image}
                  alt={member.name}
                  className="rounded-lg object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[#00E083]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
              </div>
              <h3 className="text-xl font-semibold text-[#444444] mb-1">{member.name}</h3>
              <p className="text-[#444444]/60 mb-3">{member.designation}</p>
              <div className="flex justify-center space-x-4">
                {member.socials.facebook && (
                  <a href={member.socials.facebook} className="text-[#444444] hover:text-[#00E083] transition-colors">
                    <Facebook size={20} />
                  </a>
                )}
                {member.socials.twitter && (
                  <a href={member.socials.twitter} className="text-[#444444] hover:text-[#00E083] transition-colors">
                    <Twitter size={20} />
                  </a>
                )}
                {member.socials.linkedin && (
                  <a href={member.socials.linkedin} className="text-[#444444] hover:text-[#00E083] transition-colors">
                    <Linkedin size={20} />
                  </a>
                )}
                {member.socials.instagram && (
                  <a href={member.socials.instagram} className="text-[#444444] hover:text-[#00E083] transition-colors">
                    <Instagram size={20} />
                  </a>
                )}
                {member.socials.tiktok && (
                  <a href={member.socials.tiktok} className="text-[#444444] hover:text-[#00E083] transition-colors">
                    <Music2 size={20} />
                  </a>
                )}
                {member.socials.youtube && (
                  <a href={member.socials.youtube} className="text-[#444444] hover:text-[#00E083] transition-colors mb-5">
                    <Youtube size={20} />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Other Members */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {otherMembers.map((member, index) => (
            <div
              key={index}
              className="text-center transform hover:scale-105 transition-all duration-300"
              style={{
                animation: `fadeIn 0.5s ease-out forwards ${index * 0.15}s`,
                opacity: 0,
              }}
            >
              <div className="relative mb-2 aspect-square group">
                <img
                  src={member.image}
                  alt={member.name}
                  className="rounded-full object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[#00E083]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
              </div>
              <h4 className="text-sm font-semibold text-[#444444]">{member.name}</h4>
              <p className="text-xs text-[#444444]/60 mb-2">{member.designation}</p>
              <div className="flex justify-center space-x-2 scale-75">
                {member.socials.facebook && (
                  <a href={member.socials.facebook} className="text-[#444444] hover:text-[#00E083] transition-colors">
                    <Facebook size={16} />
                  </a>
                )}
                {member.socials.twitter && (
                  <a href={member.socials.twitter} className="text-[#444444] hover:text-[#00E083] transition-colors">
                    <Twitter size={16} />
                  </a>
                )}
                {member.socials.linkedin && (
                  <a href={member.socials.linkedin} className="text-[#444444] hover:text-[#00E083] transition-colors">
                    <Linkedin size={16} />
                  </a>
                )}
                {member.socials.instagram && (
                  <a href={member.socials.instagram} className="text-[#444444] hover:text-[#00E083] transition-colors">
                    <Instagram size={16} />
                  </a>
                )}
                {member.socials.tiktok && (
                  <a href={member.socials.tiktok} className="text-[#444444] hover:text-[#00E083] transition-colors">
                    <Music2 size={16} />
                  </a>
                )}
                {member.socials.youtube && (
                  <a href={member.socials.youtube} className="text-[#444444] hover:text-[#00E083] transition-colors">
                    <Youtube size={20} className=' mb-25 mt-0'/>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
