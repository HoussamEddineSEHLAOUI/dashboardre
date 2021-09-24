import React from "react";


import { Line } from "react-chartjs-2";

const data = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      label: "First dataset",
      data: [30, 21, 8, 1, 49, 65],
      fill: true,
      backgroundColor: "rgba(75,192,192,0.2)",
      borderColor: "rgba(75,192,192,1)"
    },
    {
      label: "Second dataset",
      data: [30, 21, 52, 12, 35, 6],
      fill: false,
      borderColor: "#742774"
    }
  ]
};

export default function Graph5() {
  return (
    <div className="App">
      <Line data={data} />
    </div>
  );
}
