import React from 'react';
import Nav from "../nav/nav"
import founders from "../../static/constants/founders"
import activeMembers from "../../static/constants/activeMembers"
import { useWindowSize } from '../../utils';


const About = () => {
    const windowSize = useWindowSize();

    const displayMembers = (memberGroup) => {
        if (windowSize.innerWidth > 1100 ){
            return(
                <div className='row justify-content-center text-center'>
                    {memberGroup.map((member) => (
                        <div className="col-3">
                            <div className="portrait-row">
                                <img src={member.image} alt="founder" className="portrait"/>
                                <p className="member-name">{member.name}</p>
                                <p className="member-title">{member.title}</p>
                                <p>
                                    <a href={member.linkedin} class="fa fa-linkedin " id="linkedin-portrait"></a>
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            )
        }else{
            return(
                <div className='row text-center justify-content-center'>
                    {memberGroup.map((member) => (
                        <div className="row">
                            <div className="portrait-row">
                                <img src={member.image} alt="member" className="portrait"/>
                                <p className="member-name">{member.name}</p>
                                <p className="member-title">{member.title}</p>
                                <p>
                                    <a href={member.linkedin} class="fa fa-linkedin " id="linkedin-portrait"></a>
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            )
        }
    }

    return(
        <div>
            <div class='about_background col-12' >
                <Nav/>
                <div className='img-container row'>
                    <h2 className='about_headline col-12'> About</h2>
                    <i class="fa fa-users col-4" id="group_icon" ></i>
                </div>
            </div>
                <div className=' first_text_container col-12 justify-content-center'>
                    <div class="paragraph-1 col-10 mx-auto">
                        <h3 className="paragraph-title">Contact</h3>
                        Feel free to reach out to us for any inquiries or collaboration opportunities. We are always open to new ideas, partnerships and curious members.
                        <p>
                        <br/>
                        {/* <a href="mailto:contact@liuais.com" class="fa fa-envelope-o" aria-hidden="true"></a> */}
                        <a href="https://www.facebook.com/liuaisociety" class="fa fa-facebook " id="fb-logo" ></a>
                        <a href="https://www.linkedin.com/company/liu-ai-society/" class="fa fa-linkedin " id="linkedin-logo"></a> 
                        <a href="https://www.instagram.com/liuaisociety/" class="fa fa-instagram " id="insta-logo"></a>                 
                        </p>
                    </div>
                </div>

            
             <div className='activeMembers_container'>
                {windowSize.innerWidth > 1100 ?(
                    <div class="paragraph-4-desktop">
                        <h3 className="paragraph-title text-center">Active Members</h3>
                        <div className='portrait-row row col-12 justify-content-center'>
                            {displayMembers(activeMembers)}
                        </div>
                    </div>  
                ):(
                    <div class="paragraph-4-mobile col-12">
                        <h3 className="paragraph-title text-center">Active Members</h3>
                        <div className='portrait-row col-12 justify-content-center'>
                            {displayMembers(activeMembers)}
                        </div>
                    </div>  
                )}
            </div>
            
            <div className='foundingMembers_container '>
                {windowSize.innerWidth > 1100 ?(
                    <div class="paragraph-4-desktop">
                        <h3 className="paragraph-title text-center">Founders</h3>
                        <div className='portrait-row row col-12 justify-content-center'>
                            {displayMembers(founders)}
                        </div>
                    </div>  
                ):(
                    <div class="paragraph-4-mobile">
                        <h3 className="paragraph-title text-center">Founders</h3>
                        <div className='portrait-row col-12 justify-content-center'>
                            {displayMembers(founders)}
                        </div>
                    </div>  
                )}
            </div>
        </div>    
    )
}
export default About;
