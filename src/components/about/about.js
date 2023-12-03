import React from 'react';
import Nav from "../nav/nav"
import founder from "./../../static/images/nikke.jpeg"
import co_founder1 from "./../../static/images/fredrik.jpeg"
import co_founder2 from "./../../static/images/erik.jpeg"
import co_founder3 from "./../../static/images/axel.gif"


const About = () => {

    // could you write a function for portraits of the founding partners?
    const FoundingPartners = () => {
        return(
    <div className='row text-center'>
        {/* First Portrait Container (Left) */}
        <div className="col-3">
            <div className="portrait-container">
                <img src={founder} alt="founder" className="portrait"/>
                <h3 className="founder-name">Niklas Wretblad</h3>
                <h4 className="founder-title">Founder</h4>
                <h4 className="founder-title">Program: Mjukvaruteknik</h4>
            </div>
        </div>

        {/* Second Portrait Container (Right) */}
        <div className="col-3">
            <div className="portrait-container ">
                <img src={co_founder1} alt="co-founder" className="portrait"/>
                <p className="founder-name">Fredrik Gordh</p>
                <p className="founder-title">Co-Founder</p>
            </div>
        </div>

        {/* Third Portrait Container (Left) */}
    
        <div className="col-3">
            <div className="portrait-container">
                <img src={co_founder2} alt="co-founder" className="portrait"/>
                <p className="founder-name">Erik Larsson</p>
                <p className="founder-title">Co-Founder</p>
            </div>
        </div>

        {/* Fourth Portrait Container (Right) */}
        <div className="col-3">
            <div className="portrait-container">
                <img src={co_founder3} alt="co-founder" className="portrait"/>
                <p className="founder-name">Axel Wiksäter</p>
                <p className="founder-title">Co-Founder</p>
            </div>
        </div>
    </div>

        )
    }

    return(
        <div>
            <div class='about_background col-12' id="img-om-oss" >
                <Nav/>
                <h3 className='about_headline'> Contact Details</h3>
            </div>
            <div class="content text-center"> 
            <div className='first_text_container row col-12 justify-content-center'>
                    <div className="paragraph-1 col-5">
                        <h3>Who we are</h3>
                        <p>
                            We are a student association at Linköping University devoted to the exploration, 
                            research and continuous learning of artificial intelligence. We cultivate connections with both 
                            industry and academia through networking events, educational lectures, workshops and research projects.
                            We serve as a platform for members and partners to network, build professional relationships, and share knowledge.
                        </p>
                    </div>

                    <div className="paragraph-2 col-5">
                        <h3>Vision</h3>
                        <p>
                            We are committed to organizing events that bridge the gap between students and the spheres of industry and academia. 
                            Through workshops, seminars, lectures and collaborative projects, we seek to broaden the AI and machine learning knowledge 
                            base of our student body, and to provide a clear view of potential career paths in these fields. The society is also meant to be a 
                            platform for engaged and ambitious students to garner internships or research opportunities.
                        </p>
                    </div>
                </div>

                <div className='portrait_section_container row col-12 justify-content-center'>
                    <div class="paragraph-4">
                        <h3 className="text-center">Founding Partners</h3>
                        <div className='portrait_container row col-12 justify-content-center'>
                            {FoundingPartners()}
                        </div>
                    </div>  
                </div>
            </div>
        </div>

    
    )
}

export default About;
