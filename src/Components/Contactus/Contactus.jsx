import React from 'react'
import style from './Contactus.module.css'
import { FaInstagram, FaFacebook, FaTwitter, FaWhatsapp, FaGoogle, FaHome, FaBuilding, FaEnvelope, FaHeadset } from "react-icons/fa";

function Contactus() {
    return (
        <div className={style.contactcontainer}>
            <div className={style.iframecontainer}>
                {/* <iFrame className={style.iframe} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d474.5403012346742!2d77.33294873573787!3d19.15103918356489!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd1d7b5538b92b1%3A0x3a03493bcb53be08!2sZam%20Zam%20Garage!5e0!3m2!1sen!2sin!4v1667061029586!5m2!1sen!2sin" width="600" height="450">
                </iFrame> */}
                
                <iFrame className={style.iframe}  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d404.8432311871968!2d77.3333200607192!3d19.151077453600927!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd1d78fef3883b5%3A0xfeac1321ced066e7!2sNabeel%20Associates%20%26%20Construction!5e0!3m2!1sen!2sin!4v1667815514411!5m2!1sen!2sin" width="600" height="450" ></iFrame>
            </div>
            <div className={style.contactdetails} >
                <h1>Contact Us</h1>
                <p><FaBuilding />opposite Al-Hayat Hospital,Near Bharat medical,Degloor Naka,Nanded</p>
                <p><FaEnvelope />E-mai:Syedabubakarnoman@gmail.com</p>
                <p>Syed Nabeel Ali</p>
                <p><FaHeadset />Mobile No:+91 72766138000 </p>
                <p>Syed Abubakar Noman</p>
                <p><FaHeadset />Mobile No:+91 9175986748 </p>
                <h3>Connect us via Social Network</h3>
                <a href="https://www.instagram.com/nabeel_construction/" target="_blank" className={style.logo}><FaInstagram /></a>
                <a href="https://wa.me/919175986748" target="_blank" className={style.logo}><FaWhatsapp /></a>
                <a href="https://www.facebook.com/Nabeel-Construction-Electrical-Contractor-111145684723750/" target="_blank" className={style.logo}><FaFacebook /></a>
                <a href="https://www.google.com/" target="_blank" className={style.logo}><FaGoogle /></a>
            </div>
        </div>
    )
}

export default Contactus