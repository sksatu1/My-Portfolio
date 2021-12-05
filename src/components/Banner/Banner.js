import React from 'react';
import Typewriter from 'typewriter-effect';
import './Banner.css'
import satu1 from '../../images/satu-1.png'
import { FaDownload } from 'react-icons/fa';
const Banner = () => {
    return (
        <div style={{ marginTop: '60px' }} id="HomeBanner">

            <div className="container">
                <div className="row row-cols-1 row-cols-md-2 text-start">

                    <div className="col d-flex align-items-center justify-content-center">

                        <div>
                            <h4>Hello! <span>My name is</span> -</h4>
                            <h1>Sanat<span> Kumar</span></h1>


                            <div style={{ display: 'flex' }}>

                                <h4 style={{ paddingRight: '5px' }}>I am a</h4>

                                <h4><Typewriter
                                    options={{
                                        strings: ['Frontend Web Developer', 'React Developer'],
                                        autoStart: true,
                                        loop: true,
                                    }}
                                /></h4>
                            </div>

                            <p>I'm highly motivated,hardworking and creative person who can make you satisfied to develop a website.</p>
                            <a href="https://drive.google.com/file/d/1EBxwfj3gK72E623QWmy4x-NpO8q39vwY/view?usp=sharing" target="_blank"><button type="button" style={{ backgroundColor: '#df7954', color: 'white', padding: '10px 15px', borderRadius: '10px' }}><FaDownload /> Download Resume</button></a>
                        </div>

                    </div>

                    <div className="col d-flex align-items-center justify-content-end">
                        <div><img width="80%" src={satu1} alt="" /></div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Banner