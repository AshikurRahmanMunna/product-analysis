import React from "react";
import { Legend, Pie, PieChart, Tooltip } from "recharts";
import useChart from "../../hooks/useChart";

const Chart4 = () => {
  const [chart, setChart] = useChart();
  return (
    <div className="mx-auto">
        <h3 className="text-3xl text-blue-600">Investment VS Revenue</h3>
      <PieChart width={500} height={250}>
        <Pie
          data={chart}
          dataKey="investment"
          cx="50%"
          cy="50%"
          outerRadius={60}
          fill="#8884d8"
        />
        <Pie
          data={chart}
          dataKey="revenue"
          cx="50%"
          cy="50%"
          innerRadius={70}
          outerRadius={90}
          fill="#82ca9d"
          label
        />
      </PieChart>
    </div>
  );
};

export default Chart4;
