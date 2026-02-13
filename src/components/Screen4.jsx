import { motion } from 'framer-motion';

const Screen4 = () => {
  const textLines = [
    '❤️',
    '',
    'i just wanted to tell you something..',
    '',
    'you really are special in a way that\'s hard to explain',
    '',
    'there\'s a softness in the way you talk, a sweetness in the way you smile and something genuine about you that just feels good to be around.',
    '',
    'you don\'t try to be anything extra, you are just you, and that\'s what makes you so lovely',
    '',
    '❤️',
  ];

  return (
    <motion.div
      className="min-h-screen flex flex-col items-center justify-center px-4 py-12 relative z-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Background Gradient Overlay */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-pink-900/20 via-rose-900/20 to-pink-800/20 pointer-events-none"
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
        className="bg-gradient-to-br from-pink-900/50 to-rose-900/50 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-pink-500/30 shadow-2xl shadow-pink-500/20 max-w-2xl w-full relative z-10"
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
                  ? 'text-4xl md:text-5xl'
                  : line === ''
                  ? 'h-4'
                  : 'text-base md:text-lg leading-relaxed text-pink-100'
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
            className="text-4xl md:text-5xl"
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

