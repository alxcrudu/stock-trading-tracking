import { CiSliderHorizontal } from "react-icons/ci";
import { SlArrowDown } from "react-icons/sl";
import { Dropdown, Space } from "antd";
import LineChartComponent from "../LineChartComponent";
import { btc, tsla, aapl } from "../../images";

const items = [
  {
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        1st menu item
      </a>
    ),
    key: "0",
  },
  {
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.aliyun.com"
      >
        2nd menu item
      </a>
    ),
    key: "1",
  },
  {
    type: "divider",
  },
  {
    label: "3rd menu item（disabled）",
    key: "3",
    disabled: true,
  },
];

export default function Dashboard() {
  const dummySellOrders = [
    {
      label: "Price",
      data: [89, 73, 72, 45, 92, 23, 53],
    },
    {
      label: "Amount",
      data: [0.15, 0.18, 0.11, 0.14, 0.19, 0.12, 0.13],
    },
    {
      label: "Total",
      data: [
        "$126,00",
        "$161,00",
        "$137,00",
        "$152,00",
        "$181,00",
        "$124,00",
        "$168,00",
      ],
    },
  ];
  return (
    <div className="dashboard | w-full">
      <div className="flex | justify-between mb-6">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <div className="filter | cursor-pointer py-1 px-3 rounded-xl">
          <Dropdown
            menu={{
              items,
            }}
            placement="bottomRight"
          >
            <button onClick={(e) => e.preventDefault()}>
              <Space>
                <p className="font-bold">Filters</p>
                <CiSliderHorizontal size={17} />
              </Space>
            </button>
          </Dropdown>
        </div>
      </div>
      <div className="popular | grid grid-cols-3 gap-6 mt-6 text-[#262626]">
        <div className="item | grid grid-cols-2 bg-[#EBFDEF] rounded-3xl p-6 gap-3">
          <div className="flex flex-col">
            <div
              className="popular-logo | flex items-center justify-center bg-[#262626] rounded-2xl py-4 px-4"
              style={{ width: "50px", height: "50px" }}
            >
              <img src={btc} alt="bitcoin logo" style={{ width: "15px" }} />
            </div>
            <h3 className="pt-1 pb-2 font-bold text-2xl mt-2">$20,995.30</h3>
            <p className="opacity-50 font-light">
              <span className="font-bold">45%</span> This week
            </p>
          </div>
          <div className="mini-line-chart | opacity-10">mini chart</div>
        </div>

        <div className="item | grid grid-cols-2 bg-[#E8EFF9] rounded-3xl p-6 gap-3">
          <div className="flex flex-col">
            <div
              className="popular-logo | flex items-center justify-center bg-[#262626] rounded-2xl"
              style={{ width: "50px", height: "50px" }}
            >
              <img src={tsla} alt="bitcoin logo" style={{ width: "38px" }} />
            </div>
            <h3 className="pt-1 pb-2 font-bold text-2xl mt-2">$127.17</h3>
            <p className="opacity-50 font-light">
              <span className="font-bold">-25%</span> This week
            </p>
          </div>
          <div className="mini-line-chart | opacity-10">mini chart</div>
        </div>

        <div className="item | grid grid-cols-2 bg-[#FFEFE7] rounded-3xl p-6 gap-3">
          <div className="flex flex-col">
            <div
              className="popular-logo | flex items-center justify-center bg-[#262626] rounded-2xl"
              style={{ width: "50px", height: "50px" }}
            >
              <img src={aapl} alt="bitcoin logo" style={{ width: "20px" }} />
            </div>
            <h3 className="pt-1 pb-2 font-bold text-2xl mt-2">$135.27</h3>
            <p className="opacity-50 font-light">
              <span className="font-bold">7%</span> This week
            </p>
          </div>
          <div className="mini-line-chart | opacity-10">mini chart</div>
        </div>
      </div>

      <div
        className="two-grid | grid gap-6 mt-12"
        style={{ gridTemplateColumns: "2fr 1fr" }}
      >
        <div>
          <div className="flex justify-between items-center">
          <div>
            <h2 className="text-xl font-bold">Market Overview</h2>
            <p className="text-xs opacity-50">Prices value updates</p>
          </div>
          <div className="filter | cursor-pointer py-1 px-3 rounded-xl">
            <Dropdown
              menu={{
                items,
              }}
              placement="bottomRight"
            >
              <button onClick={(e) => e.preventDefault()}>
                <Space>
                  <p className="font-medium opacity-50">Weekly (2023)</p>
                  <SlArrowDown size={13} />
                </Space>
              </button>
            </Dropdown>
          </div>
          </div>
          <LineChartComponent />
        </div>
        <div className="flex flex-col p-8 mt-16 bg-[#14121F] rounded-3xl text-white">
          <h3 className="pb-4 font-medium">Sell Orders</h3>
          <div className="data | flex justify-between">
            {dummySellOrders.map((category, i) => (
              <div key={i} className="category">
                <h3 className="text-sm">{category.label}</h3>
                <div className="content | flex flex-col gap-2 mt-6 font-light text-sm opacity-70">
                  {category.data.map((item, i) => (
                    <p key={i}>{item}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
          {/* <p className="text-xs opacity-50 font-light">
            Check your weekly transaction reports
          </p> */}
        </div>
      </div>
    </div>
  );
}
