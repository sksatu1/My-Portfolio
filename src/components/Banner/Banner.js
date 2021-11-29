import React from 'react';
import Typewriter from 'typewriter-effect';
import './Banner.css'
import satu1 from '../../images/satu-1.jpg'
const Banner = () => {
    return (
        <div style={{ marginTop: '50px' }} id="HomeBanner">
            <h1>Banner</h1>

            <div class="container">
                <div class="row row-cols-1 row-cols-md-2 text-start">
                    <div class="col">
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

                    </div>
                    <div class="col">
                        {/* <img width="100%" src={satu1} alt="" /> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner