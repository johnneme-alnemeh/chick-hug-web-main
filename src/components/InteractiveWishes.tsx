import { useState } from 'react';

const wishes = [
  "May your day be filled with sunshine and happiness 🌞",
  "Wishing you a year full of beautiful adventures 🦋",
  "May all your dreams come true, my little chick 🌟",
  "Sending you endless hugs and kisses 💋",
  "May your heart always be as light as a feather 🪶",
  "Wishing you laughter that echoes through the days 😊",
  "May you always feel as loved as you are today 💖",
  "May all the problems disappear and you always be happy ✨",
  "May our love grow stronger with every sunrise and sunset 🌅",
  "May every moment today remind you how special you are to me 💐",
  "Hope next year I will be with you 💗",
  "I will always be with you and supporting every step of your journey 💕💝💘",
];

export const InteractiveWishes = () => {
  const [revealedWishes, setRevealedWishes] = useState<number[]>([]);
  const [currentWish, setCurrentWish] = useState<string>('');

  const revealWish = (index: number) => {
    if (!revealedWishes.includes(index)) {
      setRevealedWishes([...revealedWishes, index]);
    }
    setCurrentWish(wishes[index]); // Always allow re-reading
  };

  return (
    <section className="py-20 px-6  bg-gradient-romantic relative overflow-hidden">
      {/* Soft glowing background hearts */}
      <div className="absolute -top-20 -left-20 text-pink-300/30 text-[200px] animate-pulse">💗</div>
      <div className="absolute bottom-0 right-0 text-rose-300/30 text-[150px] animate-pulse">💕</div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="font-romantic text-5xl md:text-6xl text-rose-700 mb-8 drop-shadow-lg">
          Birthday Wishes
        </h2>
        
        <p className="font-sans text-xl text-rose-800/90 mb-12 max-w-2xl mx-auto">
          Click on the hearts below to reveal or re-read special wishes 💕
        </p>
        
        {/* Interactive Hearts Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {wishes.map((_, index) => (
            <button
            key={index}
            onClick={() => revealWish(index)}
            className={`w-20 h-20 rounded-full flex items-center justify-center shadow-lg transition-transform transform hover:scale-110 hover:rotate-6 ${
              revealedWishes.includes(index) 
                ? 'bg-pink-100 text-rose-600 shadow-[0_0_20px_rgba(255,182,193,0.7)]'
                : 'bg-rose-300/30 text-rose-200 hover:bg-pink-200/60'
            } ${revealedWishes.includes(index) ? 'animate-pulse-soft' : 'hover:animate-bounce'}`}
          >
            <span className="text-3xl">
              {revealedWishes.includes(index) ? '💖' : '🤍'}
            </span>
          </button>
          
          ))}
        </div>
        
        {/* Current Wish Display */}
        {currentWish && (
          <div className="bg-white/40 backdrop-blur-md rounded-2xl p-8 shadow-lg border border-pink-200 animate-fade-in-up">
            <p className="font-sans text-xl text-rose-700 leading-relaxed animate-slide-up">
              {currentWish}
            </p>
          </div>
        )}
        
        {/* Progress Indicator */}
        <div className="mt-8">
          <p className="font-sans text-rose-700/80 mb-4">
            {revealedWishes.length} of {wishes.length} wishes revealed
          </p>
          <div className="w-full bg-pink-300/30 rounded-full h-2 overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-pink-400 to-rose-400 transition-all duration-500 rounded-full"
              style={{ width: `${(revealedWishes.length / wishes.length) * 100}%` }}
            ></div>
          </div>
        </div>
        
        {revealedWishes.length === wishes.length && (
          <div className="mt-8 animate-fade-in-up">
            <div className="text-6xl mb-4 animate-bounce">🎉</div>
            <p className="font-romantic text-3xl text-rose-700">
              All wishes revealed! You're amazing, my little chick! 🐣💕
            </p>
          </div>
        )}
      </div>
    </section>
  );
};
