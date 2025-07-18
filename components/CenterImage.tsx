'use client';
import {
  motion,
  useScroll,
  useTransform,
  useMotionTemplate,
} from 'framer-motion';

const SECTION_HEIGH = 1200;

export default function CenterImage() {
  const { scrollY } = useScroll();

  const clip1 = useTransform(scrollY, [0, SECTION_HEIGH], [25, 0]);
  const clip2 = useTransform(scrollY, [0, SECTION_HEIGH], [75, 100]);

  const clipPath = useMotionTemplate`polygon(${clip1}% ${clip1}%, ${clip2}% ${clip1}%, ${clip2}% ${clip2}%, ${clip1}% ${clip2}%)`;

  const opacity = useTransform(
    scrollY,
    [SECTION_HEIGH, SECTION_HEIGH + 500],
    [1, 0]
  );

  const backgroundSize = useTransform(
    scrollY,
    [0, SECTION_HEIGH + 500],
    ['170%', '100%']
  );

  return (
    <motion.div
      className='sticky top-0 h-screen w-full'
      style={{
        opacity,
        backgroundSize,
        clipPath,
        backgroundImage:
          'url(https://images.unsplash.com/photo-1460186136353-977e9d6085a1?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    />
  );
}
