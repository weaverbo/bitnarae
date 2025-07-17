import { motion } from "framer-motion";

export default function SlideLeftFade({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <>
      <div className="overflow-hidden">
        <motion.div className={className} initial={{ x: -520, opacity: 1 }} animate={{ x: 0 }} transition={{ duration: 0.6, ease: "easeOut" }}>
          {children}
        </motion.div>
      </div>
    </>
  );
}
