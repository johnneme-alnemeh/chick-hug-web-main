import floatingHearts from "@/assets/floating-hearts.jpg";

export const LoveLetter = () => {
  return (
    <section className="py-20 px-6 relative overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: `url(${floatingHearts})` }}
      ></div>
      
      <div className="absolute inset-0 bg-gradient-soft"></div>
      
      <div className="max-w-3xl mx-auto relative z-10">
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-12 shadow-romantic border border-primary/20">
          {/* Letter Header */}
          <div className="text-center mb-8">
            <h2 className="font-romantic text-4xl md:text-5xl text-gradient-romantic mb-4">
              A Letter From My Heart
            </h2>
            <div className="w-24 h-1 bg-gradient-romantic mx-auto rounded-full"></div>
          </div>
          
          {/* Letter Content */}
          <div className="space-y-6 font-sans text-foreground/80 leading-relaxed">
            <p className="text-lg">
              My Dearest Little Chick,
            </p>
            
            <p>
              As I sit here thinking about you on your special day, my heart overflows with 
              so much love that words seem insufficient. You've brought colors to my world 
              that I never knew existed, and joy that I never thought possible.
            </p>
            
            <p>
              Every day with you feels like a gift. Your laugh is my favorite sound, 
              your smile is my favorite sight, and your happiness is my favorite mission. 
              You have this incredible way of making ordinary moments feel extraordinary, 
              just by being you.
            </p>
            
            <p>
              I love how you see the world with such wonder and kindness. I love your 
              cute little habits, the way you scrunch your nose when you're thinking, 
              and how you make everything better just by being there. You truly are 
              my little chick - precious, adorable, and absolutely perfect.
            </p>
            
            <p>
              On this birthday, I want you to know that you are cherished beyond measure. 
              You are my best friend, my greatest love, and my biggest blessing. I can't 
              wait to celebrate many more birthdays with you, creating countless more 
              beautiful memories together.
            </p>
            
            <p className="text-lg font-medium text-primary">
              Happy Birthday, my love. Here's to another year of adventures, laughter, 
              and endless love. You mean everything to me. 💕
            </p>
            
            <div className="text-right pt-6">
              <p className="font-romantic text-2xl text-primary">
                Forever yours,
              </p>
              <p className="font-romantic text-xl text-muted-foreground mt-2">
                J.F.K 💕
              </p>
            </div>
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute top-4 right-4 text-2xl opacity-50">🌹</div>
          <div className="absolute bottom-4 left-4 text-2xl opacity-50">💕</div>
        </div>
      </div>
    </section>
  );
};