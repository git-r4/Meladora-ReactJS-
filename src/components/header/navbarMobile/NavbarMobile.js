import React from 'react';
import { Container } from "react-bootstrap";
import { NavbarData } from "../navbarData/NavbarData";
import {NavLink} from "react-router-dom";

const NavbarMobile = ({reference}) => {
    const navbarMob = NavbarData.map(({path, name}) => {
        return(
            <React.Fragment key={path}>
                <NavLink to={path}
                         onClick={() => reference.current.classList.remove("activeNavMobile")}>{name}</NavLink>
            </React.Fragment>
        )
    })
    return(
        <div className="navsBox" ref={reference}>
            <Container>
                <div className="navsBox_navs">
                    {navbarMob}
                </div>
            </Container>
        </div>
    )
}
export default NavbarMobile;