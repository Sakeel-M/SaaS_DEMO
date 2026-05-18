import Hero from "@/components/sections/Hero";
import EditorialSpace from "@/components/sections/EditorialSpace";
import NewReleases from "@/components/sections/NewReleases";
import AboutCourse from "@/components/sections/AboutCourse";
import TopDeals from "@/components/sections/TopDeals";
import HowItWorks from "@/components/sections/HowItWorks";
import FeaturesGrid from "@/components/sections/FeaturesGrid";
import Pricing from "@/components/sections/Pricing";
// import Testimonials from "@/components/sections/Testimonials";  // hidden temporarily
import FAQ from "@/components/sections/FAQ";
import FooterCTA from "@/components/sections/FooterCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <NewReleases />
      <AboutCourse />
      <TopDeals />
      <EditorialSpace />
      <HowItWorks />
      <FeaturesGrid />
      <Pricing />
      {/* <Testimonials /> hidden temporarily */}
      <FAQ />
      <FooterCTA />
    </>
  );
}
