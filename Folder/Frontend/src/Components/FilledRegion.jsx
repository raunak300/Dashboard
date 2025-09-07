import React, { useState } from "react";

const FilledRegion = ({ updateRegion }) => {
  const [selected, setSelected] = useState(false);
  const [chosen, setChosen] = useState("");

  return (
    <div className="p-4 border-2 rounded-lg bg-gray-50 shadow-md">
      <div className="flex justify-between items-center mb-3">
        <h2 className="text-lg font-semibold">Analytics</h2>
        <button
          onClick={updateRegion} // call the function directly
          className="px-2 py-1 text-sm bg-red-500 text-white rounded hover:bg-red-600"
        >
          X
        </button>
      </div>

      <div>
        {!selected ? (
          <div className="space-y-2">
            <p className="text-sm font-medium">Select a Graph</p>
            <div className="flex gap-2">
              <select
                value={chosen}
                onChange={(e) => setChosen(e.target.value)}
                className="border border-gray-300 rounded px-2 py-1 flex-1"
              >
                <option value="">-- Choose --</option>
                <option value="Bar Graph">Bar Graph</option>
                <option value="Pie Chart">Pie Chart</option>
                <option value="Line Chart">Line Chart</option>
              </select>
              <button
                onClick={() => setSelected(true)}
                disabled={!chosen}
                className="px-3 py-1 bg-blue-500 text-white text-sm rounded hover:bg-blue-600 disabled:bg-gray-300"
              >
                Apply
              </button>
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-center h-32 bg-white border rounded">
            <p className="text-gray-700">Showing: <b>{chosen}</b></p>
          </div>
        )}
      </div>
    </div>
  );
};

export default FilledRegion;
