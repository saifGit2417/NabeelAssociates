import React from 'react'
import { useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import style from './CCTV.module.css'

function CCTV() {
  const navigate = useNavigate()
  const goprevious = () => {
    navigate(-1)
  }
  const gonext = () => {
    navigate("/FeasibilityStudy")
  }
  const clickOnContact = () => {
    navigate("/Contactus")
  }
  return (
    <div>
      <div className={style.image}>
        <img className={style.image} src="https://www.cybergroup.in/wp-content/uploads/2019/10/CCTV-camera-India.jpg" alt="" />
      </div>
      <div className={style.text}>
        <h1>CCTV security sale & installation</h1>
        <h3>How we can help you with it?</h3>
        <ul>
          <li>We provide an all-in-one solution starting from construction, wiring, and CCTV installation.</li>
          <li>One Organization that can sync in perfectly for wiring and installation.</li>
          <li>Long working experience in installations.</li>
          <li>Equiped and Update with new technologies and methods.</li>
          <li>Experienced  & reliable workforce. </li>
          <li>Workers had done respective courses and mastered the skill.</li>
        </ul>
     

        <div className={style.buttons}>
          <Button onClick={goprevious} className='mx-5 my-5' variant="success">&larr; Previous Service</Button>
          <Button onClick={gonext} className='mx-5 my-5' variant="success">Next Service &rarr;</Button>
        </div>
        <h3 style={{ color: "green", cursor: "pointer" }} onClick={clickOnContact}>Contact Us For More Info!</h3>
      </div>
    </div>
  )
}

export default CCTV