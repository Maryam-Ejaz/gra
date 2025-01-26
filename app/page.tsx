import Navigation from '@/components/navigation';
import Hero from '@/components/hero';
import About from '@/components/about';
import Stats from '@/components/stats';
import Mission from '@/components/mission';
import VideoSection from '@/components/video-section';
import Members from '@/components/members';
import Events from '@/components/events';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Stats />
      <Mission />
      <VideoSection />
      <Members />
      <Events />
      <Footer />
    </main>
  );
}