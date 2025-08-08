import { FloatingHearts } from "@/components/FloatingHearts";
import { HeroSection } from "@/components/HeroSection";
import { MemoryTimeline } from "@/components/MemoryTimeline";
import { LoveLetter } from "@/components/LoveLetter";
import { InteractiveWishes } from "@/components/InteractiveWishes";

const Index = () => {
  return (
    <div className="min-h-screen relative overflow-x-hidden">
      {/* Floating Hearts Background */}
      <FloatingHearts />
      
      {/* Main Content */}
      <main className="relative z-10">
        <HeroSection />
        <MemoryTimeline />
        <LoveLetter />
        <InteractiveWishes />
        
        {/* Footer */}
        <footer className="py-12 text-center bg-gradient-soft">
          <div className="max-w-2xl mx-auto px-6">
            <p className="font-romantic text-2xl text-primary mb-4">
              Made with endless love for my little chick 💕
            </p>
            <p className="font-sans text-muted-foreground">
              Happy Birthday, my darling. You are my everything. 🐣✨
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Index;
