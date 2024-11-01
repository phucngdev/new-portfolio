import React from "react";
import { motion } from "framer-motion";

const Hello = () => {
  return (
    <>
      <motion.div
        className="w-full h-[100vh] bg-white"
        animate={{
          scale: [1, 2, 2, 1, 0], // Shrinks to 0 at the end
          rotate: [0, 0, 180, 180, 0],
          borderRadius: ["0%", "0%", "50%", "50%", "0%"],
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          times: [0, 0.2, 0.5, 0.8, 1],
          // repeat: false,
        }}
      />
    </>
  );
};

export default Hello;
