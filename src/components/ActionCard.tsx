import React from "react";

const ActionCard: React.FC = () => {
  return (
    <div className="w-full max-w-lg bg-gradient-to-b from-[#071022]/60 to-[#06101f]/60 
backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-lg">

      
      <h4 className="text-sm text-zinc-200 mb-2">Become a Distributor</h4>
      <p className="text-xs text-zinc-400 mb-4">
        Join our network and help distribute funds transparently to those in need.
      </p>

      <button className="w-full py-3 rounded-lg text-white font-semibold bg-gradient-to-r from-sky-500 to-blue-600 shadow-md">
        Set up a Campaign
      </button>
    </div>
  );
};

export default ActionCard;
