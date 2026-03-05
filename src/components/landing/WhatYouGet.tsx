import { motion } from "framer-motion";
import { FileText, Mail, Linkedin, MessageSquare } from "lucide-react";

const items = [
  { icon: FileText, label: "CV optimisé pour l'offre" },
  { icon: Mail, label: "Lettre de motivation personnalisée" },
  { icon: Linkedin, label: "Messages LinkedIn prêts à envoyer" },
  { icon: MessageSquare, label: "Conseils pour réussir l'entretien" },
];

const WhatYouGet = () => (
  <section className="py-20 md:py-28">
    <div className="container mx-auto px-4">
      <h2 className="font-display text-center text-3xl font-bold md:text-4xl">
        Un pack complet pour réussir votre candidature
      </h2>
      <div className="mx-auto mt-14 grid max-w-2xl gap-5">
        {items.map((item, i) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ delay: i * 0.1, duration: 0.4 }}
            className="flex items-center gap-4 rounded-xl border border-border bg-card px-6 py-4 shadow-card"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
              <item.icon className="h-5 w-5 text-primary" />
            </div>
            <span className="text-lg font-medium">{item.label}</span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WhatYouGet;
