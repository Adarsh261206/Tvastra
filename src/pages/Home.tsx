import SEO from '../components/SEO';
import Hero from '../components/home/Hero';
import HomeAbout from '../components/home/HomeAbout';
import ClassesSection from '../components/home/ClassesSection';
import TestimonialsSection from '../components/home/TestimonialsSection';
import ClientsSection from '../components/home/ClientsSection';
import FounderTeaser from '../components/home/FounderTeaser';
import InstagramFeed from '../components/home/InstagramFeed';
import FinalCTA from '../components/home/FinalCTA';

export default function Home() {
  return (
    <main className="overflow-x-clip">
      <SEO
        title="TVASTRA Art Studio | Art Classes, Workshops & Creative Learning"
        description="TVASTRA Art Studio offers art classes, workshops and creative learning for kids, teens and adults in Thane. Drawing, painting, calligraphy, traditional and modern art."
        canonical="/"
        keywords="art studio Thane, art classes Thane, drawing classes, painting workshops, calligraphy classes, kids art, teen art, adult art, creative learning"
      />
      <Hero />
      <HomeAbout />
      <ClassesSection />
      <TestimonialsSection />
      <ClientsSection />
      <FounderTeaser />
      <InstagramFeed />
      <FinalCTA />
    </main>
  );
}
