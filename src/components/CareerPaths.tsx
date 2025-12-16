import { Code, Database, Palette, Shield, Brain, Cloud, Smartphone, LineChart } from "lucide-react";

const paths = [
  {
    icon: Code,
    title: "Frontend",
    description: "Crie interfaces incríveis e experiências visuais que encantam usuários",
    skills: ["React", "TypeScript", "CSS"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Database,
    title: "Backend",
    description: "Construa a lógica e infraestrutura que fazem as aplicações funcionarem",
    skills: ["Node.js", "Python", "SQL"],
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Palette,
    title: "UX/UI Design",
    description: "Projete experiências digitais intuitivas e visualmente atraentes",
    skills: ["Figma", "Pesquisa", "Prototipação"],
    color: "from-pink-500 to-rose-500",
  },
  {
    icon: Brain,
    title: "Ciência de Dados",
    description: "Extraia insights valiosos e tome decisões baseadas em dados",
    skills: ["Python", "Machine Learning", "SQL"],
    color: "from-purple-500 to-violet-500",
  },
  {
    icon: Shield,
    title: "Segurança",
    description: "Proteja sistemas e dados contra ameaças cibernéticas",
    skills: ["Pentest", "Criptografia", "Redes"],
    color: "from-red-500 to-orange-500",
  },
  {
    icon: Cloud,
    title: "DevOps/Cloud",
    description: "Automatize e gerencie infraestrutura em escala",
    skills: ["AWS", "Docker", "Kubernetes"],
    color: "from-sky-500 to-indigo-500",
  },
  {
    icon: Smartphone,
    title: "Mobile",
    description: "Desenvolva apps para iOS e Android que impactam milhões",
    skills: ["React Native", "Swift", "Kotlin"],
    color: "from-teal-500 to-green-500",
  },
  {
    icon: LineChart,
    title: "Product Manager",
    description: "Lidere o desenvolvimento de produtos de tecnologia de sucesso",
    skills: ["Estratégia", "Analytics", "Agile"],
    color: "from-amber-500 to-yellow-500",
  },
];

export function CareerPaths() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Explore as <span className="text-gradient">Trilhas de Carreira</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Conheça as principais áreas de atuação em tecnologia e descubra qual combina mais com você
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {paths.map((path, index) => (
            <div
              key={path.title}
              className="group relative p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg cursor-pointer animate-fade-in"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              {/* Gradient background on hover */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${path.color} opacity-0 group-hover:opacity-5 transition-opacity`} />
              
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${path.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <path.icon className="w-6 h-6 text-white" />
              </div>
              
              <h3 className="text-lg font-semibold text-card-foreground mb-2">{path.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{path.description}</p>
              
              <div className="flex flex-wrap gap-2">
                {path.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs px-2 py-1 rounded-full bg-secondary text-secondary-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
