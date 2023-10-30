import React, { useState, useEffect } from 'react';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom'
import SignOutBtn from '../components/SignOutBtn';

const Dashboard = () => {
    
    const [user, setUser] = useState(null) 
    const navigate = useNavigate();

    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
              // User is signed in, see docs for a list of available properties
              // https://firebase.google.com/docs/reference/js/firebase.User
              const uid = user.uid;
              setUser(user)
              console.log("uid", uid)
            } else {
              // User is signed out
              // ...
              console.log("user is logged out")
              navigate("/login")
            }
          });
         
    }, [])
 
  return (
    <section>        
      Dashboard
      <SignOutBtn />
    </section>
  )
}
 
export default Dashboard