import { motion, useScroll } from 'motion/react';

export default function Scroll() {
  const { scrollYProgress } = useScroll();
  console.log(scrollYProgress);

  return (
    <motion.div style={{ scaleX: scrollYProgress }}>
      <motion.div className="size-[100px] bg-amber-500" />
    </motion.div>
  );
}
