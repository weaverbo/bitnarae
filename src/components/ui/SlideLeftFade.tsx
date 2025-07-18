import { motion } from "framer-motion";

export default function SlideLeftFade({ children, className = "", animationKey }: { children: React.ReactNode; className?: string; animationKey: number }) {
  return (
    <>
      <div className="overflow-hidden">
        <motion.div className={className} key={animationKey} initial={{ x: -520, opacity: 1 }} animate={{ x: 0 }} transition={{ duration: 0.8, ease: "easeOut" }}>
          {children}
        </motion.div>
      </div>
    </>
  );
}
