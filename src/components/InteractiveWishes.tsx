import { useState } from 'react';

const wishes = [
  "May your day be filled with sunshine and happiness 🌞",
  "Wishing you a year full of beautiful adventures 🦋",
  "May all your dreams come true, my little chick 🌟",
  "Sending you endless hugs and kisses 💋",
  "May your heart always be as light as a feather 🪶",
  "Wishing you laughter that echoes through the days 😊",
  "May you always feel as loved as you are today 💖",
  "Here's to another year of being absolutely amazing ✨"
];

export const InteractiveWishes = () => {
  const [revealedWishes, setRevealedWishes] = useState<number[]>([]);
  const [currentWish, setCurrentWish] = useState<string>('');

  const revealWish = (index: number) => {
    if (!revealedWishes.includes(index)) {
      setRevealedWishes([...revealedWishes, index]);
      setCurrentWish(wishes[index]);
    }
  };

  return (
    <section className="py-20 px-6 bg-gradient-romantic">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-romantic text-5xl md:text-6xl text-white mb-8 drop-shadow-lg">
          Birthday Wishes
        </h2>
        
        <p className="font-sans text-xl text-white/90 mb-12 max-w-2xl mx-auto">
          Click on the hearts below to reveal special birthday wishes for my little chick 💕
        </p>
        
        {/* Interactive Hearts Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {wishes.map((_, index) => (
            <button
              key={index}
              onClick={() => revealWish(index)}
              className={`relative group transition-romantic transform hover:scale-110 ${
                revealedWishes.includes(index) 
                  ? 'animate-heart-beat' 
                  : 'hover:animate-pulse'
              }`}
              disabled={revealedWishes.includes(index)}
            >
              <div className={`w-20 h-20 rounded-full flex items-center justify-center shadow-warm transition-romantic ${
                revealedWishes.includes(index)
                  ? 'bg-white text-primary scale-110 shadow-romantic'
                  : 'bg-white/20 text-white/80 hover:bg-white/30'
              }`}>
                <span className="text-3xl">
                  {revealedWishes.includes(index) ? '💖' : '🤍'}
                </span>
              </div>
              
              {!revealedWishes.includes(index) && (
                <div className="absolute inset-0 rounded-full bg-white/10 opacity-0 group-hover:opacity-100 transition-romantic"></div>
              )}
            </button>
          ))}
        </div>
        
        {/* Current Wish Display */}
        {currentWish && (
          <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 shadow-warm border border-white/30 animate-fade-in-up">
            <p className="font-sans text-xl text-white leading-relaxed">
              {currentWish}
            </p>
          </div>
        )}
        
        {/* Progress Indicator */}
        <div className="mt-8">
          <p className="font-sans text-white/70 mb-4">
            {revealedWishes.length} of {wishes.length} wishes revealed
          </p>
          <div className="w-full bg-white/20 rounded-full h-2 overflow-hidden">
            <div 
              className="h-full bg-white transition-romantic rounded-full"
              style={{ width: `${(revealedWishes.length / wishes.length) * 100}%` }}
            ></div>
          </div>
        </div>
        
        {revealedWishes.length === wishes.length && (
          <div className="mt-8 animate-fade-in-up">
            <div className="text-6xl mb-4">🎉</div>
            <p className="font-romantic text-3xl text-white">
              All wishes revealed! You're amazing, my little chick! 🐣💕
            </p>
          </div>
        )}
      </div>
    </section>
  );
};