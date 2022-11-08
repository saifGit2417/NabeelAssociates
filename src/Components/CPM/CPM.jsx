import React from 'react'
import { useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import style from './CPM.module.css'

function CPM() {
  const navigate = useNavigate()
  const goprevious = () => {
    navigate("Services")
  }
  const gonext = () => {
    navigate("/Webdev")
  }
  const clickOnContact = () => {
    navigate("/Contactus")
  }
  // const [first, setfirst] = useState(second)

  return (
    <div className={style.maincontainer}>
      <div className={style.image}>
        <img className={style.image} src="https://cdn.sketchbubble.com/pub/media/catalog/product/optimized1/6/6/66b2bf1feda624b562c7f1dee65db70923c8ec965d418b262f2e20747de38751/construction-project-management-slide2.png" alt="" />
      </div>
      <div className={style.text}>
        <h1>Construction Management</h1>
        <p>brings our team approach for building to every project we do. This is especially true with the Construction Management (CM) delivery method
        </p>
        <h3>Construction Management work is very similar to design-build in that the architect and the contractor are involved in the project together very early on.</h3>
        <p>Whether you know exactly what you want or seek guidance in what design will work best for you, our team focuses on providing you with the best result.  Our approach is to listen first to you and design what you want, not what we think you may want.</p>
        <h3>We have long working relationships with most architectural, engineering and construction-related consulting firms throughout our career</h3>
        <p>The early collaboration of the consulting professionals and the contractor provides a more likely outcome that the project will be kept on budget and on schedule.</p>
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

export default CPM