import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Send, Bot, User, Sparkles, ArrowLeft } from "lucide-react";
import { cn } from "@/lib/utils";

interface Message {
  role: "user" | "assistant";
  content: string;
}

interface MentorChatProps {
  initialContext?: Record<string, string>;
  onBack: () => void;
}

const suggestedQuestions = [
  "Como começar na área de Frontend?",
  "Quais são as melhores linguagens para iniciantes?",
  "Como é o dia a dia de um dev?",
  "Quanto tempo leva para conseguir o primeiro emprego?",
];

export function MentorChat({ initialContext, onBack }: MentorChatProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: initialContext
        ? `Olá! 👋 Analisei suas respostas e tenho algumas recomendações incríveis para você!\n\nBaseado no seu perfil, você tem grande potencial para áreas como **Frontend** ou **UX Design**, já que demonstrou interesse em criar coisas visuais e interativas.\n\nO que você gostaria de explorar primeiro? Posso te contar mais sobre:\n• Como é o dia a dia nessas áreas\n• Por onde começar seus estudos\n• Quais habilidades desenvolver\n• Oportunidades de carreira`
        : "Olá! 👋 Sou seu Mentor de Carreira em Tech! Estou aqui para te ajudar a descobrir seu caminho no mundo da tecnologia.\n\nMe conte: o que te trouxe até aqui? Está começando do zero, pensando em mudar de área, ou quer evoluir na carreira atual?",
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const simulateResponse = async (userMessage: string) => {
    setIsTyping(true);
    
    // Simulate AI thinking time
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    // Simple response logic (will be replaced by real AI later)
    let response = "";
    const lowerMessage = userMessage.toLowerCase();
    
    if (lowerMessage.includes("frontend") || lowerMessage.includes("front-end")) {
      response = "**Frontend** é uma excelente escolha! 🎨\n\nÉ a área responsável por criar tudo que o usuário vê e interage em sites e apps.\n\n**Trilha recomendada:**\n1. HTML + CSS (1-2 meses)\n2. JavaScript (2-3 meses)\n3. React ou Vue (2-3 meses)\n4. TypeScript (1 mês)\n\n**Recursos gratuitos:**\n• freeCodeCamp\n• MDN Web Docs\n• CSS-Tricks\n\nQuer que eu detalhe algum desses pontos?";
    } else if (lowerMessage.includes("backend") || lowerMessage.includes("back-end")) {
      response = "**Backend** é o coração das aplicações! ⚙️\n\nÉ onde mora a lógica de negócio, banco de dados e APIs.\n\n**Linguagens populares:**\n• Node.js (JavaScript)\n• Python\n• Java\n• Go\n\n**Por onde começar:**\n1. Escolha uma linguagem (recomendo Python ou Node.js)\n2. Aprenda sobre APIs REST\n3. Estude bancos de dados (SQL e NoSQL)\n4. Entenda sobre servidores e deploy\n\nQual linguagem te interessa mais?";
    } else if (lowerMessage.includes("salário") || lowerMessage.includes("quanto ganha") || lowerMessage.includes("remuneração")) {
      response = "Ótima pergunta! 💰\n\n**Faixas salariais em Tech (Brasil, 2024):**\n\n**Júnior:** R$ 3.000 - R$ 6.000\n**Pleno:** R$ 6.000 - R$ 12.000\n**Sênior:** R$ 12.000 - R$ 25.000+\n\n**Dicas para acelerar:**\n• Inglês fluente pode dobrar seu salário\n• Trabalho remoto internacional paga em dólar\n• Especialização em nichos valorizados\n\nQuer saber quais áreas estão pagando melhor atualmente?";
    } else if (lowerMessage.includes("começar") || lowerMessage.includes("iniciante") || lowerMessage.includes("primeiro")) {
      response = "Que legal que você quer começar! 🚀\n\n**Meu conselho:**\n\n1. **Não tente aprender tudo de uma vez** - escolha UM caminho\n2. **Pratique todos os dias** - mesmo que só 1 hora\n3. **Construa projetos** - é assim que você aprende de verdade\n4. **Entre em comunidades** - Discord, LinkedIn, eventos\n\n**Primeiro passo concreto:**\nFaça o curso gratuito da Codecademy ou freeCodeCamp em HTML/CSS. Em 2 semanas você já cria sua primeira página!\n\nQuer que eu monte um plano de estudos personalizado para você?";
    } else {
      response = "Entendi! 🤔\n\nPosso te ajudar melhor se você me contar:\n\n• Qual área de tech te interessa mais?\n• Quanto tempo você tem para estudar?\n• Você já sabe programar um pouco?\n\nOu se preferir, me pergunte sobre:\n• Trilhas de carreira específicas\n• Mercado de trabalho em tech\n• Dicas de estudo e recursos\n• Preparação para entrevistas";
    }
    
    setIsTyping(false);
    setMessages((prev) => [...prev, { role: "assistant", content: response }]);
  };

  const handleSend = async () => {
    if (!input.trim()) return;
    
    const userMessage = input.trim();
    setInput("");
    setMessages((prev) => [...prev, { role: "user", content: userMessage }]);
    
    await simulateResponse(userMessage);
  };

  const handleSuggestedQuestion = (question: string) => {
    setInput(question);
  };

  return (
    <section className="min-h-screen gradient-hero flex flex-col">
      {/* Header */}
      <header className="border-b border-primary-foreground/10 bg-card/5 backdrop-blur-md">
        <div className="container mx-auto px-4 py-4 flex items-center gap-4">
          <Button variant="ghost" size="icon" onClick={onBack} className="text-primary-foreground/70 hover:text-primary-foreground">
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center">
              <Bot className="w-5 h-5 text-primary-foreground" />
            </div>
            <div>
              <h1 className="font-semibold text-primary-foreground">Mentor de Carreira</h1>
              <p className="text-xs text-primary-foreground/60">Sempre disponível para ajudar</p>
            </div>
          </div>
        </div>
      </header>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto">
        <div className="container mx-auto px-4 py-6 space-y-6 max-w-3xl">
          {messages.map((message, index) => (
            <div
              key={index}
              className={cn(
                "flex gap-3 animate-fade-in",
                message.role === "user" ? "justify-end" : "justify-start"
              )}
            >
              {message.role === "assistant" && (
                <div className="w-8 h-8 rounded-full gradient-primary flex items-center justify-center flex-shrink-0">
                  <Sparkles className="w-4 h-4 text-primary-foreground" />
                </div>
              )}
              <div
                className={cn(
                  "max-w-[80%] rounded-2xl px-4 py-3",
                  message.role === "user"
                    ? "bg-primary text-primary-foreground rounded-tr-sm"
                    : "bg-card/50 backdrop-blur-sm text-card-foreground rounded-tl-sm border border-primary-foreground/10"
                )}
              >
                <div className="whitespace-pre-wrap text-sm leading-relaxed prose prose-sm prose-invert">
                  {message.content.split('\n').map((line, i) => {
                    // Simple markdown-like rendering
                    if (line.startsWith('**') && line.endsWith('**')) {
                      return <p key={i} className="font-bold">{line.slice(2, -2)}</p>;
                    }
                    if (line.includes('**')) {
                      const parts = line.split(/\*\*(.*?)\*\*/g);
                      return (
                        <p key={i}>
                          {parts.map((part, j) => 
                            j % 2 === 1 ? <strong key={j}>{part}</strong> : part
                          )}
                        </p>
                      );
                    }
                    if (line.startsWith('•')) {
                      return <p key={i} className="ml-2">{line}</p>;
                    }
                    return <p key={i}>{line}</p>;
                  })}
                </div>
              </div>
              {message.role === "user" && (
                <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                  <User className="w-4 h-4 text-accent-foreground" />
                </div>
              )}
            </div>
          ))}
          
          {isTyping && (
            <div className="flex gap-3 animate-fade-in">
              <div className="w-8 h-8 rounded-full gradient-primary flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-primary-foreground animate-pulse" />
              </div>
              <div className="bg-card/50 backdrop-blur-sm rounded-2xl rounded-tl-sm px-4 py-3 border border-primary-foreground/10">
                <div className="flex gap-1">
                  <span className="w-2 h-2 bg-primary-foreground/40 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                  <span className="w-2 h-2 bg-primary-foreground/40 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                  <span className="w-2 h-2 bg-primary-foreground/40 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                </div>
              </div>
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Suggested questions */}
      {messages.length <= 2 && (
        <div className="border-t border-primary-foreground/10 bg-card/5 backdrop-blur-md">
          <div className="container mx-auto px-4 py-3 max-w-3xl">
            <p className="text-xs text-primary-foreground/50 mb-2">Sugestões:</p>
            <div className="flex flex-wrap gap-2">
              {suggestedQuestions.map((question) => (
                <button
                  key={question}
                  onClick={() => handleSuggestedQuestion(question)}
                  className="text-xs px-3 py-1.5 rounded-full bg-primary/10 text-primary-foreground/80 hover:bg-primary/20 transition-colors"
                >
                  {question}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Input */}
      <div className="border-t border-primary-foreground/10 bg-card/10 backdrop-blur-md">
        <div className="container mx-auto px-4 py-4 max-w-3xl">
          <div className="flex gap-3">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              placeholder="Digite sua pergunta..."
              className="flex-1 bg-card/50 border border-primary-foreground/10 rounded-xl px-4 py-3 text-card-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
            <Button
              variant="gradient"
              size="icon"
              onClick={handleSend}
              disabled={!input.trim() || isTyping}
              className="h-12 w-12 rounded-xl"
            >
              <Send className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
