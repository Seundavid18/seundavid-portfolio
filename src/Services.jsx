import React from "react";
import {AiOutlineDesktop} from 'react-icons/ai';
import {BsCodeSlash} from 'react-icons/bs';
import { SiMicrosoftazure } from "react-icons/si";
import { SiAzuredevops } from "react-icons/si";


function Services(){
    const services = [
        {
            icon: <AiOutlineDesktop  size={60} color='#400c7b'/>,
            head: 'Web Design',
            body: 'The styling and layout of pages with content, including text and images using web design tools like Html, Css, Bootstrap and more'

        },

        {
            icon: <BsCodeSlash size={60} color='#400c7b' />,
            head: 'Web Development',
            body: 'The work involved in developing a websites or web application. Building a website from ground-0, writing markups and coding'

        },

        {
            icon: <SiMicrosoftazure size={50} color='#400c7b'/>,
            head: 'Cloud Solutions',
            body: 'Delivering modern cloud solutions that solve today’s challenges and prepare you for tomorrow. Design, build, and manage applications seamlessly across multiple clouds, on-premises, and at the edge—using the platforms and tools that fit your business.'

        },

        {
            icon: <SiAzuredevops size={50} color='#400c7b'/>,
            head: 'DevOps and SRE',
            body: 'Helping organizations build, run, and scale applications across clouds while streamlining development with DevOps practices and ensuring reliability through SRE principles—delivering faster, secure, and resilient solutions.'
        },
    ]
    return(
        <section className="pt-5 pb-5 bg-white" id="services">
            <div className="container">
            <h1 className="text-center fs-2 fw-bold about-header pt-4 pb-5">Services</h1>
                <div className="row justify-content-center row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
                    {services.map((service, serv)  => {
                        return(
                            <div key={serv}  className="col service-Body">
                                <div className="card border-0 service-card">
                                    <div className="service-card-overlay">
                                        <div className="text-center pb-4">{service.icon}</div>
                                        <h6 className="text-center fs-4 fw-bold pb-3" style={{color: '#222'}}>{service.head}</h6>
                                        <h6 className="text-center service-font">{service.body}</h6>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>       
    )
}

export default Services;