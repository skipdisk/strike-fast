import { motion } from "framer-motion";

const services = [
  {
    name: "Emergency Snake Removal",
    price: "$150+",
    description: "Rapid dispatch for snakes located inside or near your home.",
  },
  {
    name: "Property Inspection",
    price: "$95",
    description: "Thorough assessment of your property for snakes and entry points.",
  },
  {
    name: "Preventative Sealing",
    price: "Quote",
    description: "Sealing cracks and holes to prevent wildlife from entering.",
  },
  {
    name: "Attic & Crawlspace Checkout",
    price: "$120",
    description: "Detailed inspection of hard-to-reach areas.",
  },
  {
    name: "Humane Relocation",
    price: "Inc.",
    description: "All captured snakes are humanely relocated to safe habitats.",
  },
  {
    name: "Yard Treatment & Deterrent",
    price: "$80",
    description: "Application of snake repellents around problem areas.",
  },
  {
    name: "Snake Identification",
    price: "Free",
    description: "Send us a photo and our experts will identify the snake.",
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 px-6 md:px-12 text-white relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-4xl md:text-5xl font-serif mb-16 text-center tracking-tight">
          Our Services
        </h2>

        <div className="divide-y divide-neutral-800 border-t border-b border-neutral-800">
          {services.map((service) => (
            <ServiceItem key={service.name} service={service} />
          ))}
        </div>

        <div className="mt-12 text-center flex flex-col gap-6 items-center">
          <a
            href="tel:8303698777"
            className="inline-block border border-white px-12 py-4 text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-all"
          >
            Call For Quote
          </a>
        </div>
      </motion.div>
    </section>
  );
}

function ServiceItem({
  service,
}: {
  service: { name: string; price: string; description: string };
}) {
  return (
    <div className="py-6 flex justify-between items-baseline group hover:bg-white/5 transition-colors px-4 rounded-lg">
      <div>
        <h3 className="text-xl font-medium tracking-wide">{service.name}</h3>
        <p className="text-sm text-neutral-500 mt-1">{service.description}</p>
      </div>
      <span className="text-xl font-light tabular-nums">{service.price}</span>
    </div>
  );
}
