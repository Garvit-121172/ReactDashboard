import React from 'react'
import TroubleHead from './TroubleHead'
import TroubleForm from './TroubleForm'
import NavBarCent from '../NavBarCent'
function TroubleSignInCont() {
    return (
        <>
        <NavBarCent/>
        <div className="trouble-signin-container" >
        <TroubleHead/>
        <TroubleForm/>
        </div>
        </>
    )
}

export default TroubleSignInCont;
