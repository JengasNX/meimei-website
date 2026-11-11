import { About } from "@/sections/About";
import { Combat } from "@/sections/Combat";
import { Community } from "@/sections/Community";
import { Evolution } from "@/sections/Evolution";
import { Features } from "@/sections/Features";
import { Footer } from "@/components/Footer";
import { Gameplay } from "@/sections/Gameplay";
import { Hero } from "@/sections/Hero";
import { Leaderboard } from "@/sections/Leaderboard";
import { Navbar } from "@/components/Navbar";
import { Progression } from "@/sections/Progression";
import { Shop } from "@/sections/Shop";
import { Team } from "@/sections/Team";
import { Tycoon } from "@/sections/Tycoon";
import { Updates } from "@/sections/Updates";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Gameplay />
        <Tycoon />
        <Evolution />
        <Combat />
        <Progression />
        <Features />
        <Updates />
        <Leaderboard />
        <Shop />
        <Team />
        <Community />
      </main>
      <Footer />
    </>
  );
}
