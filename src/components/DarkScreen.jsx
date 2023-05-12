import React from "react";
import DTL from "./DTL";

function DarkScreen({ children, withFadeToLight = true }) {
  return (
    <div className="w-full h-fit">
      {children}
      {/* {withFadeToLight && <DTL />} */}
    </div>
  );
}

export default DarkScreen;
