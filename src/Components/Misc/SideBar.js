import React from 'react'
import HomeIcon from '@material-ui/icons/Home';
import SettingsIcon from '@material-ui/icons/Settings';
import DescriptionIcon from '@material-ui/icons/Description';
import {NavLink} from 'react-router-dom';
function SideBar() {
    return (
        <div className="sidebar">
            <ul>
                <li><NavLink exact activeClassName="active" to="/" > <div className="side-icon" ><HomeIcon /></div> </NavLink>  <div>Home</div></li>
                <li><NavLink exact activeClassName="active" to="/control"><div className="side-icon"><SettingsIcon /></div> </NavLink> <div>Controls</div></li>
                <li><NavLink exact activeClassName="active" to="/report"><div className="side-icon"><DescriptionIcon /></div> </NavLink><div>Reports</div></li>

            </ul>
        </div>
    )
}

export default SideBar
