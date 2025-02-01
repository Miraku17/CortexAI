import React from "react";
import { Navbar } from "./layout/navBar";
import HeroPage from "./layout/heroPage";
import CTASection from "./layout/CTASection";
import MockUI from "./layout/MockUI";
const LandingPage = () => {
  return (
    <>
      <Navbar />
      <div className="hero-page-bg min-h-64">
        <HeroPage />
        <MockUI />
      </div>

      <CTASection />
    </>
  );
};

export default LandingPage;
