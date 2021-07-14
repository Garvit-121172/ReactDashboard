import React from 'react'
import CardArea from './CardArea'
import GraphArea from './GraphArea'
import AddDevices from '../AddDevice/AddDevices'
function MainArea() {
    return (
        <div className="main-area">
            <CardArea />
            <AddDevices/>

            {/* <GraphArea /> */}
        </div>

    )
}

export default MainArea
