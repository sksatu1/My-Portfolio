import React from 'react';
import { FaCss3, FaHtml5, FaReact, FaJs, FaBootstrap } from 'react-icons/fa';
import { SiFirebase, SiMaterialui, SiMongodb, SiTailwindcss } from 'react-icons/si';
import './Skill.css'
const Skill = () => {
    return (
        <div style={{ paddingTop: '70px' }} id="Skill">
            <h1 style={{ color: 'coral', fontWeight: '700', fontSize: '40px' }}>Skill</h1>

            <div class="container">
                {/*--------------------------- parrent grid---------------------------  */}
                <div class="row row-cols-2">

                    <div class="col d-flex justify-content-center align-items-center">
                        <div>
                            <div><span className="skillHeading">Comfortable</span> : JavaScript, ES6, React,React Router, Bootstrap, Material UI, HTML, CSS, MongoDB
                            </div>
                            <br />

                            <div>
                                <span className="skillHeading">Familiar</span> : TypeScript, Node.js, Express.js, React Bootstrap, TailwindCSS
                            </div>
                            <br />

                            <div>
                                <span className="skillHeading">Tools</span> : Git, VS Code, Chrome Dev Tools,  Heroku, Netlify, Firebase
                            </div>
                        </div>
                    </div>

                    <div class="col">
                        {/*---------------------------------- children grid ------------------------------- */}
                        <div class="container" style={{ padding: '100px 0' }}>
                            <div class="row row-cols-1 row-cols-md-3 g-5">
                                <div class="col">
                                    <div>HTML5</div>
                                    <FaHtml5 className="skilllIcon" style={{ fontSize: "30px" }} />
                                </div>
                                <div class="col">
                                    <div>CSS</div>
                                    <FaCss3 className="skilllIcon" style={{ fontSize: "30px" }} /></div>
                                <div class="col">
                                    <div>REACT</div>
                                    <FaReact className="skilllIcon" style={{ fontSize: "30px" }} /></div>
                                <div class="col">
                                    <div>JS</div>
                                    <FaJs className="skilllIcon" style={{ fontSize: "30px" }} />
                                </div>
                                <div class="col">
                                    <div>Bootstrap</div>
                                    <FaBootstrap className="skilllIcon" style={{ fontSize: "30px" }} />
                                </div>
                                <div class="col">
                                    <div>Material UI</div>
                                    <SiMaterialui className="skilllIcon" style={{ fontSize: "30px" }} />
                                </div>
                                <div class="col">
                                    <div>Tailwindcss</div>
                                    <SiTailwindcss className="skilllIcon" style={{ fontSize: "30px" }} />
                                </div>
                                <div class="col">
                                    <div>Mongo DB</div>
                                    <SiMongodb className="skilllIcon" style={{ fontSize: "30px" }} />
                                </div>
                                <div class="col">
                                    <div>Firebase</div>
                                    <SiFirebase className="skilllIcon" style={{ fontSize: "30px" }} />
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skill;