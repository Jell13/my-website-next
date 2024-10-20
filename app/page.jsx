"use client"

import Image from "next/image";
import { useEffect } from "react";
import Lenis from "lenis";
import About from "./sections/About";
import Hero from "./sections/Hero";
import NavBar from "./components/NavBar";
import Layout from "./animation/Layout";

export default function Home() {
  
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  })

  return (
    <div className="min-h-screen">
      <NavBar/>
      <Hero/>
      <About/>
    </div>
  );
}
