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
              Habibti Sara,
            </p>
            
            <p>
              It breaks my heart that i can't be with you on your special day, but my heart overflows with 
              so much love that words seem insufficient. You've brought colors to my world 
              that I never knew existed, and joy that I never thought possible.
            </p>
            
            <p>
              Every day with you is a gift from god. Your laugh is my favorite sound, 
              your smile is my favorite sight, your eyes are my stars, your face is my moon and your happiness is my favorite mission. 
              You have this incredible way of making ordinary moments feel extraordinary, 
              just by being you.
            </p>

            <p>
              I know we have some difficulties, but I love you more than words can express and I will always be there for you.
              Together we can face any challenge and overcome any obstacle. 
              your existence and your love makes me stronger, you give me a reason to smile and a reason to be happy.
            </p>
            
            <p>
              I love how you giggle while talking and how you treat everyone with kindness. I love your 
              jokes and stories. I love the way you do everything with such grace and passion, 
              and how you make everything better just by being there. You truly are 
              precious, adorable, and absolutely perfect. You are my joje.
            </p>
            
            <p>
              On this birthday, I want you to know that you are cherished beyond measure. 
              You are my best friend, my greatest love, and my biggest blessing. I can't 
              wait to spend every moment with you, creating countless more 
              beautiful memories together.
            </p>
            
            <p className="text-lg font-medium text-primary">
              Happy Birthday, my love. I wish you a year full of adventures, laughter, luck 
              and endless love. You mean everything to me. You are my world. 🌍💕
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