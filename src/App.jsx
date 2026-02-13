import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import HeartParticles from './components/HeartParticles';
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
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800/90 to-cyan-900/80 relative overflow-hidden">
      {/* Animated wave background effect */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-600/20 via-transparent to-blue-800/20 animate-pulse" />
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/10 to-transparent"
          animate={{
            x: ['-100%', '100%'],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      </div>
      
      {/* Floating Heart Particles Background */}
      <HeartParticles />

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

