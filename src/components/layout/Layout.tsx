import { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import EnquiryModal from '../forms/EnquiryModal';
import PageTransition from '../motion/PageTransition';
import SocialFloatingLinks from '../ui/SocialFloatingLinks';
import WhatsAppFloat from '../ui/WhatsAppFloat';
import BackToTop from '../ui/BackToTop';

const structuredData = {
  "@context": "https://schema.org",
  "@type": "ArtSchool",
  "name": "TVASTRA Art Studio",
  "description": "Art classes, workshops and creative learning for kids, teens and adults in Thane. Drawing, painting, calligraphy and more.",
  "url": "https://tvasthra.com",
  "telephone": "+91-8291418107",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Vardhaman Vatika, A wing-104, Opp. Kolshet Dmart, Kailash Nagar",
    "addressLocality": "Thane",
    "addressRegion": "Maharashtra",
    "postalCode": "400607",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "19.2183",
    "longitude": "72.9781"
  },
  "areaServed": "Thane",
  "serviceType": ["Art Classes", "Art Workshops", "Calligraphy Classes", "Drawing Classes", "Painting Classes"],
  "priceRange": "$$",
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "10:30",
      "closes": "18:30"
    }
  ],
  "sameAs": [
    "https://www.instagram.com/tvastra.wingstoyourcreativity/",
    "https://www.facebook.com/tvastra.wingstoyourcreativity/",
    "https://youtube.com/@tvastra8046"
  ]
};

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#FAF8F3] text-[#202321] selection:bg-[#159F9B]/20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Navbar />
      <SocialFloatingLinks />
      <WhatsAppFloat />
      <BackToTop />

      <main className="flex-grow overflow-x-clip">
        <PageTransition>{children}</PageTransition>
      </main>

      <Footer />

      <EnquiryModal
        isOpen={isEnquiryOpen}
        onClose={() => setIsEnquiryOpen(false)}
      />
    </div>
  );
}
