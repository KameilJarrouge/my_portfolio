import React from "react";

function CardTitle({ children }) {
  return (
    <div className="w-fit text-white/80  font-bold text-base border-b-[2px] border-b-transparent group-hover:text-white group-hover:border-b-white transition-colors">
      {children}
    </div>
  );
}

export default CardTitle;
