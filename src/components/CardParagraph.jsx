import React from "react";

function CardParagraph({ children }) {
  return (
    <div className="px-1 text-justify text-sm group-hover:text-white/90">
      {children}
    </div>
  );
}

export default CardParagraph;
