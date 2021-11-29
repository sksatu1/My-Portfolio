import React from 'react';
import './About.css'
import { FaGithubSquare, FaLinkedin, FaFacebookSquare, FaInstagramSquare, FaDownload } from 'react-icons/fa';
const About = () => {
    return (
        <div className="aboutContainer py-3">
            <div style={{ paddingTop: '70px' }} id="About">
                <div><h1><span className="aboutHeading">About</span> me</h1></div>

                {/*------------- about details------------  */}
                <div className="container text-start">
                    <p>I'm a professional Frontend Web Developer.I'm very passionate and dedicated to my work and also very fast learner.I like to learn more and get my skill sets more polished and learn new technologies. I love programming as It's my passion.I truly believe that your success is my reason to smile!</p>
                    <p></p>
                </div>

                {/* ------------address section------------  */}
                <div className="container">
                    <div className="row row-cols-1 row-cols-md-2 mb-3">
                        <div className="col">
                            Residence : Bangladesh
                        </div>
                        <div className="col">
                            City : Bogura
                        </div>
                    </div>
                    <div className="row row-cols-1 row-cols-md-2">
                        <div className="col">
                            WhatsApp : +8801739061955
                        </div>
                        <div className="col">
                            E-mail : satueee18@gmail.com
                        </div>
                    </div>
                </div>

                {/*-------------- social media section ---------- */}
                <div className="socialMedia my-3">
                    <a href="https://www.facebook.com/profile.php?id=100007658595205" target="_blank"><span><FaFacebookSquare className='icons' /></span></a>
                    <a href="https://www.instagram.com/sanatkumarmahanta/?hl=en" target="_blank"><span><FaInstagramSquare className='icons' /></span></a>
                    <a href="https://www.linkedin.com/in/sanat-kumar-mohanta-b8aa53226/" target="_blank"><span><FaLinkedin className='icons' /></span></a>
                    <a href="https://github.com/sksatu1" target="_blank"><span><FaGithubSquare className='icons' /></span></a>
                </div>
                <a href="https://drive.google.com/file/d/1EBxwfj3gK72E623QWmy4x-NpO8q39vwY/view?usp=sharing" target="_blank"><button type="button" style={{ backgroundColor: '#df7954', color: 'white', padding: '10px 15px', borderRadius: '10px' }}><FaDownload /> Download Resume</button></a>
            </div>
        </div>
    );
};

export default About;