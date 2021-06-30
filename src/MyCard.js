import React from 'react'
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import FiberManualRecordRoundedIcon from '@material-ui/icons/FiberManualRecordRounded';
import { useState } from 'react';
function MyCard() {
    const [border, setBord] = useState(0);
    return (
        <div className="card">
            <Card onClick={() => setBord(!border)} style={border ? { border: "2px solid #F7A58E" } : { border: "1px solid black" }}>
                <div className="card-head">
                    <div className="pH" >pH</div>
                    <input className="card-sensor" placeholder="pH Sensor 1" value="pH Sensor 1" />
                    <MoreHorizIcon className="dots" />
                </div>
                <h2 className="card-pH">6.0 pH</h2>
                <Typography className="card-status" ><span id="status">Device Status:</span><span id="online">Online</span> <span id="online-icon"><FiberManualRecordRoundedIcon fontSize="small" /></span></Typography>
            </Card>
        </div>
    )
}

export default MyCard
