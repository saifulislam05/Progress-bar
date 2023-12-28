
import React from "react";
import ProgressBar from "./Components/ProgressBar";


function App() {

  return (
    <div className="w-screen h-screen overflow-hidden flex justify-center items-center">
      <div className="w-11/12 sm:w-8/12 md:w-6/12">
        <h1 className="text-center text-3xl mb-6 animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent font-black">
          Progress bar
        </h1>
        <ProgressBar />
        <h2 className="text-center">Loading<span className="animate-dotty text-white 1s ease-in"></span></h2>
      </div>
    </div>
  );
}

export default App;
