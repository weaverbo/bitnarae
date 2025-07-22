import { motion } from "framer-motion";

export default function SlideUpFade({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <>
      <div className="overflow-hidden h-[59px]">
        <motion.div className={className} initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8, ease: "easeOut" }}>
          {children}
        </motion.div>
      </div>
    </>
  );
}
