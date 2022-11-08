import React from 'react'
import Helpcard from './Helpcard'
import style from './Howwehelp.module.css'

function Howwehelp() {
    return (
        <div className={style.helpcontainer}>
            <div className={style.howwehelptext}>
                <h1>What may we help you with?</h1>
                <p>Select from choices below to get help from one of NABEEL's General Contractors & Architechts top professionals.</p>
            </div>
            <div className={style.helpcontainer1}>
                <div className={style.helpcontainer1a}>
                    <Helpcard helpTitle={"Design-Builder"} helpText={"I would like one firm to handle both design and construction"} />
                    <Helpcard helpTitle={"Construction Manager"} helpText={"I would like one firm to handle architecture and another firm to handle construction, but I need them to work together from the beginning of the project."} />
                </div>
                <div className={style.helpcontainer1a}>
                    <Helpcard helpTitle={"General Contractor"} helpText={"I already have a full set of plans. I just need a general contractor."} />
                    <Helpcard helpTitle={"Speak Vision"} helpText={"Talk to us. Let’s discuss your vision."} />
                </div>
            </div>
            <div className={style.helpcontainer1}>
                <div className={style.helpcontainer1a}>
                    <Helpcard helpTitle={"Architecture"} helpText={"I only need design work"} />
                    <Helpcard helpTitle={"Feasibility Study"} helpText={"I need due diligence. I want to know what I'm allowed to build, how much it will cost, what it will look like, and how long it will take to build it."} />
                </div>
                <div className={style.helpcontainer1a}>
                    <Helpcard helpTitle={"Residential or Other"} helpText={"I’m looking for help with a home project or have another question."} />
                    <Helpcard helpTitle={"Vision Turn Reality"} helpText={"I would like to make my vision into reality"} />
                </div>
            </div>

        </div>
    )
}

export default Howwehelp