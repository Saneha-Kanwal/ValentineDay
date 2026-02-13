import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

// Component for additional hearts flowing on each screen
const ScreenHearts = ({ count = 35 }) => {
  const [hearts, setHearts] = useState([]);

  useEffect(() => {
    const generateHearts = () => {
      const newHearts = [];
      for (let i = 0; i < count; i++) {
        newHearts.push({
          id: `screen-heart-${i}`,
          x: Math.random() * 100,
          startY: 110,
          endY: -10,
          delay: Math.random() * 15,
          duration: 4 + Math.random() * 12,
          size: Math.random() * 0.7 + 0.4,
          opacity: 0.15 + Math.random() * 0.35,
        });
      }
      setHearts(newHearts);
    };

    generateHearts();
  }, [count]);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-5">
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          className="absolute"
          style={{
            fontSize: `${heart.size * 1.2}rem`,
            left: `${heart.x}%`,
            filter: 'drop-shadow(0 0 4px rgba(236, 72, 153, 0.5))',
          }}
          initial={{
            y: `${heart.startY}vh`,
            opacity: 0,
            rotate: 0,
            scale: 0.2,
          }}
          animate={{
            y: `${heart.endY}vh`,
            opacity: [0, heart.opacity, heart.opacity, 0],
            rotate: [0, 30, -30, 20, -20, 10, -10, 0],
            scale: [0.2, heart.size, heart.size * 1.3, heart.size, 0.2],
            x: [
              `${heart.x}%`,
              `${heart.x + (Math.random() - 0.5) * 10}%`,
              `${heart.x + (Math.random() - 0.5) * 8}%`,
              `${heart.x}%`,
            ],
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
    </div>
  );
};

export default ScreenHearts;

