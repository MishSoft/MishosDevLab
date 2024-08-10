"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Photo() {
  return (
    <div className="w-full h-full relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          // transition: { delay: 1, duration: 0.2, ease: "easeIn" },
        }}
      >
        {/* image */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            // transition: { delay: 1, duration: 0.2, ease: "easeIn" },
          }}
          className="w-[298px] h-[298px] xl:w-[498px] xl:h-[498px] mix-blend-lighten"
        >
          <Image
            src="/photo.png"
            className="object-contain rounded-full border-2 border-blue-600"
            fill
            priority
            quality={100}
            alt={"Photo"}
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
