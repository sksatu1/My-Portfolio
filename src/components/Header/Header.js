import React from 'react';
import { HashLink } from 'react-router-hash-link';
import './Header.css'

const Header = () => {
    return (
        <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-dark ">
            <div className="container">
                <a className="navbar-brand text-light" href="#"><h2 className="headerName">Sanat Kumar</h2></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <HashLink smooth to="#Home">
                                HOME
                            </HashLink>
                        </li>

                        <li className="nav-item">
                            <HashLink smooth to="#About">
                                ABOUT
                            </HashLink>
                        </li>

                        <li className="nav-item">
                            <HashLink smooth to="#Skill">
                                SKILL
                            </HashLink>
                        </li>

                        <li className="nav-item">
                            <HashLink smooth to="#Projects">
                                PROJECTS
                            </HashLink>
                        </li>

                        <li className="nav-item">
                            <HashLink smooth to="#Contacts">
                                CONTACTS
                            </HashLink>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;