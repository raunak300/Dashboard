import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const FilledRegion = ({ updateRegion, data1, data2, selecteddata }) => {
  const [selected, setSelected] = useState(false);
  const [chosen, setChosen] = useState("");
  const [params1, setParams1] = useState([]);
  const [params2, setParams2] = useState([]);

  useEffect(() => {
    if (data1?.length) setParams1(Object.keys(data1[0]));
    if (data2?.length) setParams2(Object.keys(data2[0]));
  }, [data1, data2]);

  const renderCheckboxes = (params) => (
    <div className="grid grid-cols-2 gap-2 mt-3">
      {params.map((para, idx) => (
        <label
          key={idx}
          className="flex items-center gap-2 p-2 rounded-lg border border-gray-200 hover:bg-gray-50 cursor-pointer transition"
        >
          <input type="checkbox" value={para} className="w-4 h-4 text-blue-600 rounded focus:ring-blue-400" />
          <span className="text-sm text-gray-700">{para}</span>
        </label>
      ))}
    </div>
  );

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      className="w-full max-w-md"
    >
      <div className="shadow-lg border-2 border-gray-100 rounded-2xl bg-white p-6 flex flex-col gap-4">
        {/* Header */}
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold text-gray-800 flex items-center gap-2">📊 Analytics</h2>
          <button
            onClick={updateRegion}
            className="px-3 py-1 text-sm bg-red-500 text-white rounded-lg hover:bg-red-600 active:scale-95 shadow-sm transition"
          >
            ✕
          </button>
        </div>

        {/* Body */}
        {!selected ? (
          <>
            <p className="text-sm font-medium text-gray-700">Select a Graph</p>

            {/* Graph Selector */}
            <select
              value={chosen}
              onChange={(e) => setChosen(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            >
              <option value="">-- Choose --</option>
              <option value="Bar Graph">📊 Bar Graph</option>
              <option value="Pie Chart">🥧 Pie Chart</option>
              <option value="Line Chart">📈 Line Chart</option>
            </select>

            {/* Parameters */}
            {chosen && selecteddata === "data1" && renderCheckboxes(params1)}
            {chosen && selecteddata === "data2" && renderCheckboxes(params2)}

            {/* Apply Button */}
            <button
              onClick={() => setSelected(true)}
              disabled={!chosen}
              className="mt-4 w-full px-4 py-2 bg-blue-500 text-white text-sm font-medium rounded-lg hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed active:scale-95 shadow-sm transition"
            >
              Apply
            </button>
          </>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center justify-center h-40 border-2 border-dashed border-gray-300 rounded-xl bg-gray-50"
          >
            <p className="text-gray-700 text-lg">
              Showing: <b className="text-blue-600">{chosen}</b>
            </p>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default FilledRegion;