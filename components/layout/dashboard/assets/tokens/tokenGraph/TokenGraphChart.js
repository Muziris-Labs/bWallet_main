"use clients";

import {
  AreaChart,
  Area,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  XAxis,
} from "recharts";

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const TokenTooltip = ({ tokenData }) => {
  return (
    <div className="prevent-select rounded-md bg-black/60 p-2 text-gray-400 shadow-md">
      <p className="text-sm font-bold text-white">{tokenData.tokenName}</p>
      <p className="text-sm">
        Price: <span className="text-white">${tokenData.price}</span>
      </p>
    </div>
  );
};

const TokenGraphChart = ({ time, tokenData }) => {
  return (
    <div className="h-80">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <defs>
            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#FB96FF" stopOpacity={0.6} />
              <stop offset="95%" stopColor="#FB96FF" stopOpacity={0.05} />
            </linearGradient>
          </defs>

          <CartesianGrid strokeDasharray="2 2" strokeOpacity={0.1} />
          <Tooltip content={<TokenTooltip tokenData={tokenData} />} />

          <XAxis dataKey="name" fontSize={12} />
          <YAxis fontSize={12} />

          <Area
            type="monotone"
            dataKey="uv"
            stroke="#FB96FF"
            fillOpacity={0.6}
            fill="url(#colorPv)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TokenGraphChart;
