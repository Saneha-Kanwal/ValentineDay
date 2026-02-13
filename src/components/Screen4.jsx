import { motion } from 'framer-motion';
import ScreenHearts from './ScreenHearts';

const Screen4 = () => {
  const textLines = [
    '❤️',
    '',
    'Happy Valentine\'s Day!',
    '',
    'May this special day bring you',
    'endless love, joy, and happiness',
    '',
    'You deserve all the beautiful moments',
    'and all the love in the world',
    '',
    'Wishing you a day filled with',
    'sweet surprises and romantic memories',
    '',
    'With all my love ❤️',
    '',
    '❤️',
  ];

  return (
    <motion.div
      className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 py-8 sm:py-12 relative z-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Additional hearts flowing */}
      <ScreenHearts count={40} />
      
      {/* Background Gradient Overlay */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-pink-900/20 via-purple-900/20 to-rose-900/20 pointer-events-none"
        animate={{
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Centered Card */}
      <motion.div
        className="bg-gradient-to-br from-pink-900/50 to-purple-900/50 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 border border-pink-500/40 shadow-2xl shadow-pink-500/30 max-w-2xl w-full relative z-10"
        initial={{ scale: 0.9, opacity: 0, y: 20, rotateX: -15 }}
        animate={{ 
          scale: 1, 
          opacity: 1, 
          y: 0,
          rotateX: 0,
        }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        whileHover={{
          scale: 1.02,
          boxShadow: '0 0 50px rgba(236, 72, 153, 0.4)',
        }}
      >
        {/* Text Content */}
        <div className="text-white text-center space-y-4">
          {textLines.map((line, index) => (
            <motion.p
              key={index}
              className={`${
                line === '❤️'
                  ? 'text-3xl sm:text-4xl md:text-5xl'
                  : line === ''
                  ? 'h-3 sm:h-4'
                  : 'text-sm sm:text-base md:text-lg leading-relaxed text-pink-100 px-2'
              }`}
              initial={{ opacity: 0, y: 10, scale: 0.9 }}
              animate={{ 
                opacity: 1, 
                y: 0,
                scale: 1,
              }}
              transition={{
                delay: index * 0.15,
                duration: 0.6,
                ease: 'easeOut',
                type: 'spring',
                stiffness: 100,
              }}
            >
              {line}
            </motion.p>
          ))}
        </div>

        {/* Bottom Glowing Heart */}
        <motion.div
          className="flex justify-center mt-8"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: textLines.length * 0.15 + 0.3 }}
        >
          <motion.div
            className="text-3xl sm:text-4xl md:text-5xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.7, 1, 0.7],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            ❤️
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Screen4;

