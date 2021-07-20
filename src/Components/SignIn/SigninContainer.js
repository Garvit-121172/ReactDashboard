import React from 'react'
import SignHead from './SignHead'
import SignInForm from './SignInForm';
import NavBarCent from '../NavBarCent';

function SigninContainer() {
    return (
        <>
        <NavBarCent/>
        
        <div className="signincontainer">
        <SignHead/>
        <SignInForm/>
        </div>
        </>
    )
}

export default SigninContainer;
