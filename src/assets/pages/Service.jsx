import { AnimatedHeading } from "../components/AnimatedHeading";
import { FeaturesSection } from "../components/FeaturesSections.ui";
import { ServiceWeProvide } from "../components/ServiceWeProvide";
import  Statistics  from "../components/Statistics";
import { ServiceDevelopmentProject } from "../components/ServicesDevelopmentProject";
import { ServicesCards } from "../components/ServicesCards";

export default function Service() {
  return (
    <>
      <AnimatedHeading
      title="Our Values"
      description="Our values are foundational and are reflected in each one of us. Be it with our work or our people, these are absolute."  />
      <FeaturesSection />
      <ServiceWeProvide />
      <Statistics />
      <ServiceDevelopmentProject/>
      <ServicesCards/>
    </>
  );
}
