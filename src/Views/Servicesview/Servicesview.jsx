import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import Architecht from '../../Components/Architecture & Interior Designing/ArchitectureInteriorDesigning'
import Servicecard from '../../Components/Servicecard/Servicecard'
import style from './Services.module.css'

function Servicesview() {
    return (
        <div className={style.serviceviewcontainer}>
            <div className={style.serviceviewcontainer1}>
                <Servicecard navigator={"/ ArchitectureInteriorDesigning"} serviceimagelink={"https://static.designboom.com/wp-content/uploads/2022/04/sin-nombre-casa-y-galeria-by-associates-architecture-designboom-05.jpg"} serviceTitle={"Architechture & Interior Designing"} serviceText={"We have a team of expert Engineers, Architects who are the best in their field and had done amazing jobs all throughout their career !"} />
                <Servicecard navigator={"/Construction"} serviceimagelink={"https://w0.peakpx.com/wallpaper/820/577/HD-wallpaper-engineering-construc-awesome-love.jpg"} serviceTitle={"Construction"} serviceText={"Team of Experts engineers  workers who are reliable!.Contruction as per vaastu"} />
            </div>
            <div className={style.serviceviewcontainer1}>
                <Servicecard navigator={"/ElectricalWiring"} serviceimagelink={"https://www.coynecollege.edu/wp-content/uploads/2020/06/Learn-the-Basics-of-Home-Electrical-Wiring-CoyneCollege-scaled.jpeg"} serviceTitle={"Electrical Wiring"} serviceText={"Architects & Interior Designers who are making dreams  in all budgets possible, don't worry about pricing , come to us we will take of your pocket"} />
                <Servicecard navigator={"/CCTV"} serviceimagelink={"https://www.cybergroup.in/wp-content/uploads/2019/10/CCTV-camera-India.jpg"} serviceTitle={"CCTV & Secuirty"} serviceText={"In this modernized world, everyone needs security, what if you get that too from us including in your build-design contract"} />
            </div>
            <div className={style.serviceviewcontainer1}>
                <Servicecard navigator={"/FeasibilityStudy"} serviceimagelink={"https://www.opconstruction.co.uk/wp-content/uploads/2016/06/BIM.png"} serviceTitle={"Feasibility Study"} serviceText={"Find out what you can build, how much it will cost, and how long it will take; quickly and inexpensively."} />
                <Servicecard navigator={"/CPM"} serviceimagelink={"https://cdn.sketchbubble.com/pub/media/catalog/product/optimized1/6/6/66b2bf1feda624b562c7f1dee65db70923c8ec965d418b262f2e20747de38751/construction-project-management-slide2.png"} serviceTitle={"Construction Management"} serviceText={"We have long working relationships with most architectural, engineering and construction-related consulting firms ."} />
            </div>
            <div className={style.serviceviewcontainer1}>
                <Servicecard navigator={"/Webdev"} serviceimagelink={"https://www.scnsoft.com/blog-pictures/custom-software-development/software-development-strategy_01-cover.png"} serviceTitle={"Website Developement"} serviceText={"Design-Develope-Deployement-Maintainance-Secuirty. Website development to boost and enhance your business offline as well as online."} />
                <Servicecard navigator={"/DigitalMarketing"} serviceimagelink={"https://marketbusinessnews.com/wp-content/uploads/2018/08/Digital-Marketing.jpg"} serviceTitle={"Digital Marketing"} serviceText={"Enhace and boost your sales by goin online to your target customer.We will help you out in this."} />
            </div>
            <Outlet />
        </div>
    )
}

export default Servicesview