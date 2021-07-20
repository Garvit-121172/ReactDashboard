import React from 'react'
import SignUpHead from './SignUpHead'
import SignUpForm from './SignUpForm';
import NavBarCent from '../NavBarCent';
function SignUpContainer() {
    return (
        <>
        <NavBarCent/>
        <div className="signup-container">
        <SignUpHead/>
        <SignUpForm/>
        </div>
        </>
    )
}

export default SignUpContainer;
