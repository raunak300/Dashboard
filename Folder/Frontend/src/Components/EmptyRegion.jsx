import React from "react";
import { BarChart3 } from "lucide-react";

const EmptyRegion = ({ onClick }) => {
  return (
    <div
      onClick={onClick}
      className="flex flex-col items-center justify-center w-96 h-96 p-8 border-2 border-gray-200 rounded-3xl text-gray-500 bg-gradient-to-br from-white/80 to-gray-100/90 backdrop-blur-sm shadow-lg hover:shadow-2xl hover:scale-[1.03] cursor-pointer transition-all duration-300 ease-in-out"
    >
      <div className="flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 border border-gray-300 shadow-inner mb-6">
        <BarChart3 size={52} className="text-gray-400" />
      </div>
      <p className="text-xl font-semibold text-center text-gray-700">
        No graph data available
      </p>
      <p className="text-sm text-gray-500 mt-3">Click to add a graph</p>
    </div>
  );
};

export default EmptyRegion;