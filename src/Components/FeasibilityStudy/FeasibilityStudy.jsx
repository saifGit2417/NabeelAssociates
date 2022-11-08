import React from 'react'
import { useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import style from './FeasibilityStudy.module.css'

function FeasibilityStudy() {
  const navigate = useNavigate()
  const goprevious = () => {
    navigate(-1)
  }
  const gonext = () => {
    navigate("/CPM")
  }
  const clickOnContact = () => {
    navigate("/Contactus")
  }
  return (
    <div className={style.maincontainer}>
      <div className={style.image}>
        <img className={style.image} src="https://www.opconstruction.co.uk/wp-content/uploads/2016/06/BIM.png" alt="" />
      </div>
      <div className={style.text}>
        <h1>Feasibility Study</h1>
        <p>Our feasibility studies start with a complete code review of your site to see what’s possible. This includes examining zoning, approved land uses, setback requirements, parking requirements, height and size restrictions, and more. You will receive a regulatory review report which will outline the findings and highlight any potential roadblocks to your development.</p>
        <h3> Regulatory Review</h3>
        <p>Whether you know exactly what you want or seek guidance in what design will work best for you, our team focuses on providing you with the best result.  Our approach is to listen first to you and design what you want, not what we think you may want.</p>
        <h3>Preliminary Design</h3>
        <p>According to your preferences and direction, we will develop a site plan, floor plans, and elevations (as required). Your style preferences and programmatic requirements inform the design, instead of us imposing our design style on you. Our architecture team sits next to our estimating team, so there is a constant dialog back-and-forth on how to keep costs low while still meeting all your requirements.</p>
        <h3>Budget Cost Estimates</h3>
        <p>After your approval of the preliminary design, we will develop a preliminary budget estimate. This estimate typically incudes the costs for building construction, suggested contingency, design and engineering fees, and project permit/ impact fees. We understand that your project has a budget and we will provide cost breakdowns in an open book format to allow for discussions of scope and budget. For the past ten years, our preliminary cost estimates have been accurate to within 5% of what your final project costs will be.</p>
        <h3>Preliminary Project Schedule</h3>
        <p>Finally, we will give you a preliminary schedule that depicts the major events and the respective times required for all activities from design through occupancy..</p>
        <p>You will find ease knowing our design team works in tandem with our construction team keeping the communication clear all while ensuring your project stays within your budget.</p>
        <div className={style.buttons}>
          <Button onClick={goprevious} className='mx-5 my-5' variant="success">&larr; Previous Service</Button>
          <Button onClick={gonext} className='mx-5 my-5' variant="success">Next Service &rarr;</Button>
        </div>
        <h3 style={{ color: "green", cursor: "pointer" }} onClick={clickOnContact}>Contact Us For More Info!</h3>
      </div>

    </div>
  )
}

export default FeasibilityStudy