import React from 'react';
import Nav from "../nav/nav"
// import ai_society_logo from "./../../static/images/ai_liu_logo.png"
import { ReactComponent as LiuAisLogo } from './../../static/images/ai_liu_logo.svg';



const Home = () => {

    return(
        <div className="home-container">
            <div class='home_background col-12'>
                <Nav/>
                <div className='logo_container'>
                    <LiuAisLogo className='liu_ais_logo col-6'/>
                </div>
            </div>
            
            <div className="row justify-content-center">
                <div className='first_text_container col-12'>
                    <div className="paragraph-1 col-10 mx-auto">
                        <h3>Where does it come from?</h3>
                        <p>
                            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin
                            literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia,
                            looked up one of the more obscure Latin words,
                            consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.
                            Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC.
                            This book is a treatise on the theory of ethics, very popular during the Renaissance.
                            The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                        </p>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className=' second_text_container col-12 justify-content-center'>
                    <div class="paragraph-2 col-8 mx-auto">
                        <h3>  Where can I get some?</h3>
                        <p>
                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, 
                            or randomised words which don't look even slightly believable.
                            If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. 
                            All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.
                            It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.
                            The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;
