import React from 'react'
import HomeIcon from '@material-ui/icons/Home';
import SettingsIcon from '@material-ui/icons/Settings';
import DescriptionIcon from '@material-ui/icons/Description';
function SideBar() {
    return (
        <div className="sidebar">
            <ul>
                <li><div className="side-icon" ><HomeIcon /></div><div>Home</div></li>
                <li><div className="side-icon"><SettingsIcon /></div><div>Controls</div></li>
                <li><div className="side-icon"><DescriptionIcon /></div><div>Reports</div></li>

            </ul>
        </div>
    )
}

export default SideBar
