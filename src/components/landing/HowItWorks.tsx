import { motion } from "framer-motion";
import { Upload, Search, PackageCheck } from "lucide-react";

const steps = [
  {
    icon: Upload,
    num: "1",
    title: "Importez votre CV",
    desc: "Téléchargez votre CV et collez l'offre d'emploi.",
  },
  {
    icon: Search,
    num: "2",
    title: "VignesGPT analyse l'offre",
    desc: "Les compétences et mots-clés importants sont détectés automatiquement.",
  },
  {
    icon: PackageCheck,
    num: "3",
    title: "Recevez votre pack de candidature",
    desc: "Obtenez un CV optimisé, une lettre de motivation et des messages prêts à envoyer.",
  },
];

const HowItWorks = () => (
  <section className="bg-card py-20 md:py-28">
    <div className="container mx-auto px-4">
      <h2 className="font-display text-center text-3xl font-bold md:text-4xl">
        Comment ça marche
      </h2>
      <div className="mt-14 grid gap-10 md:grid-cols-3">
        {steps.map((step, i) => (
          <motion.div
            key={step.num}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: i * 0.15, duration: 0.5 }}
            className="text-center"
          >
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent text-2xl font-bold text-primary-foreground shadow-card">
              {step.num}
            </div>
            <h3 className="mt-6 font-display text-xl font-semibold">{step.title}</h3>
            <p className="mt-3 leading-relaxed text-muted-foreground">{step.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorks;
