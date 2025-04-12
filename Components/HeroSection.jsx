import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Header from "./Header";

export default function HeroSection() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Calculate animation values
  const translateY = Math.min(scrollY / 3, 100); // Limit max move
  const opacity = Math.max(1 - scrollY / 500, 0); // Fade out

  return (
    <div className="hero-clip w-full -mt-16 h-screen bg-[url('/HeroSection.jpg')] bg-cover bg-center relative">
      <div className="bg-black/10 h-full w-full">
        <Header />
        <div className="w-full h-screen -mt-20 flex justify-center items-center">
          <motion.div
            className="text-center text-white"
            style={{
              transform: `translateY(-${translateY}px)`,
              opacity: opacity,
            }}
          >
            <h2 className="text-6xl font-[cursive] font-thin">Welcome to</h2>
            <h1 className="text-9xl font-bold font-serif">CAFE</h1>
            <h1 className="text-7xl font-bold font-serif">CENTRAL</h1>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
