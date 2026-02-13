import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const RomanticAudio = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [showControls, setShowControls] = useState(true);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    // Set initial volume
    audio.volume = volume;

    // Handle audio loading errors
    const handleError = (e) => {
      console.log('Audio loading error:', e);
      // If file doesn't exist, keep controls visible for user to add file
      setShowControls(true);
    };

    const tryAutoplay = () => {
      const playPromise = audio.play();
      
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
            // Hide controls after 3 seconds if playing
            setTimeout(() => {
              setShowControls(false);
            }, 3000);
          })
          .catch((error) => {
            // Autoplay was prevented, show controls
            console.log('Autoplay prevented:', error);
            setIsPlaying(false);
            setShowControls(true);
          });
      }
    };

    // Try to autoplay when audio is ready
    const handleCanPlay = () => {
      tryAutoplay();
    };

    // Try to autoplay immediately
    tryAutoplay();

    // Handle play/pause events
    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);
    const handleEnded = () => {
      // Loop the song
      audio.currentTime = 0;
      audio.play().catch(() => {
        // If play fails, keep paused
        setIsPlaying(false);
      });
    };

    audio.addEventListener('play', handlePlay);
    audio.addEventListener('pause', handlePause);
    audio.addEventListener('ended', handleEnded);
    audio.addEventListener('error', handleError);
    audio.addEventListener('canplay', handleCanPlay);

    return () => {
      audio.removeEventListener('play', handlePlay);
      audio.removeEventListener('pause', handlePause);
      audio.removeEventListener('ended', handleEnded);
      audio.removeEventListener('error', handleError);
      audio.removeEventListener('canplay', handleCanPlay);
    };
  }, []);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  const togglePlayPause = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
  };

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        loop
        preload="auto"
        style={{ display: 'none' }}
      >
        <source src="/romantic-song.mp3" type="audio/mpeg" />
        <source src="/romantic-song.ogg" type="audio/ogg" />
        Your browser does not support the audio element.
      </audio>

      {/* Audio Controls */}
      <AnimatePresence>
        {showControls && (
          <motion.div
            className="fixed bottom-4 right-4 z-50 flex items-center gap-3 bg-gradient-to-r from-pink-900/80 to-purple-900/80 backdrop-blur-md rounded-full px-4 py-2 border border-pink-500/40 shadow-lg"
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            transition={{ duration: 0.3 }}
          >
            {/* Play/Pause Button */}
            <motion.button
              onClick={togglePlayPause}
              className="text-white text-xl hover:text-pink-300 transition-colors touch-manipulation"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {isPlaying ? '⏸️' : '▶️'}
            </motion.button>

            {/* Volume Control */}
            <div className="flex items-center gap-2">
              <span className="text-white text-sm">🔊</span>
              <input
                type="range"
                min="0"
                max="1"
                step="0.1"
                value={volume}
                onChange={handleVolumeChange}
                className="w-20 h-1 bg-pink-500/30 rounded-lg appearance-none cursor-pointer accent-pink-500"
                style={{
                  background: `linear-gradient(to right, rgba(236, 72, 153, 0.8) 0%, rgba(236, 72, 153, 0.8) ${volume * 100}%, rgba(236, 72, 153, 0.3) ${volume * 100}%, rgba(236, 72, 153, 0.3) 100%)`,
                }}
              />
            </div>

            {/* Close Button */}
            <motion.button
              onClick={() => setShowControls(false)}
              className="text-white text-sm hover:text-pink-300 transition-colors touch-manipulation"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              ✕
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Show Controls Button (when hidden) */}
      {!showControls && (
        <motion.button
          onClick={() => setShowControls(true)}
          className="fixed bottom-4 right-4 z-50 bg-gradient-to-r from-pink-900/80 to-purple-900/80 backdrop-blur-md rounded-full p-3 border border-pink-500/40 shadow-lg text-white hover:text-pink-300 transition-colors touch-manipulation"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {isPlaying ? '🎵' : '🔇'}
        </motion.button>
      )}
    </>
  );
};

export default RomanticAudio;

