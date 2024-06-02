import React from "react";

const Loading = () => {
  return (
    <div className="absolute flex items-center justify-center w-full h-full bg-white bg-opacity-60 z-10">
      <div
        className="inline-block h-10 w-10 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] text-blue-600"
        role="status"
      />
    </div>
  );
};

export default Loading;
