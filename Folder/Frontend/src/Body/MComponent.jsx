import React, { useState } from "react";
import EmptyRegion from "../Components/EmptyRegion";
import FilledRegion from "../Components/FilledRegion";

const MComponent = ({ data1, data2 }) => {
  const [region, setRegion] = useState(Array(9).fill(false));
  const [selectedtypes1, setselectedtypes1] = useState("");
  const [selectedtypes2, setselectedtypes2] = useState("");

  const updateRegion = (index, value) => {
    const temp = [...region];
    temp[index] = value;
    setRegion(temp);
    console.log("Region state:", temp);
  };

  return (
    <div className="p-8 space-y-10 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl shadow-inner">
      {/* Region 1 */}
      <div className="flex flex-col space-y-4">
        {/* Header */}
        <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow border border-gray-200">
          <input
            type="text"
            value="Dashboard Region-1"
            readOnly
            className="px-3 py-2 rounded-md border border-gray-300 bg-gray-50 font-semibold text-gray-700"
          />
          <label htmlFor="dataSelect1" className="text-sm font-medium text-gray-600">
            Select Data:
          </label>
          <select
            id="dataSelect1"
            className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            onChange={(e) => setselectedtypes1(e.target.value)}
          >
            <option value="">Data Options</option>
            <option value="data1">Data 1</option>
            <option value="data2">Data 2</option>
          </select>
          <button className="px-4 py-2 bg-blue-500 text-white rounded-lg text-sm font-medium shadow-sm hover:bg-blue-600 active:scale-95 transition">
            Apply
          </button>
        </div>

        {/* Region 1 grid */}
        <div className="flex flex-row justify-around gap-6">
          {!region[0] ? (
            <EmptyRegion onClick={() => updateRegion(0, true)} />
          ) : (
            <FilledRegion updateRegion={() => updateRegion(0, false)} data1={data1} data2={data2} selecteddata={selectedtypes1} />
          )}
          {!region[1] ? (
            <EmptyRegion onClick={() => updateRegion(1, true)} />
          ) : (
            <FilledRegion updateRegion={() => updateRegion(1, false)} data1={data1} data2={data2} selecteddata={selectedtypes1} />
          )}
          {!region[2] ? (
            <EmptyRegion onClick={() => updateRegion(2, true)} />
          ) : (
            <FilledRegion updateRegion={() => updateRegion(2, false)} data1={data1} data2={data2} selecteddata={selectedtypes1} />
          )}
        </div>
      </div>

      {/* Region 2 */}
      <div className="flex flex-col space-y-4">
        {/* Header */}
        <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow border border-gray-200">
          <input
            type="text"
            value="Dashboard Region-2"
            readOnly
            className="px-3 py-2 rounded-md border border-gray-300 bg-gray-50 font-semibold text-gray-700"
          />
          <label htmlFor="dataSelect2" className="text-sm font-medium text-gray-600">
            Select Data:
          </label>
          <select
            id="dataSelect2"
            className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            onChange={(e) => setselectedtypes2(e.target.value)}
          >
            <option value="">Data Options</option>
            <option value="data1">Data 1</option>
            <option value="data2">Data 2</option>
          </select>
          <button className="px-4 py-2 bg-blue-500 text-white rounded-lg text-sm font-medium shadow-sm hover:bg-blue-600 active:scale-95 transition">
            Apply
          </button>
        </div>

        {/* Region 2 grid */}
        <div className="flex flex-row justify-around gap-6">
          {!region[3] ? (
            <EmptyRegion onClick={() => updateRegion(3, true)} />
          ) : (
            <FilledRegion updateRegion={() => updateRegion(3, false)} data1={data1} data2={data2} selecteddata={selectedtypes2} />
          )}
          {!region[4] ? (
            <EmptyRegion onClick={() => updateRegion(4, true)} />
          ) : (
            <FilledRegion updateRegion={() => updateRegion(4, false)} data1={data1} data2={data2} selecteddata={selectedtypes2} />
          )}
          {!region[5] ? (
            <EmptyRegion onClick={() => updateRegion(5, true)} />
          ) : (
            <FilledRegion updateRegion={() => updateRegion(5, false)} data1={data1} data2={data2} selecteddata={selectedtypes2} />
          )}
        </div>
      </div>

      {/* Add Data Section */}
      <div className="flex flex-col space-y-4">
        <h2 className="text-lg font-bold text-gray-800">➕ Add Data to Visualize</h2>
        <div className="flex flex-row justify-around gap-6">
          {!region[6] ? (
            <EmptyRegion onClick={() => updateRegion(6, true)} />
          ) : (
            <FilledRegion updateRegion={() => updateRegion(6, false)} />
          )}
          {!region[7] ? (
            <EmptyRegion onClick={() => updateRegion(7, true)} />
          ) : (
            <FilledRegion updateRegion={() => updateRegion(7, false)} />
          )}
          {!region[8] ? (
            <EmptyRegion onClick={() => updateRegion(8, true)} />
          ) : (
            <FilledRegion updateRegion={() => updateRegion(8, false)} />
          )}
        </div>
      </div>
    </div>
  );
};

export default MComponent;