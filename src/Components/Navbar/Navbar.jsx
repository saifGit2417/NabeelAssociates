import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink, Outlet, Link } from 'react-router-dom';
import style from './Navbar.module.css'
function Navbarnabeel() {
    return (
        <div className={style.navcontainer}>
            <Navbar expand="lg" className={style.navbarmain}>
                <Container fluid>
                    <Link to="/" end className={style.logo}>NABEEL&#8721; </Link>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll" className={style.mainlist}>
                        <Nav className="me-auto my-2 my-lg-0" navbarScroll>
                            <NavLink to="/" className={style.sublist} end >Home</NavLink>
                            <NavLink to="Services" className={style.sublist}>Services </NavLink>
                            <NavLink to="Ourwork" className={style.sublist}>Our Work</NavLink>
                            {/* <NavLink to="Achievements" className={style.sublist}>Achievements</NavLink> */}
                            <NavLink to="Contactus" className={style.sublist}>Contact Us</NavLink>
                            <NavLink to="Aboutusview" className={style.sublist}>About Us</NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Outlet />
        </div>
    )
}

export default Navbarnabeel