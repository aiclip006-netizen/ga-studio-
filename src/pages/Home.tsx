import React from "react";
import Hero from "@/src/components/sections/Hero";
import IntroStatement from "@/src/components/sections/Home/IntroStatement";
import SignatureReel from "@/src/components/sections/Home/SignatureReel";
import ServicesPreview from "@/src/components/sections/Home/ServicesPreview";
import FeaturedFilms from "@/src/components/sections/Home/FeaturedFilms";
import GalleryTeaser from "@/src/components/sections/Home/GalleryTeaser";
import ClientLove from "@/src/components/sections/Home/ClientLove";
import FounderQuote from "@/src/components/sections/Home/FounderQuote";
import FinalCTA from "@/src/components/sections/Home/FinalCTA";

export default function Home() {
  return (
    <main>
      <Hero />
      <IntroStatement />
      <SignatureReel />
      <ServicesPreview />
      <FeaturedFilms />
      <GalleryTeaser />
      <ClientLove />
      <FounderQuote />
      <FinalCTA />
    </main>
  );
}
