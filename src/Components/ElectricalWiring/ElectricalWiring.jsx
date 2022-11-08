import React from 'react'
import { useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import style from './Electricalwiring.module.css'
function ElectricalWiring() {
  const navigate = useNavigate()
  const goprevious = () => {
    navigate(-1)
  }
  const gonext = () => {
    navigate("/CCTV")
  }
  const clickOnContact = () => {
    navigate("/Contactus")
  }
  return (
    <div>
      <div className={style.image}>
        <img className={style.image} src="https://www.coynecollege.edu/wp-content/uploads/2020/06/Learn-the-Basics-of-Home-Electrical-Wiring-CoyneCollege-scaled.jpeg" alt="" />
      </div>
      <div className={style.text}>
        <h1>Electrical Wiring (New & Maintenance)</h1>
        <h3>Benifits Of Hiring Us</h3>
        <h4>We have Experienced and trained staff on whom you can rely on</h4>
        <ul>
          <li><h6>Safety for all</h6></li>
          <li><h6>The proper way of doing the job</h6></li>
          <li><h6>Cost-effective</h6></li>
          <li><h6>Long-term safety</h6></li>
          <li><h6>Experienced and trained Staff</h6></li>
          <li><h6>Troubleshoot any issues with your electrical system</h6></li>
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

export default ElectricalWiring