import React, { useEffect, useState } from "react";
import ProgressBar from "./Components/ProgressBar";

function App() {
  const [value, setValue] = useState(2);

  useEffect(() => {
    const interval = setInterval(() => {
      setValue((prevValue) => (prevValue >= 100 ? 100 : prevValue + 1));
    }, 300);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-screen h-screen overflow-hidden flex justify-center items-center">
      <div className="w-11/12 sm:w-8/12 md:w-6/12">
        <h1 className="text-center text-3xl mb-6 animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent font-black">
          Progress bar
        </h1>
        <ProgressBar value={value} />
        <h2 className="text-center">
          {value !== 100 ? (
            <>
              Loading<span className="dotty text-white 1s ease-in"></span>
            </>
          ) : (
            "Completed"
          )}
        </h2>
      </div>
    </div>
  );
}

export default App;
