import React from 'react';
import "firebase/app"
import { auth } from "../../firebase"
import firebase from "firebase/app"
import { LoginPage, LoginTitle, LoginCard, LoginButton, GoogleLogo, CardTitle  } from './LoginElements';


const Login = () => {
    return (
        <LoginPage>
            <LoginTitle>Welcome to <span>Talkz</span></LoginTitle>
            <LoginCard>
                <CardTitle>Login or Signup</CardTitle>
                <LoginButton onClick={() => auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())}>
                    With Google <GoogleLogo /> 
                </LoginButton>
            </LoginCard>
        </LoginPage>
    )
}
export default Login
