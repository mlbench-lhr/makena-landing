import Image from "next/image";
import Layout from "./components/Layout/Layout";
import HeroSection from "./components/HeroHome/HeroSection";
import RecoveryChallenges from "./components/RecoveryChallenge/RecoveryChallenges";
import ToolsSection from "./components/ToolsSection/ToolsSection";
import WorkSection from "./components/WorkSection/WorkSection";

import { PricingSection } from "./components/Pricing/PricingSection";
import { Testimonial } from "./components/Testimoinal/Testimonial";
import FaqSection from "./components/FaqSection/FaqSection";

export default function Home() {
  return (
    <div>
     <Layout>
      <HeroSection/>
      <RecoveryChallenges/>
      <ToolsSection/>
      <WorkSection/>
    <Testimonial/>
     <PricingSection/>
     <FaqSection/>
     </Layout>
    </div>
  );
}
