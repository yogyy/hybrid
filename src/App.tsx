import { HeroSection } from "./components/section/hero";
import { Navbar } from "./components/navbar";
import { Service } from "./components/section/services";
import { CategorySection } from "./components/section/categories";
import { GlobalTrust } from "./components/section/global-trust";
import { HiW } from "./components/section/how-it-works";

import { BlogSection } from "./components/section/blog";
import { Testimonial } from "./components/section/testimonial";
import { GetinTouch } from "./components/section/get-in-touch";
import { lazy } from "react";

const PricingPlan = lazy(() =>
  import("./components/section/pricing-plan").then((comp) => ({
    default: comp.PricingPlan,
  })),
);
const WhyChooseUs = lazy(() =>
  import("./components/section/why-choose-us").then((comp) => ({
    default: comp.WCU,
  })),
);

const Footer = lazy(() => import("./components/footer"));

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Service />
      <GlobalTrust />
      <HiW />
      <WhyChooseUs />
      <CategorySection />
      <BlogSection />
      <Testimonial />
      <PricingPlan />
      <GetinTouch />
      <Footer />
    </>
  );
}

export default App;
