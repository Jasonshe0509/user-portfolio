import React from "react";
import HeroSection from "@/components/HeroSection";
import AchievementsSection from "@/components/AchievementsSection";
import AboutMe from "@/components/AboutMe";
import Project from "@/components/Project";
import EmailSection from "@/components/EmailSection";
import Navbar from "@/components/NavBar";
import Footer from "@/components/Footer";

export default function Home(){
  return(
    <div className="flex min-h-screen flex-col">
      <main>
        <Navbar/>
        <HeroSection />
        <AchievementsSection/>
        <AboutMe/>
        <Project/>
        <EmailSection/>
      </main>
      <Footer/>
    </div>
  );
}