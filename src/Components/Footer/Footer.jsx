import React from 'react'
import style from './Footer.module.css'
import { FaInstagram, FaFacebook, FaTwitter, FaWhatsapp, FaGoogle, FaHome, FaBuilding, FaEnvelope, FaHeadset } from "react-icons/fa";
import { Link, Outlet } from 'react-router-dom';



function Footernabeel() {
    return (
        <div className={style.footercontainer}>
            <div className={style.logocontainer}>
                <p className={style.social}>Get connected with us on social networks:</p>
                <div className={style.logocontainer1}>
                    <a href="https://www.instagram.com/nabeel_construction/" target="_blank" className={style.logo}><FaInstagram /></a>
                    <a href="https://www.facebook.com/Nabeel-Construction-Electrical-Contractor-111145684723750/" target="_blank" className={style.logo}><FaFacebook /></a>
                    <a href="https://wa.me/919175986748" target="_blank" className={style.logo}><FaWhatsapp /></a>
                    <a href="https://www.google.com/" target="_blank" className={style.logo}><FaGoogle /></a>
                </div>
            </div>
            <div className={style.brandcontainer}>
                <div className={style.nabeelbrand}>
                    <h1>NABEEL 	&#8721; ENTERPRISES</h1>
                    <p>Nabeel Enterprises established to provide the best quality product & services at your doorstep at the most affordable and market competetive prices. </p>
                </div>
                <div className={style.services}>
                    <p style={{ fontSize: "30px" }}>Services</p>
                    <Link className={style.servicelink} to=" ArchitectureInteriorDesigning">Architecture & Interior Designing</Link>
                    <Link className={style.servicelink} to="Construction">Construction</Link>
                    <Link className={style.servicelink} to="ElectricalWiring">Electrical Wiring</Link>
                    <Link className={style.servicelink} to="CCTV">CCTV & Secuirty</Link>
                    <Link className={style.servicelink} to="FeasibilityStudy">Feasibility Study</Link>
                    <Link className={style.servicelink} to="CPM">Construction Management</Link>
                    <Link className={style.servicelink} to="Webdev">Website Developement</Link>
                    <Link className={style.servicelink} to="DigitalMarketing">Digital Marketing</Link>
                </div>
                <div className={style.contactfooter}>
                    <p style={{ fontSize: "30px" }}>Contact</p>
                    {/* <FaHome /> */}
                    <p className={style.adress}><FaBuilding />Nabeel Construction & Electricals <br />opposite to Bharat Hospital,Degloor <br /> Naka,Nnaded.431605</p>
                    <p className={style.adress}><FaEnvelope />Syedabubakarnoman@gmail.com</p>
                    <p className={style.adress}><FaHeadset />+91 9876543210</p>


                </div>
            </div>
            <p style={{ textAlign: "center" ,color:"white"}}>© NABEEL ENTERPRISES pvt. ltd. All Rights Reserved</p>
            <Outlet />
        </div>
    )
}

export default Footernabeel