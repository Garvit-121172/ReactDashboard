import React from 'react'
import MyCard from './MyCard'
function CardArea() {
    return (
        <div className="card-sec">
            <div className="card-sec-title">
                <div className="card-sec-heading">
                    <h2 style={{margin:"0",padding:"0",fontSize:"18px"}} >Devices</h2>
                </div>
                <div className="card-sec-btn">
                    <button style={{
                        marginLeft: "190px",
                        borderRadius:"3px",
                        backgroundColor: "#FFDBCE", color: "#EF4F23", border: "0", padding: "7px",paddingLeft:"12px",fontWeight:"500"
                    }}><b>+ Add Device</b></button>
                </div>
            </div>
            <div className="cards-area">
                <MyCard sensor="pH Sensor 1" pH={6.0} status={true}  />
                <MyCard sensor="pH Sensor 2" pH={6.5} status={true}/>
                <MyCard sensor="pH Sensor 3" pH={4.0} status={false}/>
            </div>

        </div>
    )
}

export default CardArea
