"use client"

import './globals.css'; // Ensure this is imported in _app.tsx


import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Education from "@/components/Education";
import Interests from "@/components/Interests";
import SocialLinks from "@/components/SocialLinks";


export default function Home() {

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      {/* <h1 className="text-4xl font-bold mb-4">Welcome to Your Blank App</h1> */}
      <main>
        {/* <p className="text-xl text-gray-600">Start building your amazing project here!</p> */}
        <div className="flex flex-col md:flex-row gap-8">
          <Hero />
          <About />
        </div>
        <div className="flex flex-col bg-secondary md:flex-row gap-28">
          <Interests />
          <Education />
        </div>
        <SocialLinks />
      </main>

    </div>
  );
};
