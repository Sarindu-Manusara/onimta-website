
import About from "./components/About";
import Blog from "./components/BLog";
import ClientCarousel from "./components/ClientCarousel";
import Contact from "./components/Contact";
import CtaOne from "./components/CtaOne";
import CtaSix from "./components/CtaTwo";
import FeatureTwo from "./components/FeatureTwo";
import FeatureOne from "./components/FeatureTwo";
import FooterThree from "./components/Footer";
import FunFact from "./components/FunFact";
import HeaderThreeSingle from "./components/HeaderSingle";
import HeaderThreeSingleCloned from "./components/HeaderSingleCloned";
import Layout from "./components/Layout";
import Mail from "./components/Mail";
import MainSliderThree from "@/components/MainSliderThree/MainSliderThree";
import ProjectTwo from "@/components/ProjectsTwo/ProjectsTwo";
import SkillOne from "@/components/SkillOne/SkillOne";
import TeamTwo from "@/components/TeamTwo/TeamTwo";
import TestimonialsTwo from "@/components/TestimonialsTwo/TestimonialsTwo";
import TopbarThree from "@/components/TopbarThree/TopbarThree";
import WhyChooseOne from "@/components/WhyChooseOne/WhyChooseOne";
import React from "react";

export const metadata = {
  title: "Home Three || Tolak || NextJS Template For It Solution & Business",
  description:
    "Tolak is a modern NextJS Template for Business, It Solution, Corporate, Agency, Portfolio shops. The template perfectly fits Beauty Spa, Salon, and Wellness Treatments websites and businesses.",
};

const page = () => {
  return (
    <Layout pageTitle='homeThree'>
      <TopbarThree />
      <HeaderThreeSingle />
      <HeaderThreeSingleCloned />
      <MainSliderThree />
      <FeatureTwo />
      <About />
      <FunFact />
      <CtaSix />
      <WhyChooseOne />
      <TestimonialsTwo />
      <ProjectTwo />
      <CtaOne />
      <TeamTwo />
      <ClientCarousel pageTitle="homeThree" />
      <SkillOne />
      <FeatureOne />
      <Contact />
      <Blog />
      <Mail />
      <FooterThree />
    </Layout>
  );
};

export default page;
