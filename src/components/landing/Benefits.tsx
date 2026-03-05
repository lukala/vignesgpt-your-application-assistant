import { motion } from "framer-motion";
import { Clock, Target, TrendingUp } from "lucide-react";

const items = [
  {
    icon: Clock,
    title: "Gagnez des heures sur vos candidatures",
    desc: "Arrêtez de réécrire votre CV et vos lettres de motivation pour chaque offre.",
  },
  {
    icon: Target,
    title: "Des candidatures adaptées à chaque poste",
    desc: "Votre CV et votre lettre de motivation sont automatiquement optimisés pour l'offre d'emploi.",
  },
  {
    icon: TrendingUp,
    title: "Augmentez vos chances d'obtenir un entretien",
    desc: "Utilisez les bons mots-clés et mettez en avant les expériences pertinentes pour passer les filtres ATS.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.5 },
  }),
};

const Benefits = () => (
  <section className="py-20 md:py-28">
    <div className="container mx-auto px-4">
      <h2 className="font-display text-center text-3xl font-bold md:text-4xl">
        Pourquoi utiliser VignesGPT&nbsp;?
      </h2>
      <div className="mt-14 grid gap-8 md:grid-cols-3">
        {items.map((item, i) => (
          <motion.div
            key={item.title}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
            className="rounded-2xl border border-border bg-card p-8 shadow-card transition-shadow hover:shadow-card-hover"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
              <item.icon className="h-6 w-6 text-primary" />
            </div>
            <h3 className="mt-5 font-display text-xl font-semibold">{item.title}</h3>
            <p className="mt-3 leading-relaxed text-muted-foreground">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Benefits;
