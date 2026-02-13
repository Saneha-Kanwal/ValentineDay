import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import HeartParticles from './components/HeartParticles';
import RomanticAudio from './components/RomanticAudio';
import Screen1 from './components/Screen1';
import Screen2 from './components/Screen2';
import Screen3 from './components/Screen3';
import Screen4 from './components/Screen4';

function App() {
  const [currentScreen, setCurrentScreen] = useState(1);

  const handleNext = () => {
    setCurrentScreen((prev) => prev + 1);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900/40 to-black relative overflow-hidden">
      {/* Animated romantic background effect */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-pink-900/20 via-purple-900/15 to-rose-900/20"
          animate={{
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-pink-500/10 to-transparent"
          animate={{
            x: ['-100%', '100%'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
        {/* Subtle star particles */}
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-pink-300/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: 2 + Math.random() * 3,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </div>
      
      {/* Floating Heart Particles Background */}
      <HeartParticles />

      {/* Romantic Background Audio */}
      <RomanticAudio />

      {/* Screen Content */}
      <AnimatePresence mode="wait">
        {currentScreen === 1 && (
          <Screen1 key="screen1" onNext={handleNext} />
        )}
        {currentScreen === 2 && (
          <Screen2 key="screen2" onNext={handleNext} />
        )}
        {currentScreen === 3 && (
          <Screen3 key="screen3" onNext={handleNext} />
        )}
        {currentScreen === 4 && <Screen4 key="screen4" />}
      </AnimatePresence>
    </div>
  );
}

export default App;

