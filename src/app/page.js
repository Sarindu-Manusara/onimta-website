
import About from "./components/About";
import Blog from "./components/BLog";
import ClientCarousel from "./components/ClientCarousel";
import Contact from "./components/Contact";
import CtaOne from "./components/CtaOne";
import CtaSix from "@/components/CtaSix/CtaSix";
import FeatureFour from "@/components/FeatureFour/FeatureFour";
import FeatureThree from "@/components/FeatureThree/FeatureThree";
import FooterThree from "@/components/FooterThree/FooterThree";
import FunFactTwo from "@/components/FunFactTwo/FunFactTwo";
import HeaderThreeSingle from "@/components/HeaderThree/HeaderThreeSingle";
import HeaderThreeSingleCloned from "@/components/HeaderThree/HeaderThreeSingleCloned";
import Layout from "@/components/Layout/Layout";
import MailTwo from "@/components/MailTwo/MailTwo";
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
      <FeatureFour />
      <About />
      <FunFactTwo />
      <CtaSix />
      <WhyChooseOne />
      <TestimonialsTwo />
      <ProjectTwo />
      <CtaOne />
      <TeamTwo />
      <ClientCarousel pageTitle="homeThree" />
      <SkillOne />
      <FeatureThree />
      <Contact />
      <Blog />
      <MailTwo />
      <FooterThree />
    </Layout>
  );
};

export default page;
