import React from "react";
import { BarChart3 } from "lucide-react";

const EmptyRegion = ({ onClick }) => {
    return (
        <div className="flex flex-col items-center justify-center w-80  h-80 sm:h-90 p-6 border-4 border-gray-300 rounded-xl text-gray-400 shadow-md hover:shadow-lg transition-all duration-200"
            onClick={onClick}
        >
            <BarChart3 size={64} className="mb-3 opacity-70" />
            <p className="text-base font-semibold text-center">
                No graph data available
            </p>
        </div>
    );
};

export default EmptyRegion;
