import { useState } from "react";
import { motion } from "framer-motion";

const stats = [
  { label: "Rating", value: 5.0, suffix: "" }, // Treated specially for decimal
  { label: "Years Exp", value: 10, suffix: "+" },
  { label: "Rescues", value: 500, suffix: "+" },
  { label: "Safe Removals", value: 100, suffix: "%" },
];

export function Philosophy() {
  return (
    <section
      id="philosophy"
      className="py-24 px-6 md:px-12 text-white border-t border-neutral-900 relative"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false }}
        className="max-w-3xl mx-auto text-center"
      >
        <h2 className="text-sm font-bold uppercase tracking-widest text-neutral-500 mb-6">
          Our Philosophy
        </h2>
        <h3 className="text-4xl md:text-5xl font-serif leading-tight mb-8">
          "Expert wildlife management combined with a commitment to safety, education, and humane practices."
        </h3>
        <p className="text-neutral-400 text-lg leading-relaxed mb-12">
          Strike Fast Snake Removal was founded on the principle that wildlife encounters don't have to be stressful. We combine rapid response times with deep knowledge of local reptile behavior to keep your family and property safe. Based in Central Texas, we respect the local ecosystem while delivering peace of mind for residents and businesses alike.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <StatItem key={index} stat={stat} index={index} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}

function StatItem({
  stat,
  index,
}: {
  stat: { label: string; value: number; suffix: string };
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      viewport={{ once: false }}
      className="border border-neutral-800 p-4 rounded-full aspect-square flex flex-col justify-center items-center hover:border-white/20 transition-colors"
    >
      <span className="text-2xl font-bold block flex items-center justify-center">
        <AnimatedCounter from={0} to={stat.value} duration={1.5} />
        {stat.suffix}
      </span>
      <span className="text-xs text-neutral-500 uppercase">{stat.label}</span>
    </motion.div>
  );
}

function AnimatedCounter({
  from,
  to,
  duration,
}: {
  from: number;
  to: number;
  duration: number;
}) {
  const [count, setCount] = useState(from);

  // We use a ref to the element only to trigger the useInView,
  // but the animation logic drives the state.
  // Actually, parent triggers re-render on scroll, so we can just use `whileInView` logic or similar.
  // simpler: usage of `animate` in useEffect when in view.

  return (
    <motion.span
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false }}
      onViewportEnter={() => {
        // Reset and animate
        let startTimestamp: number | null = null;
        const step = (timestamp: number) => {
          if (!startTimestamp) startTimestamp = timestamp;
          const progress = Math.min(
            (timestamp - startTimestamp) / (duration * 1000),
            1,
          );
          // Ease out quart
          const ease = 1 - Math.pow(1 - progress, 4);

          const current = from + (to - from) * ease;
          // Handle decimal for 5.0, integer for others
          setCount(current);

          if (progress < 1) {
            window.requestAnimationFrame(step);
          }
        };
        window.requestAnimationFrame(step);
      }}
    >
      {to % 1 !== 0 || to === 5 ? count.toFixed(1) : Math.floor(count)}
    </motion.span>
  );
}
