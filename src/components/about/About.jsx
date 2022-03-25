import React from "react";
import "./about.css";
import ME from "../../assets/about-me.jpg"


const About = () => {
    return (
        <section id="about">
            <h5>Get To Know</h5>
            <h2>About Me</h2>

            <div className="container about_container">
                <div className="about_me">
                    <div className="about_me-image">
                        <img src={ME} alt="About Image"/>
                    </div>
                </div>
                <div className="about_content">
                    <p>
                        I am begging Frontend Developer. Since last year I've learned HTML, CSS and JavaScript by myself, but in January 2022 I've decided to go on "JavaScript Developer" bootcamp.
                        That was good decision, because I improved my skills and learned basic React and more other things. Now I am creating my projects, this site is my first one personal page.
                        Why I want to join IT? Well, because I always liked to see effects of my work. For example: by changing a couple lines of code I see the differences on my project immediately.
                        Besides I've always liked computers. If you want some questions, just click on the button bellow.
                    </p>
                    <a href="#contact" className="btn btn-primary">Let's talk</a>
                </div>

            </div>
        </section>
    )
}

export default About