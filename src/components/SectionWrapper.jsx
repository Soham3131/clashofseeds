import { motion } from "framer-motion";
import clsx from "clsx";

const SectionWrapper = ({ children, id, className }) => {
  return (
    <section
      id={id}
      className={clsx(
        "relative py-28 px-6 max-w-7xl mx-auto",
        className
      )}
    >
      {/* Background glow */}
      <div className="absolute inset-0 flex justify-center pointer-events-none">
        <div className="w-[500px] h-[500px] bg-green-500/10 blur-[140px] rounded-full" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative z-10"
      >
        {children}
      </motion.div>
    </section>
  );
};

export default SectionWrapper;
