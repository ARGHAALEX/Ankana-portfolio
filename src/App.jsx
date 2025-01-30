import { useState } from "react";


import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import TEcnologies from "./components/TEcnologies";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import LocomotiveScroll from 'locomotive-scroll';

function App() {
  const [count, setCount] = useState(0);
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:border-y-cyan-300 selection:text-cyan-900">
      <div className="fixed top-0 -z-0 h-full w-full">
      </div>
      {/* <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div> */}

      <div className="container mx-auto px-10">

     <Navbar />
      </div>
      <Hero/>
      <About/>
      <TEcnologies/>
      <Experience/>
      <Projects/>
      <Contact/>
    </div>
  );
}

export default App;
