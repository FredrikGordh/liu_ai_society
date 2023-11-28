import React, {useState }from 'react';
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword,  } from "firebase/auth"
import { app } from "../../../firebase-config"


import { useNavigate } from 'react-router';

const Admin_login = () => {


    const[email, setEmail] = useState('')
    const[password, setPassword] = useState('')
    const[user, setUser] = useState('')
    const[isLoggedIn, setIsLoggedIn] = useState(false)
    const navigate= useNavigate()
    const auth = getAuth(app)


    // const auth = getAuth(app)
    // const navigate= useNavigate()

    onAuthStateChanged(auth, (currentUser) => {
        if (currentUser){
            console.log("user is signed in")
            localStorage.setItem('isLoggedIn' , true)
        }else{
            console.log("user is signed out")
            localStorage.setItem('isLoggedIn' , false)
            

        }
    })

    const handleLogin = async (e) => {
        e.preventDefault();

        try{
            const user = await signInWithEmailAndPassword(
                auth,
                email,
                password
            )
            console.log(user)
            navigate('/admin_home')
        } catch(error) {
            alert(error)
        }
        
    }

    
    return(
        <div class="login-container">
            <center>
            <h1>Logga in som Admin </h1>
            <form action="/action_page.php" onSubmit={handleLogin}>
                <div class="form-group col-4 ">
                    <label for="email">Email address:</label>
                    <input type="email" 
                    class="form-control " 
                    placeholder="Enter email" 
                    onChange={(e) => setEmail(e.target.value)}
                    id="email"/>
                </div>
                <div class="form-group col-4">
                    <label for="pwd">Password:</label>
                    <input type="password" 
                    class="form-control" 
                    placeholder="Enter password" 
                    onChange={(e) => setPassword(e.target.value)}
                    id="password"/>
                </div>

                <button type="submit" class="btn btn-primary">Logga in</button>
            </form>
            </center>
        </div>
    )
}

export default Admin_login;
