import React from "react";
import LTD from "./LTD";

function LightScreen({ children, withFadeToDark = true }) {
  return (
    <div className="w-full min-h-screen h-fit bg-dark/95">
      {children}
      {/* {withFadeToDark && <LTD />} */}
    </div>
  );
}

export default LightScreen;
