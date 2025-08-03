import React, { useState } from "react";
import DragAndDrop from "../DragAndDrop/DragAndDrop";
import DragImage from "../DragImage/DragImage";
import NastedComment from "../NastedComment/NastedComment";

const Home = () => {
  const [activeComponent, setActiveComponent] = useState("");

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white flex flex-col items-center pt-10 px-6 space-y-8">
      {/* Title and Buttons Box */}
      <div className="w-full max-w-6xl bg-white shadow-xl rounded-2xl p-10 space-y-6 border">
        <h1 className="text-3xl font-bold text-center text-black">
          React JS: Some Technical Terms and Simple Projects
        </h1>

        <div className="flex justify-center flex-wrap gap-4">
          <button
            className={`px-6 py-3 rounded-lg text-sm font-medium transition border ${
              activeComponent === "drag"
                ? "bg-gray-800 text-white border-gray-300"
                : "bg-white text-gray-800 border-gray-300 hover:bg-gray-100"
            }`}
            onClick={() => setActiveComponent("drag")}
          >
            Drag & Drop
          </button>

          <button
            className={`px-6 py-3 rounded-lg text-sm font-medium transition border ${
              activeComponent === "image"
                ? "bg-gray-800 text-white border-gray-300"
                : "bg-white text-gray-800 border-gray-300 hover:bg-gray-100"
            }`}
            onClick={() => setActiveComponent("image")}
          >
            Drag & Drop Image
          </button>

          <button
            className={`px-6 py-3 rounded-lg text-sm font-medium transition border ${
              activeComponent === "comment"
                ? "bg-gray-800 text-white border-gray-300"
                : "bg-white text-gray-800 border-gray-300 hover:bg-gray-100"
            }`}
            onClick={() => setActiveComponent("comment")}
          >
            Nested Comment
          </button>
        </div>
      </div>

      {/* Component Display Box */}
      <div
        className={`w-full max-w-6xl bg-white shadow-xl rounded-2xl p-10 border transition-all duration-300
        
         `}
      >
        {activeComponent === "drag" && <DragAndDrop />}
        {activeComponent === "image" && <DragImage />}
        {activeComponent === "comment" && <NastedComment />}
      </div>
    </div>
  );
};

export default Home;
