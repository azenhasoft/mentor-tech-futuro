import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface QuizProps {
  onComplete: (answers: Record<string, string>) => void;
  onBack: () => void;
}

const questions = [
  {
    id: "interest",
    question: "O que mais te atrai no mundo da tecnologia?",
    options: [
      { value: "visual", label: "Criar coisas visuais e interativas", emoji: "🎨" },
      { value: "logic", label: "Resolver problemas lógicos complexos", emoji: "🧩" },
      { value: "data", label: "Descobrir padrões e insights em dados", emoji: "📊" },
      { value: "people", label: "Entender e ajudar pessoas", emoji: "👥" },
    ],
  },
  {
    id: "workstyle",
    question: "Como você prefere trabalhar?",
    options: [
      { value: "solo", label: "Focado, com fones de ouvido", emoji: "🎧" },
      { value: "team", label: "Colaborando em equipe", emoji: "🤝" },
      { value: "lead", label: "Liderando projetos", emoji: "🚀" },
      { value: "flex", label: "Depende do dia", emoji: "🔄" },
    ],
  },
  {
    id: "motivation",
    question: "O que mais te motiva profissionalmente?",
    options: [
      { value: "impact", label: "Impactar milhões de usuários", emoji: "🌍" },
      { value: "money", label: "Boa remuneração e crescimento", emoji: "💰" },
      { value: "learn", label: "Aprender coisas novas sempre", emoji: "📚" },
      { value: "create", label: "Criar produtos inovadores", emoji: "💡" },
    ],
  },
  {
    id: "experience",
    question: "Qual seu nível atual com tecnologia?",
    options: [
      { value: "zero", label: "Começando do zero", emoji: "🌱" },
      { value: "basic", label: "Sei o básico de programação", emoji: "🌿" },
      { value: "intermediate", label: "Já desenvolvo projetos simples", emoji: "🌳" },
      { value: "transition", label: "Profissional de outra área", emoji: "🔀" },
    ],
  },
  {
    id: "time",
    question: "Quanto tempo você pode dedicar aos estudos?",
    options: [
      { value: "few", label: "1-2 horas por dia", emoji: "⏰" },
      { value: "moderate", label: "3-4 horas por dia", emoji: "📅" },
      { value: "intensive", label: "Período integral", emoji: "🔥" },
      { value: "weekend", label: "Principalmente fins de semana", emoji: "🗓️" },
    ],
  },
];

export function Quiz({ onComplete, onBack }: QuizProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const question = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  const handleSelectOption = (value: string) => {
    setSelectedOption(value);
  };

  const handleNext = () => {
    if (!selectedOption) return;
    
    const newAnswers = { ...answers, [question.id]: selectedOption };
    setAnswers(newAnswers);

    if (currentQuestion === questions.length - 1) {
      onComplete(newAnswers);
    } else {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption(answers[questions[currentQuestion + 1]?.id] || null);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion === 0) {
      onBack();
    } else {
      setCurrentQuestion(currentQuestion - 1);
      setSelectedOption(answers[questions[currentQuestion - 1]?.id] || null);
    }
  };

  return (
    <section className="min-h-screen gradient-hero flex items-center justify-center py-12 px-4">
      <div className="w-full max-w-2xl">
        {/* Progress bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-primary-foreground/60">
              Pergunta {currentQuestion + 1} de {questions.length}
            </span>
            <span className="text-sm text-primary-foreground/60">{Math.round(progress)}%</span>
          </div>
          <div className="h-2 bg-primary-foreground/10 rounded-full overflow-hidden">
            <div
              className="h-full gradient-primary transition-all duration-500 ease-out rounded-full"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Question card */}
        <div className="bg-card/10 backdrop-blur-md rounded-3xl p-8 border border-primary-foreground/10 animate-scale-in">
          <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-8 text-center">
            {question.question}
          </h2>

          <div className="grid gap-4">
            {question.options.map((option) => (
              <button
                key={option.value}
                onClick={() => handleSelectOption(option.value)}
                className={cn(
                  "w-full p-4 rounded-xl text-left transition-all duration-200 flex items-center gap-4 group",
                  selectedOption === option.value
                    ? "bg-primary text-primary-foreground shadow-glow"
                    : "bg-card/50 text-card-foreground hover:bg-card/80 border border-transparent hover:border-primary/30"
                )}
              >
                <span className="text-2xl">{option.emoji}</span>
                <span className="flex-1 font-medium">{option.label}</span>
                {selectedOption === option.value && (
                  <CheckCircle2 className="w-5 h-5 animate-scale-in" />
                )}
              </button>
            ))}
          </div>

          {/* Navigation */}
          <div className="flex justify-between mt-8">
            <Button variant="ghost" onClick={handlePrevious} className="text-primary-foreground/70 hover:text-primary-foreground">
              <ArrowLeft className="w-4 h-4 mr-2" />
              {currentQuestion === 0 ? "Voltar" : "Anterior"}
            </Button>
            <Button
              variant="gradient"
              onClick={handleNext}
              disabled={!selectedOption}
              className="min-w-[140px]"
            >
              {currentQuestion === questions.length - 1 ? "Ver Resultado" : "Próxima"}
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
