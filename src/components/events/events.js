import React from 'react';
import { Link } from 'react-router-dom';
import Nav from "../nav/nav"
import eventImg1 from "./../../static/images/event_image1.JPG"
import eventImg2 from "./../../static/images/event_image2.JPG"
import eventImg3 from "./../../static/images/event_image3.JPG"
import { useWindowSize } from '../../utils';

const Event = () => {
    const windowSize = useWindowSize();

    const EventImages = () => {
        if (windowSize.innerWidth > 1100){
            return(
                <div className='row' id="image_row">
                    <img src={eventImg1} alt="event" className="event_image col-4" />
                    <img src={eventImg2} alt="event" className="event_image col-4" />
                    <img src={eventImg3} alt="event" className="event_image col-4" />
                </div>
            )
        }else{
            return(
                    <img src={eventImg2} alt="event" className="event_image col-10" />
            )
        }
    }

    return(
        <div>
            <div class='event_background col-12' id="img-event">
                <Nav/>
                <h2 className='event_headline'>Events</h2>
                {EventImages()}
            </div>
            <div class="content-below">
           
            <div className='first_text_container '>
                <div class="paragraph-1 col-10 mx-auto">
                    <h3 >Upcoming Events</h3>
                    <p id="event_description">
                        For the latest information on upcoming events, please visit our Facebook page <Link to="https://www.facebook.com/liuaisociety/events">here</Link>.
                    </p>
                    <a href="mailto:no-one@snai1mai1.com?subject=look at this website&body=Hi,I found this website and thought you might like it http://www.geocities.com/wowhtml/">tell a friend</a>
                </div>
            </div>
            <div className='second_text_container '>
                <div class="paragraph-2 col-10 mx-auto">
                    <h3>  Past Events</h3>
                    <hr class="line_separator"/>
                    <div className="col-10 col-lg-8 mx-auto">
                        <h4 id="event_title"> Inspirational Lunch Lecture - Max Fisher @ Xorlabs, Zurich </h4>
                        <p id="event_description col-10 col-lg-6">
                        Join us for an inspiring lunch lecture with Max Fischer, a distinguished former student of LiU, 
                        who is currently working as a Machine Learning Engineer at the IT-security company xorlabs in Zurich, 
                        Switzerland. Previously Max wrote his Master Thesis at King (the makers of the game Candy Crush) and worked as a 
                        Data Scientist at Combient Mix. By going through a real and active project, Max will explain the different parts 
                        that are required to put a Machine Learning model into production. Through the presentation, he hopes to illustrate that 
                        the actual model usually is a small part of a larger picture. He will touch on topics like version control of data and models, 
                        data preprocessing, API integrations, regression testing of models etc.
                        </p>
                    </div>
                    <hr class="line_separator"/>
                    <div className="col-10 col-lg-9 mx-auto">
                        <h4 id="event_title"> Meet Combient MIX, A Silo AI Company </h4>
                        <p id="event_description ">
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
        </div>
    )
}
export default Event;
