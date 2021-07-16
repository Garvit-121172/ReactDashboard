import React from 'react'

function ConfigWifi() {
    return (
        <div className="config-wifi">
            <p style={{marginLeft:"26px",marginBottom:"5px"}}>Follow the steps to configure Wifi</p>
            <ol>
                <li>  Go to your network settings</li>
                <li>  Connect to the Device’s Wi-Fi Network</li>
                <li>  Open IP Address in your browser </li>
                <li>  Connect to your new Wi-Fi using the credentials </li>
                <li>  Congrat’s you have successully configured wifi</li>
                <li>  Continue working on the dashboard</li>
            </ol>
        </div>
    )
}
export default ConfigWifi