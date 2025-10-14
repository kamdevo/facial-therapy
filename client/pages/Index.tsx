import Header from "../components/Header";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Promotions from "../components/Promotions";
import About from "../components/About";
import InstagramSection from "../components/InstagramSection";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";

export default function Index() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Services />
        <Promotions />
        <About />
        <InstagramSection />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
