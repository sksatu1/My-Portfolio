import React from 'react';
import './Skill.css'
const Skill = () => {
    return (
        <div style={{ paddingTop: '70px' }} id="Skill">
            <h1 style={{ color: 'coral', fontWeight: '700' }}>Skill</h1>

            <div className="row row-cols-1 row-cols-md-2 text-start container">

                <div className="col">
                    <img width="100%" src="https://i.ibb.co/zHH9T4L/skill.png" alt="" />
                </div>

                <div className="col d-flex flex-column justify-content-center">
                    <div className="progressBarContainer">
                        <h6>HTML</h6>
                        <div className="progress mb-3">
                            <div className="progress-bar" role="progressbar" style={{ width: '98%', backgroundColor: 'coral' }} aria-valuenow="98" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>

                        <h6>CSS</h6>
                        <div className="progress mb-3">
                            <div className="progress-bar" role="progressbar" style={{ width: '90%', backgroundColor: 'coral' }} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>

                        <h6>REACT</h6>
                        <div className="progress mb-3">
                            <div className="progress-bar" role="progressbar" style={{ width: '92%', backgroundColor: 'coral' }} aria-valuenow="92" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>

                        <h6>JAVA SCRIPT</h6>
                        <div className="progress mb-3">
                            <div className="progress-bar" role="progressbar" style={{ width: '93%', backgroundColor: 'coral' }} aria-valuenow="93" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>

                        <h6>TAILWIND CSS</h6>
                        <div className="progress mb-3">
                            <div className="progress-bar" role="progressbar" style={{ width: '85%', backgroundColor: 'coral' }} aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>

                        <h6>BOOTSTRAP</h6>
                        <div className="progress mb-3">
                            <div className="progress-bar" role="progressbar" style={{ width: '98%', backgroundColor: 'coral' }} aria-valuenow="98" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>

                        <h6>MATERIAL UI</h6>
                        <div className="progress mb-3">
                            <div className="progress-bar" role="progressbar" style={{ width: '85%', backgroundColor: 'coral' }} aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>

                        <h6>MONGODB</h6>
                        <div className="progress mb-3">
                            <div className="progress-bar" role="progressbar" style={{ width: '70%', backgroundColor: 'coral' }} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>

                        <h6>FIREBASE</h6>
                        <div className="progress mb-3">
                            <div className="progress-bar" role="progressbar" style={{ width: '90%', backgroundColor: 'coral' }} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Skill;