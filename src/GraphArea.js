import React from 'react'
import MyCard from './MyCard'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";


function GraphArea() {
    const data = [
        {
            name: "Page A",
            uv: 4000,
            amt: 2400
        },
        {
            name: "Page B",
            uv: 3000,
            amt: 2210
        },
        {
            name: "Page C",
            uv: 2000,
            amt: 2290
        },
        {
            name: "Page D",
            uv: 2780,
            amt: 2000
        },
        {
            name: "Page E",
            uv: 1890,
            amt: 2181
        },
        {
            name: "Page F",
            uv: 2390,
            amt: 2500
        },
        {
            name: "Page G",
            uv: 3490,
            amt: 2100
        }
    ];
    return (
        <div className="graph-area">
            <div className="graph-sec-title">
                <div className="graph-sec-heading">
                    <h2>Analtyics</h2>
                </div>
            </div>
            <div className="graph">
                <LineChart
                    width={500}
                    height={300}
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: -10,
                        bottom: 5
                    }}
                >
                    <CartesianGrid strokeDasharray="1 1" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="uv" stroke="#EF4F23" />
                </LineChart>
            </div>

        </div>

    );
}

export default GraphArea
