import React, { useEffect, useState } from 'react';
import './Projects.css'
import project1 from '../../images/projects/p-1/1.png'
import project2 from '../../images/projects/p-2/2.png'
import project3 from '../../images/projects/p-3/3.png'
import { Link } from 'react-router-dom';
import Project from '../Project/Project';
const Projects = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('/fakedb.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div id="Projects" className='projects-container'>
            <h1 style={{ color: 'coral', marginBottom: '10px' }}>PROJECTS</h1>

            <div className="container">
                <div className="row row-cols-1 row-cols-md-3 g-4">

                    {
                        services.map(service => <Project service={service}></Project>)
                    }


                    {/* <div className="col">
                        <div className="card h-100">
                            <img height='300px' src={project1} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">BD Bike Shop</h5>
                                <p style={{ color: 'black' }} className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.This content is a little bit longer.</p>
                                <Link></Link>
                            </div>
                        </div>
                    </div> */}

                    {/* <div className="col">
                        <div className="card h-100">
                            <img height='300px' src={project2} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Travel Planner</h5>
                                <p style={{ color: 'black' }} className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.This content is a little bit longer.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="card h-100">
                            <img height='300px' src={project3} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Private Hospital</h5>
                                <p style={{ color: 'black' }} className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>

        </div>
    );
};

export default Projects;