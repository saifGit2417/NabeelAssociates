import React from 'react'
import style from './Homecarousal.module.css'
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

function Homecarousal() {
    return (
        <>
            <div className={style.mainconatiner}>
                <div className={style.carousaltextcontainer}>
                    <p className={style.text1}>NABEEL General Contractors & Architechts</p>
                    <p className={style.text2}>Building Dreams At most Affordable prices with Highest Quality & Promised Time Delievery!</p>
                    <p className={style.text3}>We believe in designing and building exceptional places where people and buisness will thrive</p>
                </div>
                <div className={style.carousalcontainer}>
                    <Carousel>
                        <Carousel.Item className={style.carousalimage}>
                            <img className={style.carousalimage} alt="images" src="https://www.iiad.edu.in/wp-content/uploads/2022/06/image001-1.webp" />
                        </Carousel.Item>
                        <Carousel.Item className={style.carousalimage}>
                            <img className={style.carousalimage} alt="images" src="http://cdn.home-designing.com/wp-content/uploads/2014/08/indoor-garden.jpg" />
                        </Carousel.Item>
                        <Carousel.Item className={style.carousalimage}>
                            <img className={style.carousalimage} alt="images" src="https://images.hindustantimes.com/rf/image_size_960x540/HT/p2/2018/01/29/Pictures/_2c7d2e92-04d4-11e8-8132-ce8c29606b52.jpg" />
                        </Carousel.Item>
                        <Carousel.Item className={style.carousalimage}>
                            <img className={style.carousalimage} alt="images" src="https://static.independent.co.uk/s3fs-public/thumbnails/image/2018/05/11/15/interior-design-tips.jpg?quality=75&width=982&height=726&auto=webp" />
                        </Carousel.Item>

                    </Carousel>
                </div>

            </div>
            <div className={style.tabviewcontainer}>
                <Carousel className={style.tabviewcontainer}>
                    <Carousel.Item className={style.tabcarousalimage}>
                        <img className={style.tabcarousalimage} src="https://www.iiad.edu.in/wp-content/uploads/2022/06/image001-1.webp" alt="First slide" />
                        <Carousel.Caption>
                            <p className={style.tabtext}>NABEEL General Contractors & Architechts</p>
                            <p className={style.tabtext}>Building Dreams At most Affordable prices with Highest Quality & Promised Time Delievery!</p>
                            <p className={style.tabtext}>We believe in designing and building exceptional places where people and buisness will thrive</p>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item className={style.tabcarousalimage}>
                        <img className={style.tabcarousalimage} src="http://cdn.home-designing.com/wp-content/uploads/2014/08/indoor-garden.jpg" alt="second slide" />
                        <Carousel.Caption>
                            <p className={style.tabtext}>NABEEL General Contractors & Architechts</p>
                            <p className={style.tabtext}>Building Dreams At most Affordable prices with Highest Quality & Promised Time Delievery!</p>
                            <p className={style.tabtext}>We believe in designing and building exceptional places where people and buisness will thrive</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item className={style.tabcarousalimage}>
                        <img className={style.tabcarousalimage} src="https://images.hindustantimes.com/rf/image_size_960x540/HT/p2/2018/01/29/Pictures/_2c7d2e92-04d4-11e8-8132-ce8c29606b52.jpg" alt="Third slide" />
                        <Carousel.Caption>
                            <p className={style.tabtext}>NABEEL General Contractors & Architechts</p>
                            <p className={style.tabtext}>Building Dreams At most Affordable prices with Highest Quality & Promised Time Delievery!</p>
                            <p className={style.tabtext}>We believe in designing and building exceptional places where people and buisness will thrive</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item className={style.tabcarousalimage}>
                        <img className={style.tabcarousalimage} src="https://static.independent.co.uk/s3fs-public/thumbnails/image/2018/05/11/15/interior-design-tips.jpg?quality=75&width=982&height=726&auto=webp" alt="Fourth slide" />
                        <Carousel.Caption>
                            <p className={style.tabtext}>NABEEL General Contractors & Architechts</p>
                            <p className={style.tabtext}>Building Dreams At most Affordable prices with Highest Quality & Promised Time Delievery!</p>
                            <p className={style.tabtext}>We believe in designing and building exceptional places where people and buisness will thrive</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                <div>
                </div>
            </div>

        </>
    )
}

export default Homecarousal