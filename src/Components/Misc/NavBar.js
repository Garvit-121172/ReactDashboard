import React from 'react'
import NotificationsIcon from '@material-ui/icons/Notifications';
import Badge from '@material-ui/core/Badge';
import Logo from '../../Logo.svg'

function NavBar() {
    return (
        <div className="navbar">
            <div className="nav-logo"><img src={Logo} alt="logo" height="28px" width="110px"/>
            </div>
            <div className="nav-side">
                <Badge color="secondary" variant="dot" invisible={false}><NotificationsIcon className="nav-bell" fontSize="medium" /> </Badge>
                <div className="user-name" ><span style={{paddingLeft:"1px"}} >N</span></div> 
            </div>
        </div>
    )
}

export default NavBar
