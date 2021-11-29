import React from 'react';

const Skill = () => {
    return (
        <div style={{ paddingTop: '60px' }} id="Skill">
            <h1>Skill</h1>

            <div className="row row-cols-1 row-cols-md-2 text-start container">

                <div className="col">
                    <img width="100%" src="https://saruarhosenn.github.io/Front-End-Developer/assets/images/skill/skill.png" alt="" />
                </div>

                <div className="col">
                    <div className="progress">
                        <div className="progress-bar" role="progressbar" style={{ width: '25%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Skill;