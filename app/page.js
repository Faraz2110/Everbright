"use client"
import Header from "./components/Header";
import HomeSection from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import TestimonialsCarousel from "./components/Comments";
import Carousel from "./components/Carousel";
import Clients from "./components/Client";

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      {/* Navbar */}
      <Header />

      {/* Main content */}
      <main className="flex-1">
       
        <HomeSection />
         {/* <Carousel/> */}
        <Services />
        <About />
        <Contact />
        <Clients/>
        <TestimonialsCarousel/>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
