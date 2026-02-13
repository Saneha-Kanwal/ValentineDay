import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Screen2 = ({ onNext }) => {
  const [percentage, setPercentage] = useState(0);
  const [showWarning, setShowWarning] = useState(false);

  useEffect(() => {
    // Animate to 64%
    const timer1 = setTimeout(() => {
      let current = 0;
      const interval = setInterval(() => {
        current += 2;
        if (current >= 64) {
          clearInterval(interval);
          setPercentage(64);
          
          // After 2 seconds, animate to 120%
          setTimeout(() => {
            let current2 = 64;
            const interval2 = setInterval(() => {
              current2 += 2;
              if (current2 >= 120) {
                clearInterval(interval2);
                setPercentage(120);
                
                // Show warning after reaching 120%
                setTimeout(() => {
                  setShowWarning(true);
                  
                  // Transition to next screen after 1.5 seconds
                  setTimeout(() => {
                    onNext();
                  }, 1500);
                }, 500);
              } else {
                setPercentage(current2);
              }
            }, 30);
          }, 2000);
        } else {
          setPercentage(current);
        }
      }, 30);
    }, 500);

    return () => {
      clearTimeout(timer1);
    };
  }, [onNext]);

  return (
    <motion.div
      className="min-h-screen flex flex-col items-center justify-center px-4 relative z-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="bg-gradient-to-br from-pink-900/40 to-rose-900/40 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-pink-500/30 shadow-2xl shadow-pink-500/20 max-w-md w-full"
        initial={{ scale: 0.9, opacity: 0, rotateY: -15 }}
        animate={{ 
          scale: 1, 
          opacity: 1,
          rotateY: 0,
        }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        whileHover={{
          scale: 1.02,
          boxShadow: '0 0 40px rgba(236, 72, 153, 0.4)',
        }}
      >
        <motion.h2
          className="romantic-heading text-2xl md:text-3xl font-semibold text-white text-center mb-8"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Measuring your cuteness...
        </motion.h2>

        {/* Percentage Counter */}
        <motion.div
          className="text-6xl md:text-7xl font-bold text-center mb-6 bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent"
          key={percentage}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {Math.min(percentage, 120)}%
        </motion.div>

        {/* Progress Bar */}
        <div className="w-full h-3 bg-pink-900/50 rounded-full overflow-hidden mb-4 relative">
          <motion.div
            className="h-full bg-gradient-to-r from-pink-500 to-rose-500 rounded-full relative overflow-hidden"
            initial={{ width: '0%' }}
            animate={{ width: `${Math.min(percentage, 100)}%` }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
              animate={{
                x: ['-100%', '100%'],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: 'linear',
              }}
            />
          </motion.div>
        </div>

        <motion.p
          className="text-pink-200 text-center text-sm md:text-base"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Calculating cuteness...
        </motion.p>

        {/* Warning Message */}
        <AnimatePresence>
          {showWarning && (
            <motion.div
              className="mt-6 text-center"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-xl md:text-2xl font-bold text-red-400 animate-pulse">
                ⚠ WARNING: TOO CUTE TO HANDLE
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
};

export default Screen2;

