import React from "react";

function DevIcon({ src, name, value, years = 0 }) {
  const getProgress = () => {
    switch (value) {
      case 90:
        return "group-hover:animate-progress90";
      case 80:
        return "group-hover:animate-progress80";
      case 70:
        return "group-hover:animate-progress70";
    }
  };
  // ${getProgress()}  hover:bg-[radial-gradient(closest-side,_#121212_89%,_transparent_90%_100%),conic-gradient(#33AEA2_calc(var(--init-value)_*_1%),_#33AEA222_0)] rounded-[50%]
  return (
    <div
      className={`w-full  h-[3rem]  flex items-center lg:justify-start gap-2 group  text-less-important select-none  `}
    >
      <img className="w-[2.5rem]  h-fit  rounded-md " src={src} />
      <div className="w-[2px] h-[0rem] bg-important group-hover:h-3/5 group-hover:animate-buildHight" />
      <div className="h-fit w-fit flex flex-col gap-1">
        <span className="group-hover:text-important transition-colors ">
          {name}
        </span>
        <div className="flex gap-2 items-center">
          <div
            className={`h-[0.5rem] w-[3rem] invisible group-hover:visible  rounded-full ${getProgress()} bg-[linear-gradient(to_right,#33AEA2_calc(var(--init-value)_*_1%),_#33AEA277_0)]`}
          ></div>
          <div className="invisible group-hover:visible text-sm  text-important   ">
            {years !== 0 && `${years}y`}
          </div>
        </div>
      </div>
      <div className="w-fit h-full flex justify-center items-center "></div>
    </div>
  );
}

export default DevIcon;
