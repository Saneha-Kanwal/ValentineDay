import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const HeartParticles = () => {
  const [floatingHearts, setFloatingHearts] = useState([]);
  const [flowingHearts, setFlowingHearts] = useState([]);

  useEffect(() => {
    // Generate floating hearts (random positions)
    const generateFloatingHearts = () => {
      const newHearts = [];
      for (let i = 0; i < 15; i++) {
        newHearts.push({
          id: `float-${i}`,
          x: Math.random() * 100,
          y: Math.random() * 100,
          delay: Math.random() * 5,
          duration: 10 + Math.random() * 10,
        });
      }
      setFloatingHearts(newHearts);
    };

    // Generate hearts flowing from bottom to top
    const generateFlowingHearts = () => {
      const newHearts = [];
      for (let i = 0; i < 20; i++) {
        newHearts.push({
          id: `flow-${i}`,
          x: Math.random() * 100,
          startY: 110, // Start below viewport
          endY: -10, // End above viewport
          delay: Math.random() * 8,
          duration: 8 + Math.random() * 7,
          size: Math.random() * 0.5 + 0.8, // Random size between 0.8 and 1.3
        });
      }
      setFlowingHearts(newHearts);
    };

    generateFloatingHearts();
    generateFlowingHearts();
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Floating hearts (random positions) */}
      {floatingHearts.map((heart) => (
        <motion.div
          key={heart.id}
          className="absolute text-pink-400/20 text-2xl"
          initial={{
            x: `${heart.x}vw`,
            y: `${heart.y}vh`,
            opacity: 0,
          }}
          animate={{
            y: [`${heart.y}vh`, `${heart.y - 20}vh`, `${heart.y}vh`],
            opacity: [0, 0.3, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: heart.duration,
            delay: heart.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          ❤️
        </motion.div>
      ))}

      {/* Hearts flowing from bottom to top */}
      {flowingHearts.map((heart) => (
        <motion.div
          key={heart.id}
          className="absolute text-pink-400/30"
          style={{
            fontSize: `${heart.size * 1.5}rem`,
            left: `${heart.x}%`,
          }}
          initial={{
            y: `${heart.startY}vh`,
            opacity: 0,
            rotate: 0,
          }}
          animate={{
            y: `${heart.endY}vh`,
            opacity: [0, 0.6, 0.6, 0],
            rotate: [0, 15, -15, 0],
            scale: [0.8, 1, 1, 0.8],
          }}
          transition={{
            duration: heart.duration,
            delay: heart.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          ❤️
        </motion.div>
      ))}
    </div>
  );
};

export default HeartParticles;

