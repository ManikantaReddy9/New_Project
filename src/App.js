import { useState, useEffect, useRef } from "react";
import "./App.css";
import ChooseEfficiency from "./components/ChooseEfficiency";
import CreditSlides from "./components/CreditSlides";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import RolesDiagram from "./components/RolesDiagram";
import SyntheticDollar from "./components/SyntheticDollar";
import myMusic from "../src/assets/music.mp3"

const sections = [
  Hero,
  SyntheticDollar,
  CreditSlides,
  RolesDiagram,
  ChooseEfficiency,
  Footer,
];

export default function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const intervalRef = useRef(null);


  const audioRef = useRef(null);

  const isCreditSlides = sections[currentIndex] === CreditSlides;

  // Outer auto-scroll effect
  useEffect(() => {
    if (!paused && !isCreditSlides) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % sections.length);
      }, 3000);
    }
    return () => clearInterval(intervalRef.current);
  }, [paused, isCreditSlides]);

  const CurrentComponent = sections[currentIndex];

  const handleCreditSlidesEnd = () => {
    clearInterval(intervalRef.current);
    setCurrentIndex((prev) => (prev + 1) % sections.length);

    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % sections.length);
    }, 3000);
  };

  useEffect(() => {
    const audio = audioRef.current;

    const enableAudio = () => {
      audio.muted = false;
      audio.play().catch(() => {});
      document.removeEventListener("click", enableAudio);
    };

    if (!paused) {
      audio.play().catch(() => {
        console.log("Autoplay blocked, waiting for click...");
        document.addEventListener("click", enableAudio);
      });
    } else {
      audio.pause();
    }
    const handleVisibilityChange = () => {
    if (document.hidden) {
      audio.pause();
    } else if (!paused) {
      audio.play().catch(() => {});
    }
  };

  document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("click", enableAudio);
    };
  }, [paused]);


  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <audio ref={audioRef} src={myMusic} loop preload="auto" />

      <header className="fixed top-0 left-0 w-full z-50 flex justify-center bg-transparent h-24">
        <Navbar />
      </header>
      <main
        className="relative h-full overflow-hidden"
        onMouseEnter={() => setPaused(true)}   
        onMouseLeave={() => setPaused(false)} 
      >
        <div
          key={currentIndex}
          className="w-screen flex items-center justify-center animate-slideUp"
          style={{ height: "100vh" }}
        >
          <div className="w-full h-full">
            {isCreditSlides ? (
              <CreditSlides
                paused={paused}
                onComplete={handleCreditSlidesEnd}
              />
            ) : (
              <CurrentComponent paused={paused} />
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
