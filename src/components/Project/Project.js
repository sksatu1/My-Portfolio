import React from 'react';
import { Link } from 'react-router-dom';
import './Project.css'
const Project = ({ service }) => {
    const { id, name, img1, liveSite, clientSite, serverSite } = service;
    return (
        <div className="col project">
            <div style={{ background: 'rgba(0,0,0,0.2)' }} className="card h-100">
                <img height='300px' src={img1} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                </div>
                <Link to={`/explore/${id}`}><button className='explore-btn'>Explore</button></Link>
                <div><a href={liveSite}>Live site</a> | <a href={clientSite}>Github client</a> | {serverSite && <a href={serverSite}>Github server</a>}</div>
            </div>
        </div>
    );
};

export default Project;