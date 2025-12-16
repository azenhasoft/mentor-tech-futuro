import { Button } from "@/components/ui/button";
import { Rocket, Menu, X } from "lucide-react";
import { useState } from "react";

interface HeaderProps {
  onStartQuiz: () => void;
}

export function Header({ onStartQuiz }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/10 backdrop-blur-md border-b border-primary-foreground/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-lg gradient-primary flex items-center justify-center">
              <Rocket className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-bold text-lg text-primary-foreground">TechMentor</span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#trilhas" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
              Trilhas
            </a>
            <a href="#como-funciona" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
              Como Funciona
            </a>
            <a href="#sobre" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
              Sobre
            </a>
          </nav>

          {/* CTA */}
          <div className="hidden md:block">
            <Button variant="gradient" size="sm" onClick={onStartQuiz}>
              Começar Grátis
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-primary-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-primary-foreground/10 animate-fade-in">
            <nav className="flex flex-col gap-4">
              <a href="#trilhas" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                Trilhas
              </a>
              <a href="#como-funciona" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                Como Funciona
              </a>
              <a href="#sobre" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                Sobre
              </a>
              <Button variant="gradient" size="sm" onClick={onStartQuiz} className="w-full mt-2">
                Começar Grátis
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
