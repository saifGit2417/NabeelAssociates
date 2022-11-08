import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import style from './Servicecard.module.css'
import { NavLink, Outlet, useNavigate } from 'react-router-dom';

function Servicecard({ serviceimagelink, serviceTitle, serviceText, navigator }) {
    const navigate = useNavigate()
    const followLink = () => {
        navigate(navigator)
    }
    return (
        <div>
            <Card className={style.servicecard}>
                <Card.Img variant="top" src={serviceimagelink} className={style.serviceimage} />
                <Card.Body>
                    <Card.Title style={{ fontWeight: "bolder" }}>{serviceTitle}</Card.Title>
                    <Card.Text>{serviceText}  </Card.Text>
                    <Button variant="success" onClick={followLink}>Know More &#8594;...</Button>
                </Card.Body>
            </Card>
        </div>
    );
}

export default Servicecard;