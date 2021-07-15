import React from 'react'
import CardArea from './CardArea'
import GraphArea from '../GraphArea'
import AddDevices from '../../AddDevice/AddDevices'
import StatusGrid from '../../ControlTab/StatusGrid'
function MainArea() {
    return (
        <div className="main-area">
            <CardArea />
            <StatusGrid/>
            {/* <AddDevices/> */}

            {/* <GraphArea /> */}
        </div>

    )
}

export default MainArea
