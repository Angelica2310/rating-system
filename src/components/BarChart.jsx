"use client";

import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function BarChart({ data }) {
  // if (!data || data.length === 0) {
  //   return <p>No data available to display the chart.</p>;
  // }

  const labels = data.map((row) => row.brand_name);

  const values = data.map((row) => row.rating);

  const chartData = {
    labels,
    datasets: [
      {
        label: "Rates",
        data: values,
        backgroundColor: "#3581b8",
        borderColor: "#f3f8f2",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: "top" },
      title: { display: true, text: "Rate Data" },
    },
    scales: {
      x: { type: "category" }, // Use the "category" scale for the x-axis
      y: { type: "linear" }, // Use the "linear" scale for the y-axis
    },
  };

  return (
    <div className="w-full max-w-lg mx-auto">
      {chartData ? (
        <Bar
          data={chartData}
          options={{
            responsive: true,
            plugins: {
              legend: { position: "top" },
              title: { display: true, text: "Rate Data" },
            },
          }}
        />
      ) : (
        <p>Loading chart...</p>
      )}
    </div>
  );
}
