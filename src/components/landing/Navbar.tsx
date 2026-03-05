import { Button } from "@/components/ui/button";

const Navbar = () => (
  <header className="sticky top-0 z-50 border-b border-border bg-card/80 backdrop-blur-md">
    <div className="container mx-auto flex items-center justify-between px-4 py-3">
      <span className="font-display text-xl font-bold tracking-tight">
        Vignes<span className="text-primary">GPT</span>
      </span>
      <div className="flex gap-3">
        <Button variant="outline" size="sm">
          Se connecter
        </Button>
        <Button size="sm">Tester gratuitement</Button>
      </div>
    </div>
  </header>
);

export default Navbar;
