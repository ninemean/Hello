import React, { ReactNode } from "react";
import { motion, Variants } from "framer-motion";

interface TabButtonProps {
  active: boolean;
  selectTab: () => void;
  children: ReactNode;
}

const variants: Variants = {
  default: { width: 0 },
  active: { width: "calc(100% - 0.75rem)" },
};

const TabButton: React.FC<TabButtonProps> = ({ active, selectTab, children }) => {
  const buttonClasses = active ? "" : "text-[#ADB7BE]";

  return (
    <button onClick={selectTab}>
      <p className={`mr-3 font-semibold hover:opacity-40 ${buttonClasses}`}>
        {children}
      </p>
      <motion.div
  animate={active ? "active" : "default"}
  variants={variants}
  style={{ 
    width: active ? "calc(100% - 0.75rem)" : 0,
    backgroundColor: active ? "#ADB7BE" : "transparent",
    opacity: active ? 0.8 : 1, 
  }}
  className="h-1 mt-2 mr-3"
></motion.div>

    </button>
  );
};

export default TabButton;
