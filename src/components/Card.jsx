import React from "react";

function Card({ children, onClick = (f) => f }) {
  return (
    <div
      onClick={onClick}
      className="bg-white/5 hover:bg-white/10 min-h-[8rem] rounded-md text-white/70 group p-4 flex gap-1 flex-col cursor-pointer"
    >
      {children}
    </div>
  );
}

export default Card;
