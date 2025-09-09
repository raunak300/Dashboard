import React from "react";
import {
  PieChart as RePieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

// Some default colors
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#AF19FF"];

const PieChart = ({ fields, data1, data2, selecteddata }) => {
  // Pick which dataset to use
  const data = selecteddata === "data1" ? data1 : data2;

  // Convert dataset into format usable by recharts
  const chartData = fields.map((field) => ({
    name: field,
    value: data.reduce((sum, row) => sum + (Number(row[field]) || 0), 0),
  }));

  return (
    <ResponsiveContainer width="100%" height="100%">
      <RePieChart>
        <Pie
          data={chartData}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius="80%"
          label
        >
          {chartData.map((_, idx) => (
            <Cell key={`cell-${idx}`} fill={COLORS[idx % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </RePieChart>
    </ResponsiveContainer>
  );
};

export default PieChart;
