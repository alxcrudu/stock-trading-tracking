import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
// import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function LineChartComponent() {
  const dataa = [
    { name: "Jan", uv: 35 },
    { name: "Feb", uv: 42.7 },
    { name: "Mar", uv: 31.2 },
    { name: "Apr", uv: 25.1 },
    { name: "Jun", uv: 37.3 },
    { name: "Jul", uv: 23.6 },
  ];

  const data = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
      "Jan",
    ],
    datasets: [
      {
        label: "Price",
        data: [8, 7, 8, 6, 9, 7, 5, 6, 10, 8, 11, 12],
        backgroundColor: "transparent",
        borderColor: "black",
        tension: "0.4",
      },
    ],
  };

  const options = {
    responsive: true,
    data,
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        min: 2,
        max: 18,
        borderDash: [10],
        grid: {
          borderDash: [10],
          color: "rgba(0,0,0,.1)",
        },
        // ticks: {
        //   display: false
        // }
      },
    },
    plugins: {
      legend: false,
      title: {
        display: true,
        // text: "Price history",
      },
      tooltip: {
        cornerRadius: 20,
        padding: 10,
        boxWidth: 50,
        backgroundColor: "black",
      },
    },
  };

  // const CustomTooltip = ({ active, payload, label }) => {
  //   if (active && payload && payload.length) {
  //     return (
  //       <div className="custom-tooltip | bg-black border-none text-white px-3 rounded-full">
  //         <p className="label">{`${label} : ${payload[0].value}`}</p>
  //         <p className="intro">Price:</p>
  //         {/* <p className="desc">Anything you want can be displayed here.</p> */}
  //       </div>
  //     );
  //   }};

  return (
    <div>
      <Line data={data} options={options} />
      {/* <LineChart
        width={600}
        height={300}
        data={dataa}
        margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
      >
        <Line type="monotone" dataKey="uv" stroke="#000000" activeDot={{ r: 8 }} />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip content={<CustomTooltip />} />
      </LineChart> */}
    </div>
  );
}
