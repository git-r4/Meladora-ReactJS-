import React from 'react';
import {useRef} from "react";
import {Container, Row, Col} from "react-bootstrap";
import {NavLink, Link} from "react-router-dom";

import {
    FaFacebookF,
    FaTwitter,
    FaLinkedinIn,
    FaInstagram,
    FaYoutube,
    FaBars
} from 'react-icons/fa';
import {BsFillTelephoneFill} from 'react-icons/bs';

//components
import navbarBrand from '../../../img/navbarBrandLogo.png';
import {NavbarData} from "../navbarData/NavbarData";
import NavbarMobile from "../navbarMobile/NavbarMobile";

const NavbarDesktop = (props) => {
    let reference = useRef();

    let navbarData = NavbarData.map(({path, name}) => {
        return(
            <li key={path}>
                <NavLink to={path}>{name}</NavLink>
            </li>
        )
    })

    let checkNavbarMobile = () => {
        reference.current.classList.toggle("activeNavMobile");
    }

    return(
        <React.Fragment>
            <div className="navbarDesk">
                <Container className="containerZIndex backColorFFF">
                    <Row>
                        <Col lg={12} md={12} sm={12}>
                            <div className="contactNav">
                                <div className="contactNav_number">
                                    <div><BsFillTelephoneFill /></div>
                                    <p>(099) 998 99 99</p>
                                </div>
                                <div className="contactNav_socialNetwork">
                                    <ul>
                                        <li><FaFacebookF /></li>
                                        <li><FaTwitter /></li>
                                        <li><FaLinkedinIn /></li>
                                        <li><FaInstagram /></li>
                                        <li><FaYoutube /></li>
                                    </ul>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={12} md={12} sm={12}>
                            <div className="navbarLine"></div>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={12} md={12} sm={12}>
                            <div className="nav">
                                <div className="nav_brandLogo">
                                    <Link to="/">
                                        <img src={navbarBrand} alt={`navbar-brand`} />
                                    </Link>
                                </div>
                                <div className="nav_navRouter">
                                    <ul>
                                        {navbarData}
                                    </ul>
                                </div>
                                <div className="nav_navRouterMobile">
                                    <div className="nav_navRouterMobile_bars">
                                        <button type="button"
                                                onClick={checkNavbarMobile}>
                                            <FaBars />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <NavbarMobile reference={reference} />
            </div>
            <div className="backImage"></div>
        </React.Fragment>
    )
}
export default NavbarDesktop;