import React from "react";
import "./services.css";
import {FiCheck} from "react-icons/fi";

const Services = () => {
    return (
        <section id="services">
            <h5>What I Offer</h5>
            <h2>Services</h2>

            <div className="container services_container">
                <article className="service">
                    <div className="service_head">
                        <h3>UI/UX</h3>
                    </div>
                    <ul className="service_list">
                        <li>
                            <FiCheck className="service-list-icon"/>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        </li>
                        <li>
                            <FiCheck className="service-list-icon"/>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        </li>
                        <li>
                            <FiCheck className="service-list-icon"/>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        </li>
                        <li>
                            <FiCheck className="service-list-icon"/>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        </li>
                        <li>
                            <FiCheck className="service-list-icon"/>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        </li>
                        <li>
                            <FiCheck className="service-list-icon"/>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        </li>
                    </ul>
                </article>
                {/*END OF UI/UX*/}
                <article className="service">
                    <div className="service_head">
                        <h3>Web Development</h3>
                    </div>
                    <ul className="service_list">
                        <li>
                            <FiCheck className="service-list-icon"/>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        </li>
                        <li>
                            <FiCheck className="service-list-icon"/>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        </li>
                        <li>
                            <FiCheck className="service-list-icon"/>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        </li>
                        <li>
                            <FiCheck className="service-list-icon"/>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        </li>
                        <li>
                            <FiCheck className="service-list-icon"/>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        </li>
                        <li>
                            <FiCheck className="service-list-icon"/>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        </li>
                        <li>
                            <FiCheck className="service-list-icon"/>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        </li>
                    </ul>
                </article>
                {/*END OF WEB DEVELOPMENT*/}
                <article className="service">
                    <div className="service_head">
                        <h3>Content Creation</h3>
                    </div>
                    <ul className="service_list">
                        <li>
                            <FiCheck className="service-list-icon"/>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        </li>
                        <li>
                            <FiCheck className="service-list-icon"/>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        </li>
                        <li>
                            <FiCheck className="service-list-icon"/>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        </li>
                        <li>
                            <FiCheck className="service-list-icon"/>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        </li>
                        <li>
                            <FiCheck className="service-list-icon"/>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        </li>
                        <li>
                            <FiCheck className="service-list-icon"/>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        </li>
                    </ul>
                </article>
                {/*END OF CONTENT CREATION*/}
            </div>
        </section>
    )
}

export default Services;