import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import TrustedBySection from '@/components/TrustedBySection';
import ServicesSection from '@/components/ServicesSection';
import IndustriesSection from '@/components/IndustriesSection';
import WhyChooseUsSection from '@/components/WhyChooseUsSection';
import HowWeWorkSection from '@/components/HowWeWorkSection';
import SupplyCategoriesSection from '@/components/SupplyCategoriesSection';
import BlogSection from '@/components/BlogSection';
import ContactCTASection from '@/components/ContactCTASection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <TrustedBySection />
        <ServicesSection />
        <IndustriesSection />
        <WhyChooseUsSection />
        <HowWeWorkSection />
        <SupplyCategoriesSection />
        <BlogSection />
        <ContactCTASection />
      </main>
      <Footer />
    </>
  );
}
