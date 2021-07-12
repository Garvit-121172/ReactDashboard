import React from 'react'
import HomeIcon from '@material-ui/icons/Home';
import SettingsIcon from '@material-ui/icons/Settings';
import DescriptionIcon from '@material-ui/icons/Description';
import {NavLink} from 'react-router-dom';
import Homeicon from './../../Homeicon.svg'

function SideBar() {
    return (
        <div className="sidebar">
            <div className="sidebar-list">
            <ul>
                <li><svg xmlns={Homeicon} style={{backgroundColor:"red",height:"30px",width:"30px",color:"black"}} ></svg></li>
                <li><div className="list-item"><NavLink exact activeClassName="active" to="/" > <div className="side-icon" ><HomeIcon /></div> </NavLink></div><div>Home</div></li>
                <li><NavLink exact activeClassName="active" to="/control"><div className="side-icon"><SettingsIcon /></div> </NavLink> <div>Controls</div></li>
                <li><NavLink exact activeClassName="active" to="/report"><div className="side-icon"><DescriptionIcon /></div> </NavLink><div>Reports</div></li>
            </ul>
            </div>
        </div>
    )
}

export default SideBar
