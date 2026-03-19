"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export default function HeroPortrait3D() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Subtle parallax (VERY IMPORTANT: keep values small)
  const y = useTransform(scrollYProgress, [0, 1], [20, -20]);
  const rotateY = useTransform(scrollYProgress, [0, 1], [-3, 3]);

  return (
    <motion.div
      ref={ref}
      style={{ y, rotateY }}
      className="relative w-[360px] h-[460px] xl:w-[420px] xl:h-[540px]"
    >
      {/* Glow */}
      <div className="absolute inset-0 rounded-[2.5rem] bg-gold-500/10 blur-2xl scale-105" />

      {/* Portrait Card */}
      <div className="relative z-10 w-full h-full rounded-[2.5rem] overflow-hidden border border-gold-500/30 bg-obsidian-900 shadow-2xl">
        <Image
          src="https://ik.imagekit.io/abhishekojha/Jija%20Image.jpeg" // professional photo
          alt="Advocate Saubhagya Mishra – Allahabad High Court"
          fill
          className="object-cover"
          priority
        />

        {/* Light Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950/60 via-transparent to-transparent" />
      </div>
    </motion.div>
  );
}
