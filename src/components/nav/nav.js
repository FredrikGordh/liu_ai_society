import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppBar, Toolbar, Button, ButtonGroup} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import Drawer from '@mui/material/Drawer';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import Box from '@mui/joy/Box';
import { ReactComponent as NavbarLogo }  from '../../static/images/navbar_logo.svg';

const Nav = () => {
    const[windowSize, setWindowSize] = useState(getWindowSize());
    const [navBackground, setNavBackground] = useState('transparent');
    const [navbarBorder, setNavbarBorder] = useState('none');
    const [menuOpen, setMenuOpen] = useState(false);
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    let navigate = useNavigate();

    const menuItems = [
        { text: 'Events', href: '/events' },
        { text: 'About', href: '/about' },
        { text: 'LiU Courses', href: '/courses' },
      ];

    useEffect (() => {
        function handlewWindowResize(){
            setWindowSize(getWindowSize())
        }
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

    const handleClick = () => {
        navigate('/'); 
        console.log('clicked the logo')
    };

    const handleMenuToggle = () => {
        setMenuOpen(!menuOpen);
    };

    const toggleDrawer = (open) => (event) => {
        if (
          event.type === 'keydown' &&
          (event.key === 'Tab' || event.key === 'Shift')
        ) {
          return;
        }
        setIsDrawerOpen(open);
      };

    function getWindowSize () {
        const {innerWidth, innerHeight} = window
        console.log(innerWidth)  
        return {innerWidth, innerHeight};
    }
   
    const list = (
      <Box
        role="presentation"
        onClick={toggleDrawer(false)}
        onKeyDown={toggleDrawer(false)}>
        <List>
            {menuItems.map((item) => (
            <ListItem key={item.text}>
                <Button color="inherit" href={item.href} style={{color: 'black', width: '100%' }}>
                {item.text}
                </Button>
            </ListItem>
            ))}
        </List>
      </Box>
    );

    return (
        <div>
            {windowSize.innerWidth > 1100 ?(
                <AppBar position="fixed" style={{ background: navBackground }} sx={{ boxShadow: navbarBorder, borderBottom: 0 }}>
                    <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', marginRight:'-25vw' }}>
                    
                        <NavbarLogo onClick={handleClick} left={0} className='navbar_logo col-1'/> 
                        
                        <ButtonGroup style={{marginLeft:'60%'}}  variant="text" color="inherit" >
                            <Button color="inherit" href="/events" style={{color:'black'}}>Events</Button>
                            <Button color="inherit" href="/about" style={{color:'black'}}> About</Button>
                            <Button color="inherit" href="/courses" style={{color:'black'}}>LiU Courses</Button>
                        </ButtonGroup>
                    </Toolbar>
                </AppBar>

            ):( 
                <>
                <AppBar position="fixed" style={{ background: navBackground }} sx={{ boxShadow: navbarBorder, borderBottom: 0 }}>    
                    <Toolbar sx={{ display: 'flex', justifyContent: 'end' }}>
                        <NavbarLogo onClick={handleClick} className='navbar_logo_phone col-3'/>     
                        {/* Hamburger icon for small screens */}
                        <React.Fragment>
                            <IconButton
                                color="black"
                                aria-label="open drawer"
                                edge="start"
                                onClick={toggleDrawer(true)}
                                sx={{ display: { xs: 'block' } }}
                            >
                                <MenuIcon />
                            </IconButton>
                            <Drawer
                                anchor="right"
                                open={isDrawerOpen}
                                onClose={toggleDrawer(false)}
                            >
                                {list}
                            </Drawer>
                            </React.Fragment>
                    </Toolbar>
                </AppBar>
                </>
            )}
        </div>     
    )
}
export default Nav;