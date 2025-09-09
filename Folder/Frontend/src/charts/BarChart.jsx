import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const BarChart = ({ fields = [], data1 = [], data2 = [], selecteddata }) => {
  // pick dataset based on selecteddata
  const dataset = selecteddata === "data1" ? data1 : data2;

  if (!dataset?.length || fields.length === 0) {
    return (
      <div className="flex items-center justify-center w-full h-64 text-gray-500">
        No fields selected for Bar Chart
      </div>
    );
  }

  return (
    <div className="w-full h-96">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={dataset}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
          <XAxis dataKey={Object.keys(dataset[0])[0]} /> {/* first key as X-axis */}
          <YAxis />
          <Tooltip />
          <Legend />
          {fields.map((field, idx) => (
            <Bar
              key={idx}
              dataKey={field}
              fill={`hsl(${(idx * 60) % 360}, 70%, 50%)`} // generate different colors
              radius={[6, 6, 0, 0]}
            />
          ))}
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BarChart;
