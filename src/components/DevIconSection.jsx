import React from "react";

function DevIconSection({ title, children }) {
  return (
    <div className="w-full h-fit flex flex-col gap-4 bg-primary/20 hover:bg-primary/30 shadow shadow-primary/20 rounded-md p-4 items-center">
      <h1 className="w-full text-start text-highlighted text-xl">{title}</h1>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {children}
      </div>
    </div>
  );
}

export default DevIconSection;
