import React from "react";

function Certificate({ logoUrl = "", url = "", text = "" }) {
  const handleClick = () => {
    if (url !== "") {
      window.open(url, "_blank");
    }
  };
  return (
    <div className={`flex gap-1 items-center  `}>
      <img src={logoUrl} alt="" className="rounded-[35%] w-[2rem] h-[2rem]" />
      <div className="w-[2px] h-[1.5rem] bg-less-important mx-1"></div>
      <div
        className={url && `hover:text-important cursor-pointer`}
        onClick={handleClick}
      >
        {text}
      </div>
    </div>
  );
}

export default Certificate;
