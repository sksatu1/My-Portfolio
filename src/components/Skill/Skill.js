import React from 'react';
import './Skill.css'
const Skill = () => {
    return (
        <div style={{ paddingTop: '60px' }} id="Skill">
            <h1 style={{ color: 'coral',fontWeight:'700' }}>Skill</h1>

            <div className="row row-cols-1 row-cols-md-2 text-start container">

                <div className="col">
                    <img width="100%" src="https://saruarhosenn.github.io/Front-End-Developer/assets/images/skill/skill.png" alt="" />
                </div>

                <div className="col d-flex flex-column justify-content-center">
                    <div className="progressBarContainer">
                        <div className="progress mb-3">
                            <div className="progress-bar" role="progressbar" style={{ width: '98%' }} aria-valuenow="98" aria-valuemin="0" aria-valuemax="100">HTML</div>
                        </div>
                        <div className="progress mb-3">
                            <div className="progress-bar" role="progressbar" style={{ width: '90%' }} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">CSS</div>
                        </div>
                        <div className="progress mb-3">
                            <div className="progress-bar" role="progressbar" style={{ width: '92%' }} aria-valuenow="92" aria-valuemin="0" aria-valuemax="100">REACT</div>
                        </div>
                        <div className="progress mb-3">
                            <div className="progress-bar" role="progressbar" style={{ width: '93%' }} aria-valuenow="93" aria-valuemin="0" aria-valuemax="100">JAVA SCRIPT</div>
                        </div>
                        <div className="progress mb-3">
                            <div className="progress-bar" role="progressbar" style={{ width: '85%' }} aria-valuenow="85" aria-valuemin="0" aria-valuemax="100">TAILWIND CSS</div>
                        </div>
                        <div className="progress mb-3">
                            <div className="progress-bar" role="progressbar" style={{ width: '98%' }} aria-valuenow="98" aria-valuemin="0" aria-valuemax="100">BOOTSTRAP</div>
                        </div>
                        <div className="progress mb-3">
                            <div className="progress-bar" role="progressbar" style={{ width: '85%' }} aria-valuenow="85" aria-valuemin="0" aria-valuemax="100">MATERIAL UI</div>
                        </div>
                        <div className="progress mb-3">
                            <div className="progress-bar" role="progressbar" style={{ width: '70%' }} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100">MONGODB</div>
                        </div>
                        <div className="progress mb-3">
                            <div className="progress-bar" role="progressbar" style={{ width: '90%' }} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">FIREBASE</div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Skill;