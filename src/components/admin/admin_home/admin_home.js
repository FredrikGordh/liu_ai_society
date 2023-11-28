import React, {useState, useEffect}from 'react';
import {getAuth,signOut } from "firebase/auth"
import { auth } from "../../../firebase-config"
import { useNavigate } from 'react-router-dom';


const Admin_home = () => {

    const[isLoggedIn, setIsLoggedIn] = useState(false)
    const navigate= useNavigate()

    const auth = getAuth()


    const logout = async () => {
        await signOut(auth).then(() => {
            console.log("Signout successful")
            navigate("/admin_login")
            console.log(localStorage.getItem('isLoggedIn'))
            
        })
        .catch((error) => {
            console.log(error)
        })
    }

    const handleClick_medlemmar = () => {
        navigate("/admin_medlemmar")
    }

    const handleClick_hemsida = () => {
        navigate("/admin_hantera")
    }

    
    return(
        <div>
            
           {JSON.parse(localStorage.getItem('isLoggedIn')) ? (
            <div class="admin-home-container">
                <div class="row justify-content-center ">
                    <div class="small-nav row">
                        <a class="nav-link col-1" id="nav-link-logout" onClick={() => logout()}> Logga ut</a>
                        <h1 class="headline col-10 ">Välkommen </h1>
                    </div>
                </div>
                <div class="alternative-row row justify-content-center align-center">
                    <div class="alternative-box col" id="alt-1" onClick={handleClick_hemsida}> <h3>Uppdatera hemsidan</h3> </div>
                    <div class="alternative-box col " id="alt-2" onClick={handleClick_medlemmar}> <h3>Hantera medlemmar</h3> </div>
                </div>
                
            </div>
            ) : (<div class="restriced-container">
                <center>
                    <h1>Restriced access</h1>
                </center></div>)}
        </div>
    )
}

export default Admin_home;
