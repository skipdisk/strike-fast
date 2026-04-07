import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { Testimonials } from "./components/Testimonials";
import { Philosophy } from "./components/Philosophy";
import { Gallery } from "./components/Gallery";
import { Footer } from "./components/Footer";
import { GeometricBackground } from "./components/GeometricBackground";

function App() {
  return (
    <div className="min-h-screen bg-neutral-100 text-white font-sans selection:bg-white selection:text-black relative">
      <GeometricBackground />
      <Header />
      <main className="relative z-10">
        <Hero />
        <Services />
        <Testimonials />
        <Philosophy />
        <Gallery />
      </main>
      <Footer />
    </div>
  );
}

export default App;
