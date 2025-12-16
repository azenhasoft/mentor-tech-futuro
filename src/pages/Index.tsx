import { useState } from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { CareerPaths } from "@/components/CareerPaths";
import { HowItWorks } from "@/components/HowItWorks";
import { Footer } from "@/components/Footer";
import { Quiz } from "@/components/Quiz";
import { MentorChat } from "@/components/MentorChat";

type View = "home" | "quiz" | "chat";

const Index = () => {
  const [view, setView] = useState<View>("home");
  const [quizAnswers, setQuizAnswers] = useState<Record<string, string> | null>(null);

  const handleStartQuiz = () => {
    setView("quiz");
  };

  const handleQuizComplete = (answers: Record<string, string>) => {
    setQuizAnswers(answers);
    setView("chat");
  };

  const handleBackToHome = () => {
    setView("home");
  };

  const handleBackFromChat = () => {
    setView("quiz");
  };

  if (view === "quiz") {
    return <Quiz onComplete={handleQuizComplete} onBack={handleBackToHome} />;
  }

  if (view === "chat") {
    return <MentorChat initialContext={quizAnswers || undefined} onBack={handleBackFromChat} />;
  }

  return (
    <div className="min-h-screen">
      <Header onStartQuiz={handleStartQuiz} />
      <Hero onStartQuiz={handleStartQuiz} />
      <CareerPaths />
      <HowItWorks />
      <Footer />
    </div>
  );
};

export default Index;
