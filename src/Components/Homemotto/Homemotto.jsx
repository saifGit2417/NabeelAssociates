import React from 'react'
import Mottocard from './Mottocard'
import style from './Homemotto.module.css'

function Homemotto() {
    return (
        <div className={style.parentmotto}>
            <div className={style.textmotto}>
                <p style={{ color: "#748495" }}>Designed & Built Right</p>
                <h1>This is our motto created to encompass our founding principles.</h1>
                <br />
                <p>NABEEL General Contractors & Architechts has believed in doing right by others. This means not cutting corners, doing things right the first time, and delivering quality buildings on time and within budget.  We believe you deserve a building that will last for generations, not just a few years.</p>
            </div>
            <div className={style.mottocardcontainer}>
                <div className={style.mottocard}>
                    <Mottocard mottoTitle={"Design-Build"} mottoText={"Hiring one firm to handle both design and construction."} />
                    <Mottocard mottoTitle={"Construction Management"} mottoText={"Hiring a general contractor alongside the architect in the beginning of the project ensures that your project is designed within your budget and schedule."} />
                </div>
                <div className={style.mottocard}>
                    <Mottocard mottoTitle={"General Contractor"} mottoText={"Once permit-ready drawings are complete, we are happy to provide a competitive bid for construction"} />
                    <Mottocard mottoTitle={"Architecture & Engineering"} mottoText={"Design services are offered through our design-build process."} />
                </div>
            </div>
        </div>
    )
}

export default Homemotto