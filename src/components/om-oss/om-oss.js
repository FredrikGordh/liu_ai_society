import React from 'react';
import Nav from "../nav/nav"
import founder from "./../../static/images/nikke.jpeg"
import co_founder1 from "./../../static/images/fredrik.jpeg"
import co_founder2 from "./../../static/images/erik.jpeg"
import co_founder3 from "./../../static/images/axel.gif"


const Om_oss = () => {

    // could you write a function for portraits of the founding partners?
    const FoundingPartners = () => {
        return(
            <div>
                <div className='row text-center'>
                    <div className="portrait-container col-3 centered-content">
                        <img src={founder} alt="founder" className="portrait"/>
                        <p className="founder-name">Niklas Wretblad</p>
                        <p className="founder-title">Founder</p>
                    </div>
                    <div className="portrait-container col-3">
                        <img src={co_founder1} alt="founder" className="portrait"/>
                        <p className="founder-name">Fredrik Gordh</p>
                        <p className="founder-title">Co-Founder</p>
                    </div>
                    <div className="portrait-container col-3">
                        <img src={co_founder2} alt="founder" className="portrait"/>
                        <p className="founder-name">Erik Larsson</p>
                        <p className="founder-title">Co-Founder</p>
                    </div>
                    <div className="portrait-container col-3">
                        <img src={co_founder3} alt="founder" className="portrait"/>
                        <p className="founder-name">Axel Wiksäter</p>
                        <p className="founder-title">Co-Founder</p>
                    </div>
                </div>
            </div>
        )
    }

    return(
        <div>
            <div class='group_picture col-12' id="img-om-oss" >
                <Nav/>
            </div>
            <div class="content-below">
           
                <div class="paragraph-1">
                    <h3>Who we are</h3>
                    <p>
                    We are a student association at Linköping University devoted to the exploration, 
                    research and continuous learning of artificial intelligence. We cultivate connections with both 
                    industry and academia through networking events, educational lectures, workshops and research projects.
                     We serve as a platform for members and partners to network, build professional relationships, and share knowledge.
                    </p>
                </div>

                <div class="paragraph-2">
                    <h3>Vision</h3>
                    <p>
                    We are committed to organizing events that bridge the gap between students and the spheres of industry and academia. 
                    Through workshops, seminars, lectures and collaborative projects, we seek to broaden the AI and machine learning knowledge 
                    base of our student body, and to provide a clear view of potential career paths in these fields. The society is also meant to be a 
                    platform for engaged and ambitious students to garner internships or research opportunities. 

                    </p>
                </div>

                <div class="paragraph-3 text-center">
                    <h3>Kontakta Oss</h3>
                    <p>
                    <a href="mailto:contact@liuais.com">contact@liuais.com</a>
                    </p>
                </div>
    

                <div class="paragraph-4">
                    <h3 className="text-center">Founding Partners</h3>
                    <br></br>
                    {FoundingPartners()}
                </div>  

            </div>
        </div>

    
    )
}

export default Om_oss;
