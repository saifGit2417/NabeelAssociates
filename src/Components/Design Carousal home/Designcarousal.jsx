import React from 'react'
import style from './Designcarousal.module.css'
import Button from 'react-bootstrap/Button'
import Carousel from 'react-bootstrap/Carousel';

function Designcarousal() {
    return (
        <div className={style.designcarousalcontainer}>
            <div className={style.carousalcontainer}>
                <Carousel fade className={style.carousalcontainer}>
                    <Carousel.Item className={style.carousalimage}>
                        <img className={style.carousalimage} src="https://www.mccree.com/wp-content/uploads/2021/12/homepage-featured-slider2.jpg" alt="First slide" />
                    </Carousel.Item>
                    <Carousel.Item className={style.carousalimage}>
                        <img className={style.carousalimage} src="https://www.mccree.com/wp-content/uploads/2021/12/homepage-featured-slider3.jpg" alt="second slide" />
                    </Carousel.Item>
                    <Carousel.Item className={style.carousalimage}>
                        <img className={style.carousalimage} src="https://www.mccree.com/wp-content/uploads/2022/01/Healthy-West-Orange-Front-Angle.jpg" alt="third slide" />
                    </Carousel.Item>
                </Carousel>
            </div>
            <div className={style.textcontainer}>
                <p className={style.text1}>Design Build Approach</p>
                <p className={style.text2}>With design-build, you hire a single firm to handle both your design and construction.</p>
                <p className={style.text3}>You deserve to work with someone honest who will protect your investment as if it was their own. <br /><strong>NABEEL General Contractors & Architechts</strong> design-build general contractor & architectural firm that skillfully addresses your discerning needs.</p>
                <Button  className='w-50'>Learn More &#8594;</Button>
            </div>

        </div>
    )
}

export default Designcarousal