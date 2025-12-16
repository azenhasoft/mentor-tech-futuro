import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Rocket, Target } from "lucide-react";

interface HeroProps {
  onStartQuiz: () => void;
}

export function Hero({ onStartQuiz }: HeroProps) {
  return (
    <section className="relative min-h-screen gradient-hero overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />

      <div className="container relative z-10 mx-auto px-4 pt-32 pb-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary-foreground/80 text-sm font-medium mb-8 animate-fade-in backdrop-blur-sm">
            <Sparkles className="w-4 h-4" />
            <span>Seu guia para o futuro em tecnologia</span>
          </div>

          {/* Main heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Descubra Sua{" "}
            <span className="text-gradient">Carreira</span>{" "}
            Ideal em Tech
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-primary-foreground/70 max-w-2xl mx-auto mb-10 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Um mentor de IA que entende seu perfil, interesses e objetivos para 
            criar um plano personalizado de entrada no mundo da tecnologia.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <Button variant="gradient" size="xl" onClick={onStartQuiz} className="group">
              Começar Agora
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="hero" size="lg">
              Conhecer as Trilhas
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-20 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary-foreground mb-1">8+</div>
              <div className="text-sm text-primary-foreground/60">Trilhas de Carreira</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary-foreground mb-1">100%</div>
              <div className="text-sm text-primary-foreground/60">Personalizado</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary-foreground mb-1">24/7</div>
              <div className="text-sm text-primary-foreground/60">Mentor Disponível</div>
            </div>
          </div>
        </div>

        {/* Feature cards preview */}
        <div className="grid md:grid-cols-3 gap-6 mt-20 max-w-5xl mx-auto">
          {[
            { icon: Target, title: "Descubra Seu Perfil", desc: "Quiz interativo para mapear seus interesses e habilidades" },
            { icon: Rocket, title: "Trilhas Personalizadas", desc: "Recomendações de carreira baseadas no seu perfil único" },
            { icon: Sparkles, title: "Mentor IA", desc: "Converse com nosso mentor para tirar dúvidas a qualquer momento" },
          ].map((feature, index) => (
            <div
              key={feature.title}
              className="group p-6 rounded-2xl bg-card/10 backdrop-blur-sm border border-primary-foreground/10 hover:bg-card/20 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${0.5 + index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <feature.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-primary-foreground mb-2">{feature.title}</h3>
              <p className="text-sm text-primary-foreground/60">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
