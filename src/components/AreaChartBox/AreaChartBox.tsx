import './AreaChartBox.scss'
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
    {
      name: 'Sun',
      books: 4000,
      clothes: 2400,
      electronics: 2400,
    },
    {
      name: 'Mon',
      books: 3000,
      clothes: 900,
      electronics: 2900,
    },
    {
      name: 'Tue',
      books: 2000,
      clothes: 1000,
      electronics: 3000,
    },
    {
      name: 'Wed',
      books: 1700,
      clothes: 2000,
      electronics: 1100,
    },
    {
      name: 'Thu',
      books: 3000,
      clothes: 2100,
      electronics: 2400,
    },
    {
      name: 'Fri',
      books: 3500,
      clothes: 1400,
      electronics: 2100,
    },
    {
      name: 'Sat',
      books: 5000,
      clothes: 2000,
      electronics: 2000,
    },
  ];

const AreaChartBox = () => {
    return (
        <div className="areaChart">
            <h1>Revenue Analytics</h1>
            <div className="chart">
                <ResponsiveContainer width="99%" height="100%">
                    <AreaChart
                        data={data}
                        margin={{
                            top: 10,
                            right: 30,
                            left: 0,
                            bottom: 0,
                        }}
                    >
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Area type="monotone" dataKey="books" stackId="1" stroke="#8884d8" fill="#8884d8" />
                    <Area type="monotone" dataKey="clothes" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
                    <Area type="monotone" dataKey="electronics" stackId="1" stroke="#ffc658" fill="#ffc658" />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}
 
export default AreaChartBox;