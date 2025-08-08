import romanticSunset from "@/assets/romantic-sunset.jpg";
import cuteChick from "@/assets/chick.jpg";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${romanticSunset})` }}
      >
        <div className="absolute inset-0 bg-gradient-romantic opacity-60"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="animate-fade-in-up">
          {/* Cute Chick */}
          <div className="mb-8 flex justify-center">
            <img 
              src={cuteChick} 
              alt="My Little Chick" 
              className="w-32 h-32 rounded-full shadow-romantic animate-heart-beat object-cover border-4 border-white/50"
            />
          </div>
          
          {/* Main Title */}
          <h1 className="font-romantic text-6xl md:text-8xl text-white mb-6 drop-shadow-lg">
            Happy Birthday
          </h1>
          <h2 className="font-elegant text-3xl md:text-5xl text-white/90 mb-8 drop-shadow-md">
            My Little Chick 🐣
          </h2>
          
          {/* Love Message */}
          <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 mb-8 shadow-warm border border-white/30">
            <p className="font-sans text-lg md:text-xl text-white/95 leading-relaxed max-w-2xl mx-auto">
              Today is your special day, and I wanted to create something beautiful 
              to show you just how much you mean to me. You're my sunshine, my joy, 
              my everything. Happy birthday, my love! 💕
            </p>
          </div>
          
          {/* Scroll Indicator */}
          <div className="animate-bounce">
            <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
            </div>
            <p className="text-white/70 text-sm mt-2 font-sans">Scroll for more surprises</p>
          </div>
        </div>
      </div>
    </section>
  );
};