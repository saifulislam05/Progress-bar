import React from "react";

const ProgressBar = ({ value }) => {
  const progressBarStyle = {
    width: `${value}%`,
  };

  return (
    <div className="w-full mb-5 h-5 overflow-hidden rounded-full bg-gray-200">
      <div
        style={progressBarStyle}
        className="h-5 animate-pulse rounded-full bg-gradient-to-r from-green-500 to-blue-500 flex justify-center items-center"
      >
        <h2 className="text-white text-sm text-center m-0 p-0">{value}%</h2>
      </div>
    </div>
  );
};

export default ProgressBar;
