import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const FinalCTA = () => (
  <section className="bg-card py-20 md:py-28">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-2xl rounded-3xl border border-border bg-background p-10 text-center shadow-card-hover md:p-14"
      >
        <h2 className="font-display text-3xl font-bold md:text-4xl">
          Prêt à décrocher votre prochain stage ou contrat&nbsp;?
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-lg text-muted-foreground">
          Essayez VignesGPT gratuitement et générez votre première candidature optimisée.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button size="lg" className="text-base font-semibold shadow-card">
            Tester sans se connecter
          </Button>
          <Button size="lg" variant="outline" className="text-base font-semibold">
            Se connecter
          </Button>
        </div>
      </motion.div>
    </div>
  </section>
);

export default FinalCTA;
