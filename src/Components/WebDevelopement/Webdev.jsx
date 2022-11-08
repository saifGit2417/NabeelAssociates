import React from 'react'
import { useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import style from './Webedev.module.css'
import { FaComments, FaHeadset, FaChromecast } from "react-icons/fa";
function Webdev() {
  const navigate = useNavigate()
  const goprevious = () => {
    navigate(-1)
  }
  const gonext = () => {
    navigate("/Services")
  }
  const clickOnContact = () => {
    navigate("/Contactus")
  }
  return (
    <div className={style.maincontainer}>
      <div className={style.image}>
        <img className={style.image} src="https://www.antraajaal.in/images/resource/web-development.jpg" alt="" />
      </div>
      <div className={style.text}>
        <h1>WEB DEVELOPMENT</h1>
        <h4>Hire experts to create your website and boost your company's success and monetary growth. With us, you can count on top-notch web development services.</h4>
        <div className={style.steps}>
          <div  className={style.stepcontainer}>
            <h1> Step1<FaComments /></h1>
            <h3>Connect with our experts</h3>
            <p>Fix an appointment with our <br /> web development experts</p>
          </div>
          <div   className={style.stepcontainer}>
            <h1>Step2 <FaHeadset /></h1>
            <h3> Explain your needs</h3>
            <p>Describe all of your website-related needs. <br /> Our web development experts are ready to help.</p>
          </div>
          <div   className={style.stepcontainer}>
            <h1>Step3 <FaChromecast /></h1>
            <h3> Complete web development</h3>
            <p>We provide ongoing support even after the website goes live.</p>
          </div>
        </div>
        <h2> Web Development Process-Complete Package</h2>
        <ol>
          <li>Collecting Information</li>
          <li>Planning</li>
          <li> Design</li>
          <li>Development</li>
          <li>Testing</li>
          <li> Launch</li>
          <li>  Maintenance</li>
        </ol>
        <div className={style.buttons}>
          <Button onClick={goprevious} className='mx-5 my-5' variant="success">&larr; Previous Service</Button>
          <Button onClick={gonext} className='mx-5 my-5' variant="success">Next Service &rarr;</Button>
        </div>
        <h3 style={{ color: "green", cursor: "pointer" }} onClick={clickOnContact}>Contact Us For More Info!</h3>
      </div>
    </div>

  )
}

export default Webdev