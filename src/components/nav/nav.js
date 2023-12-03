import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Button, ButtonGroup} from '@mui/material';

import logo from './../../static/images/liuais_logo1.jpg'

const Nav = () => {
    const[windowSize, setWindowSize] = useState(getWindowSize());
    const[largeScreen, setLargeScreen] = useState(false)
    const [navBackground, setNavBackground] = useState('transparent');
    const [navbarBorder, setNavbarBorder] = useState('none');


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
        window.addEventListener('scroll', handleScroll);


        return () =>{
            window.removeEventListener('resize', handlewWindowResize)
            window.removeEventListener('scroll', handleScroll);

        }
    },[])

    const handleScroll = () => {
        const show = window.scrollY > 50;
        setNavBackground(show ? '#E5E6EB' : 'transparent');
        setNavbarBorder(show ? 3 : 'none');
      };



    function getWindowSize(){
        const {innerWidth, innerHeight} = window
        console.log(innerWidth)  
        return {innerWidth, innerHeight};
    }



    return (
        <div>
            {windowSize.innerWidth > 779 ?(
                <AppBar position="fixed" style={{ background: navBackground }} sx={{ boxShadow: navbarBorder, borderBottom: 0 }}>
                    <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Typography variant="h6" style={{color:'black'}}>Navbar</Typography>
                        
                        <ButtonGroup variant="text" color="inherit" >
                            <Button color="inherit" href="/events" style={{color:'black'}}>Events</Button>
                            <Button color="inherit" href="/contact" style={{color:'black'}}> Contact</Button>
                            <Button color="inherit" href="/courses" style={{color:'black'}}>LiU Courses</Button>
                        </ButtonGroup>
                    </Toolbar>
                </AppBar>
                // <nav class="navbar navbar-default  no-gutters navbar-light ">
                //     <a class="navbar-brand col-3 " href="/">
                //         {/* <img src={logo} alt="Logo" class='navLogo '/> */}
                //     </a> 
                //         <div class="nav-item col-2 " id="nav-item">
                //             <a class="nav-link " id="nav-link" href="/om-oss">About</a>
                //         </div>

                //         <div class="nav-item col-2" id="nav-item">
                //             <a class="nav-link " id="nav-link" href="/kurser">LiU Courses</a>
                //         </div>

                //         <div class="nav-item col-2" id="nav-item">
                //             <a class="nav-link " id="nav-link" href="/event">Event</a>
                //         </div>
                        
                //         {/* <div class="nav-item col-2" id="nav-item">
                //             <a class="nav-link " id="nav-link" href="/hall-of-fame"> Hall of Fame</a>
                //         </div>  */}
                // </nav>
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