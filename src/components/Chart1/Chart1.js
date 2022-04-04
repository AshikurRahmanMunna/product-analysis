import React from "react";
import { Legend, Line, LineChart, Tooltip, XAxis, YAxis } from "recharts";
import useChart from "../../hooks/useChart";

const Chart1 = () => {
  const [chart, setChart] = useChart();
  return (
    <div className="mx-auto">
      <h3 className="text-3xl text-blue-600">Month Wise Sell</h3>
      <LineChart
        width={500}
        height={250}
        data={chart}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <XAxis dataKey="month" />
        <YAxis dataKey="sell"/>
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="sell" stroke="#8884d8" />
      </LineChart>
    </div>
  );
};

export default Chart1;
