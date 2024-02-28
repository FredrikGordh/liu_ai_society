import React from 'react';
import Nav from "../nav/nav"
import { ReactComponent as LiuAisLogo } from './../../static/images/ai_liu_logo.svg';

const Home = () => {
    return(
        <div className="home-container">
            <div class='home_background '>
                <Nav/>
                <div className='logo_container'>
                    <LiuAisLogo className='liu_ais_logo col-6'/>
                </div>
            </div>           
                <div className='first_text_container'>
                    <div className="paragraph-1 col-10 col-lg-6  mx-auto ">
                        <h3 className="paragraph-title">Who We Are</h3>
                        <p>
                        We are a student association at Linköping University devoted to the exploration, 
                        research and continuous learning of artificial intelligence. We cultivate connections with both
                        industry and academia through networking events, educational lectures, workshops and research projects.
                        We serve as a platform for members and partners to network, build professional relationships, and share knowledge.
                        </p>
                    </div>
                </div>
                <div className=' second_text_container '>
                    <div class="paragraph-2 col-10 col-lg-6  mx-auto">
                        <h3 className="paragraph-title">  Our Vision</h3>
                        <p>
                        We are committed to organizing events that bridge the gap between students and the spheres of industry and academia. 
                        Through workshops, seminars, lectures and collaborative projects, we seek to broaden the AI and machine learning knowledge 
                        base of our student body, and to provide a clear view of potential career paths in these fields. The society is also meant to be a 
                        platform for engaged and ambitious students to garner internships or research opportunities.
                        </p>
                    </div>
                </div>
        </div>
    )
}
export default Home;
