'use client';

import {
  motion,
  useMotionTemplate,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from 'framer-motion';
import { useRef } from 'react';

type ParallaxImgPropsT = {
  className: string;
  alt: string;
  src: string;
  start: number;
  end: number;
};

export default function ParallaxImg({
  className,
  alt,
  src,
  start,
  end,
}: ParallaxImgPropsT) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: [`${start}px end`, `end ${end * -1}px`],
  });

  const opacity = useTransform(scrollYProgress, [0.75, 1], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [start, end]);
  const scale = useTransform(scrollYProgress, [0.75, 1], [1, 0.85]);
  const transform = useMotionTemplate`translateY(${y}px) scale(${scale})`;

  return (
    <motion.img
      ref={ref}
      style={{ opacity, transform }}
      src={src}
      className={className}
      alt={alt}
    />
  );
}
