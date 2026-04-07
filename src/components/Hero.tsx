import { motion, useScroll, useAnimation } from "framer-motion";
import { useRef, useEffect } from "react";
import { Collage } from "./Collage";

export function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  return (
    <section className="relative min-h-screen w-full text-white flex flex-col md:flex-row overflow-hidden">
      {/* Left Content */}
      <div className="w-full md:w-1/2 flex flex-col justify-center px-6 md:px-12 2xl:px-24 pt-32 md:pt-0 relative z-20">
        <div className="max-w-xl md:max-w-2xl 2xl:max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-5xl md:text-8xl 2xl:text-[12rem] font-extrabold tracking-tighter uppercase leading-[0.9]"
          >
            Strike <br />
            <span className="font-extralight italic font-serif lowercase">
              Fast
            </span>
          </motion.h1>

          <div className="mt-8 text-neutral-400 max-w-sm text-sm md:text-base uppercase tracking-widest border-l border-white/20 pl-4 py-2 min-h-[80px]">
            <p className="font-light">
              <strong className="font-bold text-white uppercase tracking-wider block mb-2">
                Snake Removal
              </strong>
              <SyncedTypingText
                lines={["Safe & Humane.", "Rapid Response."]}
                delay={1.0}
              />{" "}
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.0, duration: 0.5 }}
            className="mt-12"
          >
            <a
              href="tel:8303698777"
              className="inline-block bg-white text-black px-8 py-4 font-bold tracking-widest uppercase hover:bg-neutral-200 transition-colors"
            >
              Call Now
            </a>
          </motion.div>
        </div>
      </div>

      {/* Right Collage */}
      {/* Right Collage */}
      <div className="w-full md:w-1/2 h-[60vh] md:h-screen relative flex items-center justify-center z-10 pointer-events-auto">
        <Collage scrollYProgress={scrollYProgress} />
      </div>

      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/4 h-[0.5px] bg-white/20 hidden md:block"></div>
      <div className="w-full text-xs text-center text-neutral-500 uppercase tracking-widest z-30 pointer-events-none relative mt-24 pb-8 md:pb-0 md:mt-0 md:absolute md:bottom-12 md:left-0">
        Serving New Braunfels, Canyon Lake,
        <br />
        Seguin, & San Marcos
      </div>
    </section>
  );
}

function SyncedTypingText({
  lines,
  delay = 0,
}: {
  lines: string[];
  delay?: number;
}) {
  const controls = useAnimation();

  useEffect(() => {
    let isMounted = true;

    const sequence = async () => {
      // Initial delay before first run
      if (delay > 0) await new Promise((r) => setTimeout(r, delay * 1000));

      while (isMounted) {
        // Type in - using "visible" state
        await controls.start("visible");
        // Wait reading time (4s)
        await new Promise((r) => setTimeout(r, 4000));
        // Fade out - using "hidden" state
        await controls.start("hidden");
        // Wait before restart (1s)
        await new Promise((r) => setTimeout(r, 1000));
      }
    };

    sequence();

    return () => {
      isMounted = false;
      controls.stop();
    };
  }, [controls, delay]);

  const container = {
    hidden: {
      opacity: 0,
      transition: {
        // When hiding, do it quickly and simultaneously
        duration: 0.5,
        staggerChildren: 0,
        delayChildren: 0,
        when: "afterChildren", // Ensure children fade out first/together
      },
    },
    visible: (customIndex: number = 0) => ({
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: customIndex * 1.5, // Stagger the second line by 1.5s relative to start
      },
    }),
  };

  const child = {
    hidden: { opacity: 0, y: 5, transition: { duration: 0.3 } },
    visible: { opacity: 1, y: 0, transition: { duration: 0.1 } },
  };

  return (
    <div>
      {lines.map((text, lineIndex) => (
        <motion.div
          key={lineIndex}
          custom={lineIndex}
          variants={container}
          initial="hidden"
          animate={controls}
          className="block min-h-[1.5em]"
        >
          {Array.from(text).map((char, charIndex) => (
            <motion.span
              variants={child}
              key={charIndex}
              className="inline-block will-change-[opacity,transform]"
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.div>
      ))}
    </div>
  );
}
