import React from 'react';
import { HashLink } from 'react-router-hash-link';
import './Header.css'

const Header = () => {
    return (
        <nav class="navbar sticky-top navbar-expand-lg navbar-light bg-light">
            <div class="container">
                <a class="navbar-brand" href="#">Navbar</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <HashLink smooth to="#Home">
                                HOME
                            </HashLink>
                        </li>

                        <li class="nav-item">
                            <HashLink smooth to="#About">
                                ABOUT
                            </HashLink>
                        </li>

                        <li class="nav-item">
                            <HashLink smooth to="#Skill">
                                SKILL
                            </HashLink>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;