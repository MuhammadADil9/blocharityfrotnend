import React, { useState } from "react";
import Diamond from "./Diamond";

const CampaignCard: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="w-full max-w-lg bg-gradient-to-b from-[#0b1020]/60 to-[#081125]/60 
backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-neon">

      <div className="flex items-center gap-3 mb-4">
        <div className="w-12 h-12 rounded-full bg-pink-500/80 flex items-center justify-center text-white font-semibold">
          SJ
        </div>
        <div>
          <div className="text-sm text-zinc-300">Sarah Johnson</div>
          <div className="text-xs text-emerald-300">Verified Distributor</div>
        </div>
      </div>

      <h3 className="text-sm text-indigo-200 font-semibold mb-2">Educational Crisis</h3>
      <p className="text-xs text-zinc-400 mb-3">
        Help us provide quality education to underprivileged children in remote areas.
      </p>

      <div className="flex justify-between items-center text-xs text-zinc-400 mb-2">
        <span className="flex items-center gap-2">🇵🇰 Pakistan</span>
        <span>70% Funded</span>
      </div>

      <div className="w-full bg-white/6 rounded-full h-3 overflow-hidden mb-4">
        <div
          className="h-full rounded-full"
          style={{ width: "70%", background: "linear-gradient(90deg,#ff4db8,#7c3aed)" }}
        />
      </div>

     <div className="relative w-full flex justify-between items-center mb-6 mt-2">

  {/* ---- Connector Line Behind Diamonds ---- */}
  <div className="absolute left-0 right-0 h-[3px] bg-gray-700/50 top-1/2 -translate-y-1/2 z-0" />

  {/* ---- Diamonds Render Here ---- */}
  {Array.from({ length: 5 }).map((_, i) => (
    <div key={i} className="relative z-10">
      <Diamond
        index={i}
        active={i <= activeIndex}
        onClick={(idx) => setActiveIndex(idx)}
      />
    </div>
  ))}

</div>

      <button className="w-full py-3 rounded-lg text-white font-semibold bg-gradient-to-r from-pink-500 to-violet-600 shadow-lg">
        Donate
      </button>
    </div>
  );
};

export default CampaignCard;
