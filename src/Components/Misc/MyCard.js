import React from 'react'
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import FiberManualRecordRoundedIcon from '@material-ui/icons/FiberManualRecordRounded';
import { useState } from 'react';
import Ph from "./Ph";
function MyCard({sensor,pH,status}) {
    const [border, setBord] = useState(0);
    const [inp,setinp] = useState();
    const inputHandler=(x)=>{
        setinp(x.target.value)
    }
    return (
        <div className="card">
            <Card onClick={() => setBord(!border)} style={{height:"135px",width:"235px",margin:"15px",marginTop:"0px"}} >
                <div className="card-head">
                    <Ph/>
                    <input onChange={(x)=>inputHandler} className="card-sensor" placeholder={sensor} value={sensor} />
                    <MoreHorizIcon className="dots" />
                </div>
                <h2 className="card-pH">{pH.toFixed(1)}  <span id="small-pH">pH</span></h2>
                <Typography className="card-status" ><span id="status">Device Status:</span><span id={status?"online":"offline"}>{status?"Online":"Offline"}</span> <span id={status?"online-icon":"offline-icon"}><FiberManualRecordRoundedIcon style={{fontSize:"15px",position:"relative",top:"3px"}}/></span></Typography>
            </Card>
        </div>
    )
}

export default MyCard
