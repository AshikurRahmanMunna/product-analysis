import React from "react";
import Chart1 from "../Chart1/Chart1";
import Chart2 from "../Chart2/Chart2";
import Chart3 from "../Chart3/Chart3";
import Chart4 from "../Chart4/Chart4";

const Dashboard = () => {
  return (
    <div className="grid grid-cols-2">
      <Chart1></Chart1>
      <Chart2></Chart2>
      <Chart3></Chart3>
      <Chart4></Chart4>
    </div>
  );
};

export default Dashboard;
