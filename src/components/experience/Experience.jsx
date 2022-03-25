import React from "react";
import "./experience.css";
import {BsFillPatchCheckFill} from "react-icons/bs";

const Experience = () => {
    return (
        <section id="experience">
            <h5>The things I've learned</h5>
            <h2>My skills</h2>

            <div className="container experience_container">
                <div className="experience_frontend">
                    <h3>TECHNOLOGIES</h3>
                    <div className="experience_content">
                        <article className="experience_details">
                            <BsFillPatchCheckFill className="experience_details-icon"/>
                            <div>
                                <h4>HTML</h4>
                                <small className="text-light">Intermediate</small>
                            </div>
                        </article>
                        <article className="experience_details">
                            <BsFillPatchCheckFill className="experience_details-icon"/>
                            <div>
                                <h4>CSS/SASS</h4>
                                <small className="text-light">Intermediate</small>
                            </div>
                        </article>
                        <article className="experience_details">
                            <BsFillPatchCheckFill className="experience_details-icon"/>
                            <div>
                                <h4>JavaScript</h4>
                                <small className="text-light">Intermediate</small>
                            </div>
                        </article>
                        <article className="experience_details">
                            <BsFillPatchCheckFill className="experience_details-icon"/>
                            <div>
                                <h4>Bootstrap</h4>
                                <small className="text-light">Intermediate</small>
                            </div>
                        </article>
                        <article className="experience_details">
                            <BsFillPatchCheckFill className="experience_details-icon"/>
                            <div>
                                <h4>React</h4>
                                <small className="text-light">Intermediate</small>
                            </div>
                        </article>
                        <article className="experience_details">
                            <BsFillPatchCheckFill className="experience_details-icon"/>
                            <div>
                                <h4>GIT</h4>
                                <small className="text-light">Intermediate</small>
                            </div>
                        </article>

                    </div>
                </div>
                {/*========END OF TECHNOLOGIES============*/}
                <div className="experience_backend">
                    <h3>OTHERS</h3>
                    <div className="experience_content">
                        <article className="experience_details">
                            <BsFillPatchCheckFill className="experience_details-icon"/>
                            <div>
                                <h4>Node JS</h4>
                                <small className="text-light">Basic</small>
                            </div>
                        </article>
                        <article className="experience_details">
                            <BsFillPatchCheckFill className="experience_details-icon"/>
                            <div>
                                <h4>MaterialUI</h4>
                                <small className="text-light">Basic</small>
                            </div>
                        </article>
                        <article className="experience_details">
                            <BsFillPatchCheckFill className="experience_details-icon"/>
                            <div>
                                <h4>WebStorm</h4>
                                <small className="text-light">Basic</small>
                            </div>
                        </article>
                        <article className="experience_details">
                            <BsFillPatchCheckFill className="experience_details-icon"/>
                            <div>
                                <h4>Windows/MacOS</h4>
                                <small className="text-light">Intermediate</small>
                            </div>
                        </article>
                         <article className="experience_details">
                            <BsFillPatchCheckFill className="experience_details-icon"/>
                            <div>
                                <h4>Terminal</h4>
                                <small className="text-light">Basic</small>
                            </div>
                        </article>
                         <article className="experience_details">
                            <BsFillPatchCheckFill className="experience_details-icon"/>
                            <div>
                                <h4>Docker</h4>
                                <small className="text-light">Basic</small>
                            </div>
                        </article>



                    </div>
                </div>
            </div>
        </section>)
}

export default Experience;