import React from 'react'
import ResetHead from './ResetHead'
import ResetForm from './ResetForm'
import NavBarCent from '../NavBarCent'
function ResetPassContainer() {
    return (
        <>
        <NavBarCent/>
        <div className="reset-pass-container" >
        <ResetHead/>
        <ResetForm/>
        </div>
        </>
    )
}

export default ResetPassContainer
