import { motion } from 'framer-motion';

const Screen1 = ({ onNext }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <motion.div
      className="min-h-screen flex flex-col items-center justify-center px-4 relative z-10"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      {/* Character Image */}
      <motion.div
        variants={itemVariants}
        className="relative mb-8"
      >
        <motion.div 
          className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden"
          animate={{
            scale: [1, 1.05, 1],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <motion.div 
            className="absolute inset-0 bg-gradient-to-br from-pink-400/30 to-rose-500/30 rounded-full blur-xl"
            animate={{
              opacity: [0.3, 0.6, 0.3],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
          <motion.div 
            className="relative w-full h-full bg-gradient-to-br from-pink-200 to-rose-300 rounded-full flex items-center justify-center text-6xl md:text-7xl"
            animate={{
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            🥰
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Heading */}
      <motion.h1
        variants={itemVariants}
        className="romantic-heading text-4xl md:text-6xl font-bold text-white mb-4 text-center"
        animate={{
          textShadow: [
            '0 0 10px rgba(255, 192, 203, 0.5)',
            '0 0 20px rgba(255, 192, 203, 0.8)',
            '0 0 10px rgba(255, 192, 203, 0.5)',
          ],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        Hey Handsome
      </motion.h1>

      {/* Subtext */}
      <motion.p
        variants={itemVariants}
        className="text-lg md:text-xl text-pink-200 mb-8 text-center max-w-md"
      >
        Do you even know how cute you are?
      </motion.p>

      {/* Button */}
      <motion.button
        variants={itemVariants}
        onClick={onNext}
        className="px-8 py-4 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full text-white font-semibold text-lg shadow-lg shadow-pink-500/50 hover:shadow-xl hover:shadow-pink-500/60 transition-all duration-300"
        whileHover={{
          scale: 1.1,
          boxShadow: '0 0 30px rgba(236, 72, 153, 0.8)',
        }}
        whileTap={{ scale: 0.95 }}
        animate={{
          boxShadow: [
            '0 0 20px rgba(236, 72, 153, 0.5)',
            '0 0 30px rgba(236, 72, 153, 0.8)',
            '0 0 20px rgba(236, 72, 153, 0.5)',
          ],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
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
          Open My Heart ❤️
        </motion.span>
      </motion.button>
    </motion.div>
  );
};

export default Screen1;

