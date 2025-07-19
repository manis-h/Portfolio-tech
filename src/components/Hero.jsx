import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { Manish, bwmap, worldmap } from "../assets";

const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const fullText = "Full Stack Developer crafting seamless digital experiences from front to back. Passionate about clean code, intuitive design, and building things that just work.";
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 20); // Typing speed (ms per character)

      return () => clearTimeout(timeout);
    }
  }, [currentIndex]);

  return (
    <>
      {/* Vintage Background */}
      <div className="absolute top-0 left-0 z-0 h-[100vh] w-screen overflow-hidden">
        <div className="absolute inset-0 bg-black/30 z-10"></div>
        <img 
          src={bwmap} 
          alt="world map" 
          className="w-full h-full object-cover grayscale contrast-125 brightness-90"
        />
        {/* Film grain overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPgogIDxmaWx0ZXIgaWQ9Im5vaXNlIj4KICAgIDxmZVR1cmJ1bGVuY2UgdHlwZT0iZnJhY3RhbE5vaXNlIiBiYXNlRnJlcXVlbmN5PSIwLjA1IiBudW1PY3RhdmVzPSI1IiBzdGl0Y2hUaWxlcz0ic3RpdGNoIi8+CiAgICA8ZmVDb2xvck1hdHJpeCB0eXBlPSJzYXR1cmF0ZSIgdmFsdWVzPSIwIi8+CiAgPC9maWx0ZXI+CiAgPHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsdGVyPSJ1cmwoI25vaXNlKSIgb3BhY2l0eT0iMC4wNSIvPgo8L3N2Zz4=')] opacity-10 z-20"></div>
      </div>

      {/* Hero Content */}
      <section className="relative grid grid-cols-1 sm:grid-cols-2 w-full h-screen max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 overflow-hidden z-30">
        
        {/* Text Section */}
        <div className="flex flex-col justify-center items-start text-white font-mono">
          {/* Typewriter heading */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <h1 className="text-3xl sm:text-5xl font-bold mb-2">
              <span className="text-white border-r-2 border-white animate-blink">
                Hi, I'm <span className="text-white font-extrabold">Manish</span>
              </span>
            </h1>
          </motion.div>

          {/* Typewriter paragraph */}
          <div className="bg-black/30 p-4 border-l-2 border-white/50 max-w-lg">
            <p className="text-sm sm:text-base text-white/90 font-light leading-relaxed tracking-wide">
              {displayText}
              <span className="ml-1 h-4 w-1 bg-white inline-block animate-blink"></span>
            </p>
          </div>

          {/* Vintage buttons */}
          <motion.div 
            className="flex gap-4 mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
          >
            <a 
              href="#projects" 
              className="px-6 py-2 bg-transparent border border-white/50 text-white font-mono text-sm hover:bg-white/10 hover:border-white transition-all duration-300 relative overflow-hidden group"
            >
              <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="relative z-10">VIEW_PROJECTS</span>
            </a>
            <a
              href="#contact" 
              className="px-6 py-2 bg-white/90 text-black font-mono text-sm hover:bg-white transition-all duration-300 relative overflow-hidden group"
            >
              <span className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="relative z-10">CONTACT_ME</span>
            </a>
          </motion.div>
        </div>

        {/* Vintage Image Section with enhanced hover effects */}
        <div className="flex justify-center items-center">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="relative vintage-photo-frame group"
            whileHover={{ 
              scale: 1.03,
              transition: { duration: 0.3 }
            }}
          >
            {/* Main image with hover transitions */}
            <img 
              src={Manish} 
              alt="Manish"
              className="w-56 h-56 sm:w-72 sm:h-72 object-cover 
              grayscale contrast-110 brightness-90 sepia-[0.2]
              group-hover:grayscale-[0.6] group-hover:contrast-125 group-hover:brightness-100 group-hover:sepia-0 
              transition-all duration-500 ease-in-out  "
            />
            
            {/* Polaroid frame effect */}
            <div className="absolute inset-0 border-8 border-white/70 pointer-events-none 
            group-hover:border-white/90 transition-all duration-300"></div>
            <div className="absolute inset-0 border border-black/30 pointer-events-none"></div>
            
            {/* Scratches overlay */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPgogIDxwYXRoIGQ9Ik0wIDBoMTAwdjEwMEgweiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMSkiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWRhc2hhcnJheT0iMSw0Ii8+Cjwvc3ZnPg==')] 
            opacity-30 group-hover:opacity-20 transition-opacity duration-500"></div>
            
            {/* Vintage photo flash effect on hover */}
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 group-hover:animate-flash 
            pointer-events-none transition-opacity duration-300"></div>
            
            {/* Subtle vignette effect */}
            <div className="absolute inset-0 shadow-[inset_0_0_50px_20px_rgba(0,0,0,0.3)] 
            group-hover:shadow-[inset_0_0_70px_30px_rgba(0,0,0,0.2)] pointer-events-none 
            transition-all duration-500"></div>
          </motion.div>
        </div>
      </section>

      {/* Global styles for this component */}
      <style jsx global>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        @keyframes flash {
          0% { opacity: 0; }
          10% { opacity: 0.4; }
          100% { opacity: 0; }
        }
        .animate-blink {
          animation: blink 1s step-end 3;
        }
        .animate-flash {
          animation: flash 1s ease-out;
        }
        .vintage-photo-frame {
          filter: drop-shadow(0 4px 6px rgba(0, 0, 0, 0.5));
          transition: all 0.3s ease;
        }
        .vintage-photo-frame:hover {
          filter: drop-shadow(0 8px 15px rgba(0, 0, 0, 0.3));
        }
      `}</style>
    </>
  );
};

export default Hero;