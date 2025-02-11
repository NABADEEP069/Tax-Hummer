import React from 'react'
import { motion } from 'framer-motion';

const AnimatedBackground = () => {
    return (
      <div className="fixed inset-0 -z-10 overflow-hidden">
        {/* Animated gradient circles */}
        <motion.div
          className="absolute w-96 h-96 rounded-full bg-purple-300/30 blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{
            left: "10%",
            top: "20%"
          }}
        />
        <motion.div
          className="absolute w-96 h-96 rounded-full bg-blue-300/30 blur-3xl"
          animate={{
            x: [0, -70, 0],
            y: [0, 100, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{
            right: "15%",
            top: "10%"
          }}
        />
        <motion.div
          className="absolute w-96 h-96 rounded-full bg-pink-300/30 blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{
            left: "30%",
            bottom: "20%"
          }}
        />
      </div>
    );
  };

export default AnimatedBackground