import React from 'react'
import { useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import style from './Construction.module.css'

function Construction() {
    const navigate = useNavigate()
    const goprevious = () => {
        navigate(-1)
    }
    const gonext = () => {
        navigate("/Electricalwiring")
    }
    const clickOnContact = () => {
        navigate("/Contactus")
    }
    return (
        <div className={style.maincontainer}>
            <div className={style.image}>
                <img className={style.image} src="https://www.akbconsultants.com/blog/wp-content/uploads/2021/05/building-construction.jpg" alt="" />
            </div>
            <div className={style.text}>
                <h1>Construction & General Contracting</h1>
                <p>NABEEL's General Contractors & Architects is one of the top construction companies . Earning recognitions regularly from industry associations, publications, and the communities in which we serve.
                    Has a long history of collaborating with our peer architects. To your advantage, we review the provided architectural plans and prepare them to the conventions that work best with our construction team.
                </p>
                <h3>Your architectural plans are complete. Now you’re ready to hire your contractor.</h3>
                <p>We're general contractors who work hard to prevent change orders.
                    This process typically translates into cost-saving opportunities, verification of constructability and the clarification of standards. We smooth out the construction process because we anticipate and avoid many of the complicating “translation factors” that emerge between architects and contractors.</p>
                <h3>Our unique expertise saves you stress, time and money.</h3>
                <p>We have offered commercial general contractor services to the commercial and residentials.</p>
                <div className={style.buttons}>
                    <Button onClick={goprevious} className='mx-5 my-5' variant="success">&larr; Previous Service</Button>
                    <Button onClick={gonext} className='mx-5 my-5' variant="success">Next Service &rarr;</Button>
                </div>
                <h3 style={{ color: "green", cursor: "pointer" }} onClick={clickOnContact}>Contact Us For More Info!</h3>

            </div>
        </div>
    )
}

export default Construction