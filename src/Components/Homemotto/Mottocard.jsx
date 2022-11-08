import React from 'react'
import Card from 'react-bootstrap/Card';
import { FaCheck} from "react-icons/fa";

import style from './Homemotto.module.css'


function Mottocard({ mottoTitle, mottoText }) {
    return (
        <div className={style.mottocardreusabe}>
            <Card className={style.mottocardreusabe} variant="light"  >
                <Card.Body>
                    <FaCheck className={style.mottoicon}/>
                    <Card.Title style={{ fontSize: "30px" }}> {mottoTitle}</Card.Title>
                    <Card.Text>{mottoText}</Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Mottocard