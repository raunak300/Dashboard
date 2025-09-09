import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import PieChart from "../charts/PieChart";
import BarChart from "../charts/Barchart";
import LineChart from "../charts/LineChart";

const FilledRegion = ({ updateRegion, data1, data2, selecteddata }) => {
  const [selected, setSelected] = useState(false);
  const [chosen, setChosen] = useState("");
  const [params1, setParams1] = useState([]);
  const [params2, setParams2] = useState([]);
  const [selectedChart, setselectedChart] = useState([]);

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
          <input
            type="checkbox"
            value={para}
            className="w-4 h-4 text-blue-600 rounded focus:ring-blue-400"
            onChange={(e) => {
              if (e.target.checked) {
                setselectedChart([...selectedChart, para]);
              } else {
                setselectedChart(selectedChart.filter((item) => item !== para));
              }
            }}
          />
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
      className="w-full max-w-2xl"
    >
      <div className="shadow-lg border-2 border-gray-100 rounded-2xl bg-white p-6 flex flex-col gap-4">
        {/* Header */}
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
            📊 Analytics
          </h2>
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

            <select
              value={chosen}
              onChange={(e) => setChosen(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            >
              <option value="">-- Choose --</option>
              <option value="Bar Graph">📊 Bar Graph</option>
              <option value="Pie Chart">🥧 Pie Chart</option>
              {/* <option value="Line Chart">📈 Line Chart</option> */}
            </select>

            {chosen && selecteddata === "data1" && renderCheckboxes(params1)}
            {chosen && selecteddata === "data2" && renderCheckboxes(params2)}

            <button
              onClick={() => setSelected(true)}
              disabled={!chosen || selectedChart.length === 0}
              className="mt-4 w-full px-4 py-2 bg-blue-500 text-white text-sm font-medium rounded-lg hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed active:scale-95 shadow-sm transition"
            >
              Apply
            </button>
          </>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="w-full h-96 border-2 border-dashed border-gray-300 rounded-xl bg-gray-50 p-4 flex items-center justify-center"
          >
            {chosen === "Pie Chart" && (
              <PieChart
                fields={selectedChart}
                data1={data1}
                data2={data2}
                selecteddata={selecteddata}
              />
            )}
            {chosen === "Bar Graph" && (
              <BarChart
                fields={selectedChart}
                data1={data1}
                data2={data2}
                selecteddata={selecteddata}
              />
            )}
            {/* {chosen === "Line Chart" && (
              <LineChart
                fields={selectedChart}
                data1={data1}
                data2={data2}
                selecteddata={selecteddata}
              />
            )} */}
          </motion.div>
        )}

        {selected && (
          <button
            onClick={() => setSelected(false)}
            className="mt-3 px-4 py-2 bg-gray-200 text-sm rounded-lg hover:bg-gray-300 transition"
          >
            🔙 Back
          </button>
        )}
      </div>
    </motion.div>
  );
};

export default FilledRegion;
