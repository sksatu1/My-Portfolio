import React from 'react';
import { Link } from 'react-router-dom';
import './Project.css'
const Project = ({ service }) => {
    const { id, name, img1, img2, img3, info } = service;
    return (
        <div className="col project">
            <div className="card h-100">
                <img height='300px' src={img1} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                </div>
                <Link to={`/explore/${id}`}><button className='explore-btn'>Explore</button></Link>
            </div>
        </div>
    );
};

export default Project;