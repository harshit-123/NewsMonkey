import React from 'react'
// import PropTypes from 'prop-types'
import { Link } from "react-router-dom";
const Navbar = () => {
    return (
        <div>
            <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
                <Link className="navbar-brand" to="/">NewsMonkey</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul style={{ paddingLeft: '201px' }} className="navbar-nav mr-auto">
                        <li className="nav-item"><Link className="nav-link" to="/"><i style={{ margin: '0 5px 0 -11px' }} className="fas fa-home"></i>Home |<span className="sr-only">(current)</span></Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/about"><i style={{ margin: '0 5px 0 -11px' }} className="fas fa-poll-h"></i>About |</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/business"><i style={{ margin: '0 5px 0 -11px' }} className="fas fa-briefcase"></i>Business |</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/entertainment"><i style={{ margin: '0 5px 0 -11px' }} className="fas fa-icons"></i>Entertainment |</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/general"><i style={{ margin: '0 5px 0 -11px' }} className="fas fa-dice-d20"></i>General |</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/health"><i style={{ margin: '0 5px 0 -11px' }} className="fas fa-heartbeat"></i>Health |</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/science"><i style={{ margin: '0 5px 0 -11px' }} className="fas fa-robot"></i>Science |</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/sports"><i style={{ margin: '0 5px 0 -11px' }} className="fas fa-running"></i>Sports |</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/technology"><i style={{ margin: '0 5px 0 -11px' }} className="fas fa-rocket"></i>Technology |</Link></li>
                    </ul>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        width: '100px',
                        cursor: 'pointer'
                    }}>
                        <i style={{ color: '#ffffff' }} className="fab fa-facebook"></i>
                        <i style={{ color: '#ffffff' }} className="fab fa-instagram"></i>
                        <i style={{ color: '#ffffff' }} className="fab fa-twitter"></i>
                        <i style={{ color: '#ffffff' }} className="fab fa-google-plus-g"></i>

                    </div>

                </div>
            </nav>
        </div>
    )
}

export default Navbar
