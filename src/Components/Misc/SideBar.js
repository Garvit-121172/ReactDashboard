import React from 'react'
import {NavLink} from 'react-router-dom';
import HomeLogo from '../HomeLogo';
import FrameLogo from '../FrameLogo'
import DevicesLogo from '../DevicesLogo';
function SideBar() {
    return (
        <div className="sidebar">
            <div className="sidebar-list">
            <div className="list-item"><NavLink exact activeClassName="active" to="/home" style={{ textDecoration:"none"}}> <div className="icon-box" ><HomeLogo /><div className="logo-name" >Home</div></div></NavLink></div>
            <div className="list-item"><NavLink exact activeClassName="active" to="/controls" style={{ textDecoration:"none"}} ><div className="icon-box"><DevicesLogo/><div className="logo-name" >Controls</div></div></NavLink></div>
            <div className="list-item"><NavLink exact activeClassName="active" to="/reports" style={{ textDecoration:"none"}}><div className="icon-box" ><FrameLogo/><div className="logo-name" >Reports</div></div></NavLink></div>
            </div>
        </div>
    )
}

export default SideBar
