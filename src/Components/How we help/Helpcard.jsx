import React from 'react'
import style from './Howwehelp.module.css'
import Card from 'react-bootstrap/Card';

function Helpcard({ helpTitle, helpText }) {
    return (
        <div className={style.helpcard}>
            <Card className={style.helpcard} style={{ color: "black" }} >
                <Card.Body>
                    <Card.Title> {helpTitle}</Card.Title>
                    <Card.Text>{helpText}</Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Helpcard