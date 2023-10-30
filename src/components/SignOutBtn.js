import React from 'react'
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';

const SignOutBtn = () => {
    const navigate = useNavigate();

    const handleLogout = () => {               
        auth.signOut().then(() => {
        // Sign-out successful.
            navigate("/");
            console.log("Signed out successfully")
        }).catch((error) => {
        // An error happened.
        });
    }

    return (
        <button onClick={handleLogout}>Logout</button>
    )
}

export default SignOutBtn