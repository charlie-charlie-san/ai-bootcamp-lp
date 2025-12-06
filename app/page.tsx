import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Gap } from "./components/Gap";
import { Curriculum } from "./components/Curriculum";
import { Showcase } from "./components/Showcase";
import { Instructor } from "./components/Instructor";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#0a0a0a]">
      <Header />
      <Hero />
      <Gap />
      <Curriculum />
      <Showcase />
      <Instructor />
      <Footer />
    </main>
  );
}
