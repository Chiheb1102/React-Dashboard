import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './Single.scss'

type Props = {
    id: number,
    img: string,
    title: string,
    info:object,
    chart?: { // ? means not required
        dataKeys: {name: string, color: string}[],
        data: object[],
    }
    acts?: {time: string, text: string}[],
}

const Single = (props:Props) => {
    return (
        <div className="single">
            <div className="view">
                <div className="info">
                    <div className="top">
                       {props.img && <img src={props.img} alt="" />}
                        <h1>{props.title}</h1>
                        <button>Update</button>
                    </div>
                    <div className="details">
                        {Object.entries(props.info).map(item => (
                            <div className="item" key={item[0]}>
                                <div className="title">{item[0]}</div>
                                <div className="value">{item[1]}</div>
                            </div>
                        ))}
                    </div>
                </div>
                <hr />
                {props.chart && <div className="chart">
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart
                            width={500}
                            height={300}
                            data={props.chart.data}
                            margin={{
                                top: 5,
                                right: 30,
                                left: 20,
                                bottom: 5,
                            }}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend/>
                        {props.chart.dataKeys.map(dataKey => (
                            <Line type="monotone" dataKey={dataKey.name} stroke={dataKey.color} />
                        ))}
                        </LineChart>
                    </ResponsiveContainer>
                </div>}
            </div>
            <div className="acts">
                <h2>Latest Activities</h2>
                {props.acts && <ul>
                    {props.acts.map(act => (
                        <li key={act.text}>
                            <div>
                                <p>{act.text}</p>
                                <time>{act.time}</time>
                            </div>
                        </li>
                    ))}
                </ul>}
            </div>
        </div>
    );
}
 
export default Single;