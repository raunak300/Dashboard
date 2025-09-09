import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const CustomLineChart = ({ fields = [], data1 = [], data2 = [], selecteddata }) => {
  // pick dataset based on selecteddata
  const dataset = selecteddata === "data1" ? data1 : data2;

  if (!dataset?.length || fields.length === 0) {
    return (
      <div className="flex items-center justify-center w-full h-64 text-gray-500">
        No fields selected for Line Chart
      </div>
    );
  }

  // always use "day" as x-axis
  const xAxisKey = "day";

  // remove "day" if user accidentally selects it
  const numericFields = fields.filter((f) => f !== xAxisKey);

  return (
    <div className="w-full h-96">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={dataset}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
          <XAxis dataKey={xAxisKey} />
          <YAxis />
          <Tooltip />
          <Legend />
          {numericFields.map((field, idx) => (
            <Line
              key={idx}
              type="monotone"
              dataKey={field}
              stroke={`hsl(${(idx * 60) % 360}, 70%, 50%)`}
              strokeWidth={2}
              dot={{ r: 3 }}
              activeDot={{ r: 6 }}
            />
          ))}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CustomLineChart;
