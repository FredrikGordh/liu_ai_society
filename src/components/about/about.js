import React, { useState, useEffect } from 'react';
import Nav from "../nav/nav"
import founder from "./../../static/images/nikke.jpeg"
import co_founder1 from "./../../static/images/fredrik.jpeg"
import co_founder2 from "./../../static/images/erik.jpeg"
import co_founder3 from "./../../static/images/axel.jpeg"


const About = () => {
    const[windowSize, setWindowSize] = useState(getWindowSize());

    function getWindowSize () {
        const {innerWidth, innerHeight} = window
        console.log(innerWidth)  
        return {innerWidth, innerHeight};
    }

    useEffect (() => {
        function handlewWindowResize(){
            setWindowSize(getWindowSize())
        }
        window.addEventListener('resize', handlewWindowResize)
        return () =>{
            window.removeEventListener('resize', handlewWindowResize)
        }
    },[])

    const founders = [
        {
            name: "Niklas Wretblad",
            title: "Founder",
            linkedin: "https://www.linkedin.com/in/niklaswretblad/",
            image: founder
        },
        {
            name: "Fredrik Gordh",
            title: "Co-Founder",
            linkedin: "https://www.linkedin.com/in/fredrik-gordh-riseby/",
            image: co_founder1
        },
        {
            name: "Erik Larsson",
            title: "Co-Founder",
            linkedin: "https://www.linkedin.com/in/erik-larsson-b19b42183/",
            image: co_founder2
        },
        {
            name: "Axel Wiksäter",
            title: "Co-Founder",
            linkedin: "https://www.linkedin.com/in/axel-wiks%C3%A4ter-536785218/",
            image: co_founder3
        }
    ]
    const FoundingPartners = () => {
        if (windowSize.innerWidth > 1100 ){
            return(
                <div className='row text-center'>
                    {founders.map((founder) => (
                        <div className="col-3">
                            <div className="portrait-container">
                                <img src={founder.image} alt="founder" className="portrait"/>
                                <p className="founder-name">{founder.name}</p>
                                <p className="founder-title">{founder.title}</p>
                                <p>
                                    <a href={founder.linkedin} class="fa fa-linkedin " id="linkedin-portrait"></a>
                                    {/* <i class="fa fa-envelope-o" aria-hidden="true"></i>     */}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            )
        }else{
            return(
                <div className='row text-center'>
                    {founders.map((founder) => (
                        <div className="col-12">
                            <div className="portrait-container">
                                <img src={founder.image} alt="founder" className="portrait"/>
                                <p className="founder-name">{founder.name}</p>
                                <p className="founder-title">{founder.title}</p>
                                <p>
                                    <a href={founder.linkedin} class="fa fa-linkedin " id="linkedin-portrait"></a>
                                    {/* <i class="fa fa-envelope-o" aria-hidden="true"></i>     */}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            )
        }

    }

    // could you write a function for portraits of the founding partners?
    // const FoundingPartners = () => {
    //     return(
    // <div className='row text-center'>
    //     {/* First Portrait Container (Left) */}
    //     <div className="col-3">
    //         <div className="portrait-container">
    //             <img src={founder} alt="founder" className="portrait"/>
    //             <p className="founder-name">Niklas Wretblad</p>
    //             <p className="founder-title">Founder</p>
    //                 <p>
    //                     <a href="https://www.linkedin.com/in/niklaswretblad/" class="fa fa-linkedin " id="linkedin-portrait"></a>
    //                     {/* <i class="fa fa-envelope-o" aria-hidden="true"></i>     */}
    //                 </p>
    //         </div>
    //     </div>

    //     {/* Second Portrait Container (Right) */}
    //     <div className="col-3">
    //         <div className="portrait-container ">
    //             <img src={co_founder1} alt="co-founder" className="portrait"/>
    //             <p className="founder-name">Fredrik Gordh</p>
    //             <p className="founder-title">Co-Founder</p>
    //             <p>
    //                 <a href="https://www.linkedin.com/in/fredrik-gordh-riseby/" class="fa fa-linkedin " id="linkedin-portrait"></a>
    //                 {/* <i class="fa fa-envelope-o" aria-hidden="true"></i>     */}
    //             </p>
    //         </div>
    //     </div>

    //     {/* Third Portrait Container (Left) */}
    
    //     <div className="col-3">
    //         <div className="portrait-container">
    //             <img src={co_founder2} alt="co-founder" className="portrait"/>
    //             <p className="founder-name">Erik Larsson</p>
    //             <p className="founder-title">Co-Founder</p>
    //             <p>
    //                 <a href="https://www.linkedin.com/in/erik-larsson-b19b42183/" class="fa fa-linkedin " id="linkedin-portrait"></a>
    //                 {/* <i class="fa fa-envelope-o" aria-hidden="true"></i>     */}
    //             </p>
    //         </div>
    //     </div>

    //     {/* Fourth Portrait Container (Right) */}
    //     <div className="col-3">
    //         <div className="portrait-container">
    //             <img src={co_founder3} alt="co-founder" className="portrait"/>
    //             <p className="founder-name">Axel Wiksäter</p>
    //             <p className="founder-title">Co-Founder</p>
    //             <p>
    //                 <a href="https://www.linkedin.com/in/axel-wiks%C3%A4ter-536785218/" class="fa fa-linkedin " id="linkedin-portrait"></a>
    //                 {/* <i class="fa fa-envelope-o" aria-hidden="true"></i>     */}
    //             </p>
    //         </div>
    //     </div>
    // </div>

    return(
        <div>
            <div class='about_background col-12' id="img-om-oss" >
                <Nav/>
                <div className='img-container'>
                    <h3 className='about_headline'> Contact Details</h3>
                    <img src="../static/images/studenthuset.jpg" alt="description"></img>
                </div>
            </div>
    
            <div className="row justify-content-center">
                <div className='first_text_container col-12'>
                    <div className="paragraph-1 col-10 mx-auto">
                        <h3>Who We Are</h3>
                        <p>
                        We are a student association at Linköping University devoted to the exploration, 
                        research and continuous learning of artificial intelligence. We cultivate connections with both
                        industry and academia through networking events, educational lectures, workshops and research projects.
                        We serve as a platform for members and partners to network, build professional relationships, and share knowledge.
                        </p>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className=' second_text_container col-12 justify-content-center'>
                    <div class="paragraph-2 col-8 mx-auto">
                        <h3>Vision</h3>
                        <p>
                        We are committed to organizing events that bridge the gap between students and the spheres of industry and academia. 
                        Through workshops, seminars, lectures and collaborative projects, we seek to broaden the AI and machine learning knowledge 
                        base of our student body, and to provide a clear view of potential career paths in these fields. The society is also meant to be a 
                        platform for engaged and ambitious students to garner internships or research opportunities.
                        </p>
                    </div>
                </div>
            </div>
            
            <div className='portrait_section_container row col-12 justify-content-center'>
                {windowSize.innerWidth > 1100 ?(
                    <div class="paragraph-4-desktop">
                        <h3 className="text-center">Founding Partners</h3>
                        <div className='portrait_container row col-12 justify-content-center'>
                            {FoundingPartners()}
                        </div>
                    </div>  
                ):(
                    <div class="paragraph-4-mobile">
                        <h3 className="text-center">Founding Partners</h3>
                        <div className='portrait_container col-12 justify-content-center'>
                            {FoundingPartners()}
                        </div>
                    </div>  
                )}
            </div>
        </div>    
    )
}

export default About;


{/* <div className='first_text_container row col-12 justify-content-center'>
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


</div> */}