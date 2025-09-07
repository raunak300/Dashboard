import React, { useState } from "react";
import EmptyRegion from "../Components/EmptyRegion";
import FilledRegion from "../Components/FilledRegion";

const MComponent = () => {
  const [region, setRegion] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  const updateRegion = (index, value) => {
    const temp = [...region];
    temp[index] = value;
    setRegion(temp);
    console.log("Region state:", temp);
  };

  return (
    <div className="p-4 space-y-8">
      {/* Region 1 */}
      <div className="flex flex-col space-y-2">
        <div className="flex flex-row gap-5">
          <input type="text" value={"DashBoard Region-1"} readOnly />
          <label
            htmlFor="dataSelect"
            className="block mb-1 font-medium"
          >
            Select Data:
          </label>
          <select
            id="dataSelect"
            name="dataSelect"
            className="border border-gray-300 rounded px-2 py-1"
          >
            <option value="">Data Options</option>
            <option value="data1">Data 1</option>
            <option value="data2">Data 2</option>
          </select>
          <button>Apply</button>
        </div>
        <div className="flex flex-row justify-around gap-4">
          {!region[0] ? (
            <EmptyRegion onClick={() => updateRegion(0, true)} />
          ) : (
            <FilledRegion updateRegion={() => updateRegion(0, false)} />
          )}
          {!region[1] ? (
            <EmptyRegion onClick={() => updateRegion(1, true)} />
          ) : (
            <FilledRegion updateRegion={() => updateRegion(1, false)} />
          )}
          {!region[2] ? (
            <EmptyRegion onClick={() => updateRegion(2, true)} />
          ) : (
            <FilledRegion updateRegion={() => updateRegion(2, false)} />
          )}
        </div>
      </div>

      {/* Region 2 */}
      <div className="flex flex-col space-y-2">
        <input type="text" value={"DashBoard Region-2"} readOnly />
        <div className="flex flex-row justify-around gap-4">
          {!region[3] ? (
            <EmptyRegion onClick={() => updateRegion(3, true)} />
          ) : (
            <FilledRegion updateRegion={() => updateRegion(3, false)} />
          )}
          {!region[4] ? (
            <EmptyRegion onClick={() => updateRegion(4, true)} />
          ) : (
            <FilledRegion updateRegion={() => updateRegion(4, false)} />
          )}
          {!region[5] ? (
            <EmptyRegion onClick={() => updateRegion(5, true)} />
          ) : (
            <FilledRegion updateRegion={() => updateRegion(5, false)} />
          )}
        </div>
      </div>

      {/* Add Data Section */}
      <div className="flex flex-col space-y-2">
        <h2 className="text-lg font-semibold">Add Data to Visualize</h2>
        <div className="flex flex-row justify-around gap-4">
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
