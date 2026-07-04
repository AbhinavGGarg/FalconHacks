import Experience from "@/components/Experience";
import Faq from "@/components/Faq";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Nav from "@/components/Nav";
import OpenToAll from "@/components/OpenToAll";
import Sponsors from "@/components/Sponsors";
import Venue from "@/components/Venue";
import Why from "@/components/Why";

export default function Home() {
  return (
    <>
      <Nav />
      <main id="main">
        <Hero />
        <Marquee />
        <Why />
        <Experience />
        <OpenToAll />
        <Venue />
        <Sponsors />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
