import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import "./chart.scss";

const data = [
  { name: "January", total: 1200 },
  { name: "February", total: 1000 },
  { name: "March", total: 2100 },
  { name: "April", total: 900 },
  { name: "May", total: 1700 },
  { name: "June", total: 1300 },
  { name: "July", total: 1900 },
  { name: "August", total: 2000 },
  { name: "September", total: 700 },
  { name: "October", total: 2200 },
  { name: "November", total: 1100 },
  { name: "December", total: 1000 },
];

const Chart = () => {
  return (
    <div className='chart'>
      <div className="title">Last 12 months (Revenue)</div>
      <ResponsiveContainer width="100%" aspect={2 / 1}>
        <AreaChart width={730} height={250} data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#07b" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#07b" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" stroke="#aaa" allowDataOverflow="true" />
          <CartesianGrid strokeDasharray="3 3" className="chartGrid" />
          <Tooltip />
          <Area type="monotone" dataKey="total" stroke="#07b" fillOpacity={1} fill="url(#total)" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Chart