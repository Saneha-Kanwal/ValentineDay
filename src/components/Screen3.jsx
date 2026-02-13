import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ScreenHearts from './ScreenHearts';

const Screen3 = ({ onNext }) => {
  const [revealed, setRevealed] = useState([false, false, false, false]);
  
  const messages = [
    'You look adorable',
    'You have the sweetest vibe',
    'You make things feel lighter',
    'You are naturally charming',
  ];

  const handleHeartClick = (index) => {
    const newRevealed = [...revealed];
    newRevealed[index] = true;
    setRevealed(newRevealed);
  };

  return (
    <motion.div
      className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 py-8 sm:py-12 relative z-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Additional hearts flowing */}
      <ScreenHearts count={50} />
      
      {/* Top Heart Icon */}
      <motion.div
        className="text-4xl sm:text-5xl md:text-6xl mb-4 sm:mb-6"
        initial={{ scale: 0, opacity: 0, rotate: -180 }}
        animate={{ 
          scale: 1, 
          opacity: 1,
          rotate: 0,
        }}
        transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
      >
        <motion.span
          animate={{
            rotate: [0, 10, -10, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          ❤️
        </motion.span>
      </motion.div>

      {/* Heading */}
      <motion.h2
        className="romantic-heading text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 text-center px-2"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        Just for you
      </motion.h2>

      {/* Subtext */}
      <motion.p
        className="text-pink-200 mb-6 sm:mb-8 text-center text-xs sm:text-sm md:text-base px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        Tap each one to reveal
      </motion.p>

      {/* Heart Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8 max-w-2xl w-full px-2">
        {messages.map((message, index) => (
          <motion.div
            key={index}
            className="bg-gradient-to-br from-pink-900/50 to-purple-900/50 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-pink-500/40 shadow-lg cursor-pointer hover:border-pink-400/60 transition-all duration-300 min-h-[100px] sm:min-h-[120px] flex items-center justify-center touch-manipulation"
            initial={{ opacity: 0, y: 20, rotateX: -90 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ delay: 0.5 + index * 0.1, type: 'spring', stiffness: 100 }}
            whileHover={{
              scale: 1.05,
              boxShadow: '0 0 25px rgba(236, 72, 153, 0.5)',
              borderColor: 'rgba(236, 72, 153, 0.6)',
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleHeartClick(index)}
          >
            <AnimatePresence mode="wait">
              {!revealed[index] ? (
                <motion.div
                  key="heart"
                  className="text-3xl sm:text-4xl"
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ 
                    scale: 1,
                    rotate: 0,
                  }}
                  exit={{ scale: 0, opacity: 0, rotate: 180 }}
                  transition={{ type: 'spring', stiffness: 200 }}
                >
                  <motion.span
                    animate={{
                      rotate: [0, 15, -15, 0],
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  >
                    ❤️
                  </motion.span>
                </motion.div>
              ) : (
                <motion.p
                  key="message"
                  className="text-white text-center text-sm sm:text-base md:text-lg font-medium px-2"
                  initial={{ opacity: 0, y: 10, scale: 0.8 }}
                  animate={{ 
                    opacity: 1, 
                    y: 0,
                    scale: 1,
                  }}
                  transition={{ 
                    duration: 0.5,
                    type: 'spring',
                    stiffness: 200,
                  }}
                >
                  {message}
                </motion.p>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>

      {/* See More Button */}
      <motion.button
        onClick={onNext}
        className="px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full text-white font-semibold text-base sm:text-lg shadow-lg shadow-pink-500/50 hover:shadow-xl hover:shadow-pink-500/60 transition-all duration-300 touch-manipulation"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        whileHover={{
          scale: 1.1,
          boxShadow: '0 0 30px rgba(236, 72, 153, 0.8)',
        }}
        whileTap={{ scale: 0.95 }}
      >
        <motion.span
          animate={{
            x: [0, 5, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          See more →
        </motion.span>
      </motion.button>
    </motion.div>
  );
};

export default Screen3;

