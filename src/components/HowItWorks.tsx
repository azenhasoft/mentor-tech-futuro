import { ClipboardCheck, MessageCircle, Map, Trophy } from "lucide-react";

const steps = [
  {
    icon: ClipboardCheck,
    step: "01",
    title: "Faça o Quiz",
    description: "Responda algumas perguntas sobre seus interesses, habilidades e objetivos de carreira.",
  },
  {
    icon: MessageCircle,
    step: "02",
    title: "Converse com o Mentor",
    description: "Receba orientações personalizadas e tire todas as suas dúvidas com nosso mentor IA.",
  },
  {
    icon: Map,
    step: "03",
    title: "Receba Seu Plano",
    description: "Ganhe uma trilha de estudos personalizada com cursos, recursos e próximos passos.",
  },
  {
    icon: Trophy,
    step: "04",
    title: "Conquiste Seu Objetivo",
    description: "Siga seu plano, acompanhe seu progresso e alcance sua carreira dos sonhos em tech.",
  },
];

export function HowItWorks() {
  return (
    <section id="como-funciona" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Como <span className="text-gradient">Funciona</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Em apenas 4 passos simples, você terá clareza total sobre seu caminho em tecnologia
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={step.step}
              className="relative animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-primary/30 to-transparent" />
              )}
              
              <div className="relative bg-card rounded-2xl p-6 border border-border hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                {/* Step number */}
                <div className="absolute -top-3 -right-3 w-10 h-10 rounded-full gradient-primary flex items-center justify-center text-sm font-bold text-primary-foreground">
                  {step.step}
                </div>
                
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <step.icon className="w-7 h-7 text-primary" />
                </div>
                
                <h3 className="text-lg font-semibold text-card-foreground mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
