import React from 'react';
import Nav from "../nav/nav"
import eventImg1 from "./../../static/images/event_image1.JPG"
import eventImg2 from "./../../static/images/event_image2.JPG"
import eventImg3 from "./../../static/images/event_image3.JPG"

const Event = () => {
    return(
        <div>
            <div class='event_background col-12' id="img-event">
                <Nav/>

                <h2 className='event_headline'>Events</h2>
                <div className='row' id="image_row">
                    <img src={eventImg1} alt="event" className="event_image col-3" />
                    <img src={eventImg2} alt="event" className="event_image col-3" />
                    <img src={eventImg3} alt="event" className="event_image col-3" />
                </div>
            </div>
            <div class="content-below">
           
            <div className='first_text_container row col-12 justify-content-center'>
                <div class="paragraph-1 col-6">
                    <h3 >Upcoming Events</h3>

                    <hr class="line_separator"/>

                    <h3 id="event_title"> Next event</h3>
                    <p id="event_description">
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

            

            
            <div className='second_text_container row col-12 justify-content-center'>
                <div class="paragraph-2 col-6">
                    <h3>  Past Events</h3>

                    <hr class="line_separator"/>

                    <h4 id="event_title"> Inspirational Lunch Lecture - Max Fisher @ Xorlabs, Zurich </h4>
                    <p id="event_description">
                    Join us for an inspiring lunch lecture with Max Fischer, a distinguished former student of LiU, 
                    who is currently working as a Machine Learning Engineer at the IT-security company xorlabs in Zurich, 
                    Switzerland. Previously Max wrote his Master Thesis at King (the makers of the game Candy Crush) and worked as a 
                    Data Scientist at Combient Mix. By going through a real and active project, Max will explain the different parts 
                    that are required to put a Machine Learning model into production. Through the presentation, he hopes to illustrate that 
                    the actual model usually is a small part of a larger picture. He will touch on topics like version control of data and models, 
                    data preprocessing, API integrations, regression testing of models etc.
                    </p>

                    <hr class="line_separator"/>

                    <h4 id="event_title"> Meet Combient MIX, A Silo AI Company </h4>
                    <p id="event_description">
                    We are incredibly thrilled to invite you all to the first event of LiU AI Society - an evening of AI talks, 
                    networking and pizza together with Combient Mix, a Silo AI Company!
                    Combient Mix is a data science and analytics company working exclusively for the Combient network, 
                    a network bringing together 35 of the largest companies in the Nordics (SEB, Investor, Scania and H&M Group are some examples of 
                    companies in the network). Mix was recently acquired by Silo AI, Europe’s largest private AI lab, creating an alliance that is an 
                    absolute powerhouse of European AI competence and sovereignty.
                    </p>
                </div>
            </div>

            </div>
        </div>

    
    )
}

export default Event;
