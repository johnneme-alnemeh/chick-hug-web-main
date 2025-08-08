interface Memory {
  date: string;
  title: string;
  description: string;
  emoji: string;
}

const memories: Memory[] = [
  {
    date: "Our First Meeting",
    title: "When Eyes Met Hearts",
    description: "The moment I knew you were special. Your smile lit up my entire world and I knew my life was about to change forever.",
    emoji: "✨"
  },
  {
    date: "First Date",
    title: "Dota 2 & Plato",
    description: "Nervous voices, racing hearts, and endless conversation. Time stood still as we talked for hours, and I never wanted it to end.",
    emoji: "🎮"
  },
  {
    date: "First 'I Love You'",
    title: "Three Magic Words",
    description: "The words that changed everything. When we said 'I love you' for the first time, the whole universe felt right.",
    emoji: "💕"
  },
  {
    date: "Little Chick",
    title: "Your Adorable Nickname",
    description: "The day you became my little chick - so cute, so precious, so perfectly you. This nickname will forever hold a special place in my heart.",
    emoji: "🐣"
  },
  {
    date: "Today",
    title: "Your Special Day",
    description: "Celebrating another year of your beautiful existence. Here's to many more birthdays together, my love.",
    emoji: "🎂"
  }
];

export const MemoryTimeline = () => {
  return (
    <section className="py-20 px-6 bg-gradient-sunset relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full bg-repeat" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M30 30c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        <h2 className="font-romantic text-5xl md:text-6xl text-white text-center mb-16 drop-shadow-lg">
          Our Beautiful Journey
        </h2>
        
        <div className="space-y-12">
          {memories.map((memory, index) => (
            <div 
              key={index}
              className={`flex flex-col md:flex-row items-center gap-8 animate-fade-in-up`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Timeline Dot */}
              <div className="flex-shrink-0 relative">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-warm border-4 border-primary/30">
                  <span className="text-3xl">{memory.emoji}</span>
                </div>
                {index < memories.length - 1 && (
                  <div className="absolute top-20 left-1/2 transform -translate-x-1/2 w-1 h-12 bg-white/30 hidden md:block"></div>
                )}
              </div>
              
              {/* Memory Card */}
              <div className="flex-1 bg-white/20 backdrop-blur-sm rounded-2xl p-6 shadow-warm border border-white/30 transition-romantic hover:bg-white/30 hover:scale-105">
                <div className="text-center md:text-left">
                  <h3 className="font-elegant text-2xl text-white mb-2">{memory.title}</h3>
                  <p className="font-romantic text-xl text-primary-glow mb-3">{memory.date}</p>
                  <p className="font-sans text-white/90 leading-relaxed">{memory.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};