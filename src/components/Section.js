import React from "react";
import'./styles/Section.scss'
import chris from './assests/me2.JPG'

const Section = () => {
    return(
        <div className="sections" id="About">

            <div className="section__container">

                <div className="section__img">
                    <img src={chris} alt=""/>
                </div>

                <div className="section__content">
                    <h1>About Me</h1>
                    <p>I am a QA Engineer with 4 years experience in the industry. With a creative insight into technology, along with the ability to use a broad selection of computing skills, 
                       I can bring an eclectic mix of attributes to the table due to working in a variety of roles and systems.
                       Within these roles, I have learned the importance of good communication skills and the need to build and maintain successful and meaningful relationships with co-workers, managers and clients.
                       I have also proven this by utilising his confident personality in my presentational skills.</p>
                </div>

            </div>

        </div>
    )
}

export default Section