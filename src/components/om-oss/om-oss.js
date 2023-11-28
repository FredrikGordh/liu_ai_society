import React from 'react';
import Nav from "../nav/nav"
import founder from "./../../static/nikke.jpeg"
import co_founder1 from "./../../static/fredrik.jpeg"
import co_founder2 from "./../../static/erik.jpeg"
// import co_founder3 from "./../../static/co-founder.jpg"


const Om_oss = () => {

    // could you write a function for portraits of the founding partners?
    const FoundingPartners = () => {
        return(
            <div>
                <row>
                    <div class="portrait-container col-4">
                        <img src={founder} alt="founder" class="portrait"/>
                        <p class="founder-name">Niklas Wretblad</p>
                        <p class="founder-title">Founder</p>
                    </div>
                    <div class="portrait-container col-4">
                        <img src={co_founder1} alt="founder" class="portrait"/>
                        <p class="founder-name">Fredrik Gordh</p>
                        <p class="founder-title">Co-Founder</p>
                    </div>
                </row>

                <div class="portrait-container">
                    <img src={co_founder2} alt="founder" class="portrait"/>
                    <p class="founder-name">Erik Larsson</p>
                    <p class="founder-title">Co-Founder</p>
                </div>
                <div class="portrait-container">
                    {/* <img src='test' alt="founder" class="portrait"/> */}
                    <p class="founder-name">Axel Wiksäter</p>
                    <p class="founder-title">Co-Founder</p>
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
                <img src='"./../../static/nikke.jpeg"' alt="founder" class="founder-portrait"/>

                <div class="paragraph-3">
                    <h3>Founding Partners</h3>
                    {FoundingPartners()}
                </div>  

            </div>
        </div>

    
    )
}

export default Om_oss;
