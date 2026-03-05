import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import appPreview from "@/assets/app-preview.png";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-card py-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-xl"
          >
            <h1 className="font-display text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-[3.25rem]">
              Obtenez enfin votre contrat ou votre stage grâce au{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                meilleur des assistants
              </span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              VignesGPT analyse votre CV et l'offre d'emploi pour générer automatiquement une
              candidature complète et optimisée&nbsp;: CV, lettre de motivation, messages LinkedIn
              et préparation à l'entretien.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button size="lg" className="text-base font-semibold shadow-card">
                Tester sans se connecter
              </Button>
              <Button size="lg" variant="outline" className="text-base font-semibold">
                Se connecter
              </Button>
            </div>

            <p className="mt-4 text-sm text-muted-foreground">
              Aucun compte nécessaire pour essayer.
            </p>
          </motion.div>

          {/* Preview */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-card-hover">
              <img
                src={appPreview}
                alt="Aperçu de l'interface VignesGPT montrant un CV optimisé et le pack de candidature"
                className="w-full"
                loading="eager"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
