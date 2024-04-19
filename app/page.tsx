"use client";
import ReduxProvider from "@/redux/ReduxProvider";

import HeroSection from "./HeroSection";

export default function Home() {
  return (
    <ReduxProvider>
      <HeroSection />
    </ReduxProvider>
  );
}
