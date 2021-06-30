import React from 'react'
import MyCard from './MyCard'
function CardArea() {
    return (
        <div className="card-sec">
            <div className="card-sec-title">
                <div className="card-sec-heading">
                    <h2>Devices</h2>
                </div>
                <div className="card-sec-btn">
                    <button style={{
                        marginLeft: "200px",
                        backgroundColor: "#FFDBCE", color: "#EF4F23", border: "0", padding: "5px"
                    }}>+Add DEvice</button>
                </div>

            </div>
            <div className="cards-area">
                <MyCard />
                <MyCard />
                <MyCard />
            </div>

        </div>
    )
}

export default CardArea
