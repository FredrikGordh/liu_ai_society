import React, { useState, useEffect } from 'react';
import logo from './../../static/images/liuais_logo1.jpg'

const Nav = () => {
    const[windowSize, setWindowSize] = useState(getWindowSize());
    const[largeScreen, setLargeScreen] = useState(false)


    useEffect (() => {
        function handlewWindowResize(){
            setWindowSize(getWindowSize())
            if(windowSize.innerWidth > 779){
                setLargeScreen(true)
            }else{
                setLargeScreen(false)
            }
        }
        console.log(largeScreen)
        window.addEventListener('resize', handlewWindowResize)

        return () =>{
            window.removeEventListener('resize', handlewWindowResize)
        }
    },[])




    function getWindowSize(){
        const {innerWidth, innerHeight} = window
        console.log(innerWidth)  
        return {innerWidth, innerHeight};
    }



    return (
        <div>
            {windowSize.innerWidth > 779 ?(
                <nav class="navbar navbar-default  no-gutters navbar-light ">
                    <a class="navbar-brand col-3 " href="/">
                        <img src={logo} alt="Logo" class='navLogo '/>
                    </a> 
                        <div class="nav-item col-2 " id="nav-item">
                            <a class="nav-link " id="nav-link" href="/om-oss">About</a>
                        </div>

                        <div class="nav-item col-2" id="nav-item">
                            <a class="nav-link " id="nav-link" href="/kurser">LiU Courses</a>
                        </div>

                        <div class="nav-item col-2" id="nav-item">
                            <a class="nav-link " id="nav-link" href="/event">Event</a>
                        </div>
                        
                        {/* <div class="nav-item col-2" id="nav-item">
                            <a class="nav-link " id="nav-link" href="/hall-of-fame"> Hall of Fame</a>
                        </div>  */}
                </nav>
            ):( 
                <nav class="navbar navbar-default navbar-light col-12" role="navigation" id="small-navbar">  

                    
                    <a class="navbar-brand col-3 " href="/">
                        <img src={logo} alt="Logo" class='navLogo-small '/>
                    </a> 
                    <button class="navbar-toggler" id="nav-burger" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon" ></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mr-auto">
                            <li class="nav-item" id="nav-nav-item-small">
                                <a class="nav-link" id="nav-link-small" href="/om-oss">Om oss <span class="sr-only">(current)</span></a>
                            </li>
                            <li class="nav-item" id="nav-item-small">
                                <a class="nav-link" id="nav-link-small" href="/medlem">Medlem</a>
                            </li>
                            <li class="nav-item" id="nav-nav-item-small">
                                <a class="nav-link" id="nav-link-small" href="/event">Event</a>
                            </li>
                            {/* <li class="nav-item" id="nav-nav-item-small">
                                <a class="nav-link" id="nav-link-small" href="/hall-of-fame">Hall of Fame</a>
                            </li> */}
                        </ul>
                    </div>
              </nav>
            )}
        </div>
        
    )
}

export default Nav;