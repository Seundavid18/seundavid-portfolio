import React from "react";
import Todo from './Images/Todo - Google Chrome 2_27_2022 12_07_43 PM.png'
import News from './Images/newss.PNG'
import Auth from './Images/Auth.PNG'
import Toc from './Images/Toc.PNG'
import Metabnb from './Images/metaimg.PNG'
import ReactAPPImg from './Images/rimg.PNG'
import Blog from './Images/blogdevImg.PNG'
import Bank from './Images/bankapiImg.PNG'
import {FaHtml5} from 'react-icons/fa'
import {FaCss3Alt} from 'react-icons/fa'
import {FaBootstrap} from 'react-icons/fa'
import {IoLogoJavascript} from 'react-icons/io'
import {GrReactjs} from 'react-icons/gr'
import {DiNodejsSmall} from 'react-icons/di'
import {SiMongodb} from 'react-icons/si'


const Portfolio = () => {
    return(
        <section className="pt-5 pb-5 bg-white" id="portfolio">
            <div className="container">
                <h1 className="text-center fs-2 fw-bold about-header pt-4 pb-4">My Portfolio</h1>
                <div className="port-deets">
                    <div className="d-lg-flex flex-nowrap gap-5 pt-5 pb-5">
                        <div className="about-flex">
                            <img src={Todo} alt="" style={{width: '100%', height: '100%'}} />
                        </div>
                        <div className="about-flex">
                            <div className="container">
                                <h4 className="fs-4 fw-bold pt-5 pb-3">To-do Web Application</h4>
                                <h6 className="portfolio-font pb-2">A web application that enables you add your To-do lists and allows you track your progress.</h6>
                                <div style={{display: "flex", flexDirection: "row", justifyCcontent: "center", paddingTop: "5px", paddingBottom: '45px'}}>
                                    <div><FaHtml5 className="me-3" color="#e34c26" size={20}/></div>
                                    <div><FaCss3Alt className="me-3" color="#264de4" size={20}/></div>
                                    <div><FaBootstrap className="me-3" color="#563d7c" size={20}/></div>
                                    <div><IoLogoJavascript color=" #f0db4f" size={20}/></div>
                                </div>
                                <a class="hire-me" href="https://seuntodo.netlify.app" target="blank">Visit site</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr />

            <div className="container">
                <div className="port-deets">
                    <div className="d-lg-flex flex-nowrap gap-5 pt-5 pb-5">
                        <div className="about-flex">
                            <img src={News} alt="" style={{width: '100%', height: '100%'}} />
                        </div>
                        <div className="about-flex">
                            <div className="container">
                                <h4 className="fs-4 fw-bold pt-5 pb-3">News Aggregator</h4>
                                <h6 className="portfolio-font pb-2">A web application that deploys latest news to the news feed from a news api for your consumption.</h6>
                                <div style={{display: "flex", flexDirection: "row", justifyCcontent: "center", paddingTop: "5px", paddingBottom: '45px'}}>
                                    <div><GrReactjs className="me-3" color="#61dbfb" size={20}/></div>
                                    <div><FaBootstrap className="me-3" color="#563d7c" size={20}/></div>
                                    <div><IoLogoJavascript color=" #f0db4f" size={20}/></div>
                                </div>
                                <a class="hire-me" href="https://seundavidnews.netlify.app" target="blank">Visit site</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr />

            <div className="container">
                <div className="port-deets">
                    <div className="d-lg-flex flex-nowrap gap-5 pt-5 pb-5">
                        <div className="about-flex">
                            <img src={Auth} alt="" style={{width: '100%', height: '100%'}} />
                        </div>
                        <div className="about-flex">
                            <div className="container">
                                <h4 className="fs-4 fw-bold pt-5 pb-3">Authentication Application</h4>
                                <h6 className="portfolio-font pb-2">This is a simple Authentication and Authorization log in and log out web application.</h6>
                                <div style={{display: "flex", flexDirection: "row", justifyCcontent: "center", paddingTop: "5px", paddingBottom: '45px'}}>
                                    <div><GrReactjs className="me-3" color="#61dbfb" size={20}/></div>
                                    <div><FaBootstrap className="me-3" color="#563d7c" size={20}/></div>
                                    <div><IoLogoJavascript color=" #f0db4f" size={20}/></div>
                                </div>
                                <a class="hire-me" href="https://seunauthapp.netlify.app" target="blank">Visit site</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr />

            <div className="container">
                <div className="port-deets">
                    <div className="d-lg-flex flex-nowrap gap-5 pt-5 pb-5">
                        <div className="about-flex">
                            <img src={Toc} alt="" style={{width: '100%', height: '100%'}} />
                        </div>
                        <div className="about-flex">
                            <div className="container">
                                <h4 className="fs-4 fw-bold pt-5 pb-3">An Auditing Company Website</h4>
                                <h6 className="portfolio-font pb-2">This is a websites for an accounting/auditing company</h6>
                                <div style={{display: "flex", flexDirection: "row", justifyCcontent: "center", paddingTop: "5px", paddingBottom: '45px'}}>
                                    <div><FaHtml5 className="me-3" color="#e34c26" size={20}/></div>
                                    <div><FaCss3Alt className="me-3" color="#264de4" size={20}/></div>
                                    <div><FaBootstrap className="me-3" color="#563d7c" size={20}/></div>
                                    <div><IoLogoJavascript color=" #f0db4f" size={20}/></div>
                                </div>
                                <a class="hire-me" href="https://www.tocprofessionals.com" target="blank">Visit site</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
            
             <div className="container">
                <div className="port-deets">
                    <div className="d-lg-flex flex-nowrap gap-5 pt-5 pb-5">
                        <div className="about-flex">
                            <img src={ReactAPPImg} alt="" style={{width: '100%', height: '100%'}} />
                        </div>
                        <div className="about-flex">
                            <div className="container">
                                <h4 className="fs-4 fw-bold pt-5 pb-3">React App</h4>
                                <h6 className="portfolio-font pb-2">This is a simple react application for the hng internship 9 task</h6>
                                <div style={{display: "flex", flexDirection: "row", justifyCcontent: "center", paddingTop: "5px", paddingBottom: '45px'}}>
                                    <div><GrReactjs className="me-3" color="#61dbfb" size={20}/></div>
                                    <div><FaBootstrap className="me-3" color="#563d7c" size={20}/></div>
                                    <div><IoLogoJavascript color=" #f0db4f" size={20}/></div>
                                </div>
                                <a class="hire-me" href="https://seundavid-hng-task-2.netlify.app" target="blank">Visit site</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
            
            <div className="container">
                <div className="port-deets">
                    <div className="d-lg-flex flex-nowrap gap-5 pt-5 pb-5">
                        <div className="about-flex">
                            <img src={Metabnb} alt="" style={{width: '100%', height: '100%'}} />
                        </div>
                        <div className="about-flex">
                            <div className="container">
                                <h4 className="fs-4 fw-bold pt-5 pb-3">Metabnb</h4>
                                <h6 className="portfolio-font pb-2">This is a simple react application for the hng internship 9 task</h6>
                                <div style={{display: "flex", flexDirection: "row", justifyCcontent: "center", paddingTop: "5px", paddingBottom: '45px'}}>
                                    <div><GrReactjs className="me-3" color="#61dbfb" size={20}/></div>
                                    <div><FaBootstrap className="me-3" color="#563d7c" size={20}/></div>
                                    <div><IoLogoJavascript color=" #f0db4f" size={20}/></div>
                                </div>
                                <a class="hire-me" href="https://seundavidmetabnb.netlify.app" target="blank">Visit site</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr />

            <div className="container">
                <div className="port-deets">
                    <div className="d-lg-flex flex-nowrap gap-5 pt-5 pb-5">
                        <div className="about-flex">
                            <img src={Blog} alt="" style={{width: '100%', height: '100%'}} />
                        </div>
                        <div className="about-flex">
                            <div className="container">
                                <h4 className="fs-4 fw-bold pt-5 pb-3">A Blog Web Application</h4>
                                <h6 className="portfolio-font pb-2">This is a blog web app that allow's users to register, login, create and edit posts, delete posts and so many other features.</h6>
                                <div style={{display: "flex", flexDirection: "row", justifyCcontent: "center", paddingTop: "5px", paddingBottom: '45px'}}>
                                    <div><GrReactjs className="me-3" color="#61dbfb" size={20}/></div>
                                    <div><FaBootstrap className="me-3" color="#563d7c" size={20}/></div>
                                    <div><IoLogoJavascript className="me-3" color=" #f0db4f" size={20}/></div>
                                    <div><DiNodejsSmall className="me-3" color=" #88b04a" size={20}/></div>
                                    <div><SiMongodb color=" #3e912f" size={20}/></div>
                                </div>
                                <a class="hire-me" href="https://seunblogapp.azurewebsites.net" target="blank">Visit site</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr />

            <div className="container">
                <div className="port-deets">
                    <div className="d-lg-flex flex-nowrap gap-5 pt-5 pb-5">
                        <div className="about-flex">
                            <img src={Bank} alt="" style={{width: '100%', height: '100%'}} />
                        </div>
                        <div className="about-flex">
                            <div className="container">
                                <h4 className="fs-4 fw-bold pt-5 pb-3">A Bank Web Application</h4>
                                <h6 className="portfolio-font pb-2">This is a web application for carrying out deposit, transfer and bills transactions</h6>
                                <div style={{display: "flex", flexDirection: "row", justifyCcontent: "center", paddingTop: "5px", paddingBottom: '45px'}}>
                                    <div><GrReactjs className="me-3" color="#61dbfb" size={20}/></div>
                                    <div><FaBootstrap className="me-3" color="#563d7c" size={20}/></div>
                                    <div><IoLogoJavascript className="me-3" color=" #f0db4f" size={20}/></div>
                                    <div><DiNodejsSmall className="me-3" color=" #88b04a" size={20}/></div>
                                    <div><SiMongodb color=" #3e912f" size={20}/></div>
                                </div>
                                <a class="hire-me" href="https://minibankapp.azurewebsites.net" target="blank">Visit site</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
        </section>
    )
}

export default Portfolio;
