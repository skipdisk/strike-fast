import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "John D.",
    review:
      "Jesse was incredibly fast and professional. He removed a rattlesnake from our porch in under 30 minutes. Highly recommend!",
    location: "New Braunfels",
  },
  {
    name: "Amanda S.",
    review:
      "I was terrified, but Strike Fast Snake Removal calmed me down and handled the situation perfectly. Very knowledgeable.",
    location: "Canyon Lake",
  },
  {
    name: "Mark T.",
    review:
      "Excellent service. Did a full property inspection and sealed up a few holes. Haven't seen a snake since.",
    location: "San Marcos",
  },
  {
    name: "Linda P.",
    review:
      "Responsive, humane, and fairly priced. They clearly care about the animals just as much as keeping people safe.",
    location: "Seguin",
  },
];

export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-24 px-6 md:px-12 text-white relative"
    >
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start mb-16 border-b border-neutral-800 pb-8">
          <div>
            <h2 className="text-4xl md:text-6xl font-serif tracking-tight mb-2">
              Client Reviews
            </h2>
            <div className="flex gap-1 text-yellow-500">
              {[...Array(5)].map((_, index) => (
                <Star key={index} size={20} fill="currentColor" />
              ))}
              <span className="text-white text-sm ml-2 self-center font-bold">
                5.0 on Google
              </span>
            </div>
          </div>

          <div className="text-right mt-6 md:mt-0">
            <a
              href="https://www.google.com/search?sca_esv=a0464d9551b247bc&rlz=1C5CHFA_enUS1044US1044&sxsrf=ANbL-n7rY2JkSczI0HATaVam1CTsARKeFA:1775585427417&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qOQJUDrBwJSKdG3QUPJVmF5jz3AZxRXlpxhm98xvkI_5vct76twEGZkmsBSikL1u4BZdE6tNqDQEQx1TgQYgRmzxzf_A7QextRJG8ASIQ-G5FF55vXw%3D%3D&q=Strike+Fast+Snake+Removal+Reviews&sa=X&ved=2ahUKEwjGoK2Vq9yTAxVxnSYFHWcxFFYQ0bkNegQIRBAF&biw=3440&bih=1328&dpr=1#"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border border-white/20 px-6 py-3 text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-all"
            >
              Write a Review
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-neutral-900 border border-neutral-800 p-8 hover:border-white/20 transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="flex gap-1 mb-6 text-yellow-500">
                  {[...Array(5)].map((_, index) => (
                    <Star key={index} size={14} fill="currentColor" />
                  ))}
                </div>
                <p className="text-lg font-light leading-relaxed mb-8">
                  "{t.review}"
                </p>
              </div>
              <div>
                <p className="font-bold tracking-wide">{t.name}</p>
                <p className="text-xs text-neutral-500 uppercase tracking-widest mt-1">
                  {t.location}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
