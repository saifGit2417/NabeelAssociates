import React from 'react'
import { useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import style from './ArchitectureInteriorDesigning.module.css'

function ArchitectureInteriorDesigning() {
    const navigate = useNavigate()
    const goprevious = () => {
        navigate("/Services")
    }
    const gonext = () => {
        navigate("/Construction")
    }
    return (
        <div className={style.maincontainer}>
            <div className={style.image}>
                <img className={style.image} src="https://cuttingedgeds.com/wp-content/uploads/2019/08/Difference-between-interior-design-and-interior-architecture.png" alt="" />
            </div>
            <div className={style.text}>
                <h1>Architecture-Engineering-Interior Designing</h1>
                <p>Design services are offered through our design-build process. McCree offers architecture services with our in-house team, but also collaborates with outside architectural firms.
                    By offering these services in-house, you gain efficiency with communication amongst all our team members.  In fact, everyone is working together at the same location on your project saving you time and money.
                </p>
                <h3>NABEEL’s team includes licensed Architects, professional engineers, CAD designers, architectural designers, and conceptual designers.</h3>
                <p>Whether you know exactly what you want or seek guidance in what design will work best for you, our team focuses on providing you with the best result.  Our approach is to listen first to you and design what you want, not what we think you may want.</p>
                <h3>Quality Construction Starts With Quality Design</h3>
                <p>In addition to getting the design you want, our team provides a “buildable” set of drawings, not just what will get through permitting.  By designing a “buildable” set of plans, there is less risk to you during construction of mistakes happening or questions arising. The advantage of being both a design and construction firm is we know what needs to be on the plans to build the project successfully.</p>
                <p>You will find ease knowing our design team works in tandem with our construction team keeping the communication clear all while ensuring your project stays within your budget.</p>
                <div className={style.buttons}>
                    <Button onClick={goprevious} className='mx-5 my-5' variant="success">&larr; Previous Service</Button>
                    <Button onClick={gonext} className='mx-5 my-5' variant="success">Next Service &rarr;</Button>
                </div>
            </div>

        </div>
    )
}

export default ArchitectureInteriorDesigning