
import About from "./components/About";
import Blog from "./components/BLog";
import ClientCarousel from "./components/ClientCarousel";
import Contact from "./components/Contact";
import CtaOne from "./components/CtaOne";
import CtaSix from "./components/CtaTwo";
import FeatureTwo from "./components/FeatureTwo";
import FeatureOne from "./components/FeatureTwo";
import Footer from "./components/Footer";
import FunFact from "./components/FunFact";
import HeaderSingle from "./components/HeaderSingle";
import HeaderSingleCloned from "./components/HeaderSingleCloned";
import Layout from "./components/Layout";
import Mail from "./components/Mail";
import MainSlider from "./components/MainSlider";
import Project from "./components/Project";
import Skill from "./components/Skill";
import Team from "./components/Team";
import Testimonials from "./components/Testimonials";
import Topbar from "./components/Topbar";
import WhyChoose from "./components/WhyChoose";
import React from "react";

export const metadata = {
  title: "Home Three || Tolak || NextJS Template For It Solution & Business",
  description:
    "Tolak is a modern NextJS Template for Business, It Solution, Corporate, Agency, Portfolio shops. The template perfectly fits Beauty Spa, Salon, and Wellness Treatments websites and businesses.",
};

const page = () => {
  return (
    <Layout pageTitle='home'>
      <Topbar />
      <HeaderSingle />
      <HeaderSingleCloned />
      <MainSlider />
      <FeatureTwo />
      <About />
      <FunFact />
      <CtaSix />
      <WhyChoose />
      <Testimonials />
      <Project />
      <CtaOne />
      <Team />
      <ClientCarousel pageTitle="home" />
      <Skill />
      <FeatureOne />
      <Contact />
      <Blog />
      <Mail />
      <Footer />
    </Layout>
  );
};

export default page;
