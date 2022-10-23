import React, {useState, useEffect}from 'react';
import { useNavigate } from 'react-router-dom';

const Admin_hantera = () => {

    const [dispManagePicture, setdispManagePicture] = useState(true)
    const [dispManageText, setdispManageText] = useState(false)

    const displayComponents = (displayState) => {
        if(displayState == "picture"){
            setdispManagePicture(true)
            setdispManageText(false)
        }else{
            setdispManagePicture(false)
            setdispManageText(true)
        }
    }

    return(
        <div>
            
            {JSON.parse(localStorage.getItem('isLoggedIn')) ? (
            <div>
                <div class="small-nav row">
                    <nav class="navbar navbar-default navbar-light col-12" role="navigation" id="admin-member-navbar">  
                    <a class="nav-link col-1 hover-overlay " id="nav-link-admin" href="/admin_home"> Tillbaka</a>
                    <h1 class="headline-admin-medlemmar col-10">Hantera hemsida</h1>
                        <button class="navbar-toggler" id="nav-burger" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon" ></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav mr-auto">
                                <li class="nav-item" id="nav-item-admin">
                                    <a class="nav-link" id="nav-link-hamburger-admin" onClick={() => displayComponents("picture")}> Uppdatera bilder </a>
                                </li>
                                <li class="nav-item" id="nav-item-admin">
                                    <a class="nav-link" id="nav-link-hamburger-admin" onClick={() => displayComponents("text")}>Uppdatera text</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
                <div class="hantera-container">
                    <p>Välj vilken komponent och bild du vill ladda upp</p>
                    <div class="row">
                        <div class="dropdown show col-1">
                        <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Komponent
                        </a>
                        
                        <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                            <a class="dropdown-item" href="#">Startsida</a>
                            <a class="dropdown-item" href="#">Om oss</a>
                            <a class="dropdown-item" href="#">Medlem</a>
                            <a class="dropdown-item" href="#">Event</a>
                            <a class="dropdown-item" href="#">Hall of fame</a>
                        </div>
                        </div>
                        
                        {dispManagePicture ? (
                            <input class="col-3 " type="file" id="avatar" name="avatar" accept="image/png, image/jpeg"/>
                        ): (
                            <input class="col-3 " type="text" id="avatar"  />
                        )}

                    </div>
                </div>
            </div>
            ) : (
            <div></div>)}
        </div>
    )
}

export default Admin_hantera