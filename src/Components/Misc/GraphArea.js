import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip,Label } from "recharts";


function GraphArea() {
    const data = [
        {
            name: "00 AM",
            pH: 1.8,
            amt: 2900
        },
        {
            name: "01 AM",
            pH: 4.1,
            amt: 2210
        },
        {
            name: "02 AM",
            pH: 4,
            amt: 2290
        },
        {
            name: "03 AM",
            pH: 3.7,
            amt: 2000
        },
        {
            name: "04 AM",
            pH: 5,
            amt: 2181
        },
        {
            name: "05 AM",
            pH: 4,
            amt: 2500
        },
        {
            name: "06 AM",
            pH: 2.5,
            amt: 2100
        }
    ];
    return (
        <div className="graph-sec">
            <div className="graph-sec-title">
                <div className="graph-sec-heading">
                    <p>Analtyics</p>
                </div>
            </div>
            <div className="graph">
                <LineChart
                    width={520}
                    height={250}
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 10,
                        bottom: 5
                    }}>
                    <CartesianGrid strokeDasharray="1 1" vertical={false} style={{border:"1px solid #FFDDD3"}}  />
                    <XAxis dataKey="name" />
                    <YAxis axisLine={false} label={{ value: 'pH', angle: 0, position: 'insideTopLeft' }} />
                    <Tooltip />
                    <Line type="monotone" dataKey="pH" stroke="#EF4F23" />
                </LineChart>
                <hr style={{width:"82%",borderTop:"3px solid #F26A45",height:"0"}}></hr>
            </div>

        </div>

    );
}

export default GraphArea
