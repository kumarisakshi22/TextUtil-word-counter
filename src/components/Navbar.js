import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';


export default function Navbar(props) {
    return (
        <nav class={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}  >
            <div class="container-fluid">
                <a class="navbar-brand" href="#">{props.title}</a>
                <button class="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse active" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link" aria-current="page" href="/">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/about">About</a>
                        </li>


                    </ul>

                    
                </div>
            </div>
        </nav>


    )
}
Navbar.propTypes = {
    title: PropTypes.string,
    aboutText: PropTypes.string,
}
Navbar.defaultProps = {
    title: 'set title here',
    aboutText: 'AboutTexthere '
}