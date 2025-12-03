import React from "react";

type DiamondProps = {
  index: number;
  active: boolean;
  onClick?: (i: number) => void;
};

const Diamond: React.FC<DiamondProps> = ({ index, active, onClick }) => {
  return (
    <button
      aria-label={`Campaign phase ${index + 1}`}
      onClick={() => onClick?.(index)}
      className={`w-12 h-12 transform rotate-45 flex items-center justify-center 
        transition-all duration-300 rounded-md
        ${active 
          ? "bg-gradient-to-br from-pink-500 to-violet-500 shadow-lg scale-105"
          : "bg-gray-800/40 hover:bg-gray-700/60"
        }`}
      style={{ boxShadow: active ? "0 10px 30px rgba(168,85,247,0.32)" : "0 6px 18px rgba(2,6,23,0.6)" }}
    >
      <span className="-rotate-45 text-sm font-semibold text-white select-none">
        {index + 1}
      </span>
    </button>
  );
};

export default Diamond;
