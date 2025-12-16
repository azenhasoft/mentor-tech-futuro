import { Rocket, Github, Linkedin, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg gradient-primary flex items-center justify-center">
                <Rocket className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-bold text-lg text-card-foreground">TechMentor</span>
            </div>
            <p className="text-muted-foreground text-sm max-w-sm">
              Seu mentor de IA para descobrir e construir sua carreira em tecnologia. 
              Orientação personalizada, acessível e disponível 24/7.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-card-foreground mb-4">Trilhas</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Frontend</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Backend</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Ciência de Dados</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">UX Design</a></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold text-card-foreground mb-4">Comunidade</h4>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>© 2024 TechMentor. Feito com 💜 para a comunidade tech brasileira.</p>
        </div>
      </div>
    </footer>
  );
}
