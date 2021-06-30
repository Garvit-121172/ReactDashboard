import React from 'react'
import NotificationsIcon from '@material-ui/icons/Notifications';
import Badge from '@material-ui/core/Badge';
function NavBar() {
    return (
        <div className="navbar">
            <div className="nav-logo">ICON</div>
            <div className="nav-side">
                <Badge color="secondary" variant="dot" invisible={false}><NotificationsIcon className="nav-bell" fontSize="large" /> </Badge>
                <div className="user-name" >N</div>  </div>
        </div>
    )
}

export default NavBar
