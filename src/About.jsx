import {HiOutlineMail} from 'react-icons/hi'
import {BiPhoneCall} from 'react-icons/bi'


const About = () => {    

    return(
        <section className="pt-5 pb-5 bg-white" id="about">
            <div className="container">
                <h1 className="text-center fs-2 fw-bold about-header pt-4">About Me</h1>
                <div className="about-body">
                    <div className="d-lg-flex flex-nowrap gap-3 pt-5">
                        <div className="about-flex">
                            <h4 className="fs-5">David Oyewumi (Seun David) - DevOps/SRE Engineer</h4>
                            <h6 className="about-font fs-6">
                                I help businesses and organizations run more smoothly, stay secure, and recover quickly when things go wrong. Whether it’s an online store preparing for a major sale, a school managing student records, a church streaming live services, or a hotel keeping guest systems online. I ensure their technology works reliably, securely, and efficiently.

                                My job is to prevent downtime, protect sensitive data, and make sure updates happen without breaking anything. I work behind the scenes to set up systems that are automated, cost-effective, and future-ready. The result? Fewer disruptions, faster service, and more peace of mind.

                                If you’ve ever seen a major outage in the news like systems going down or screens showing errors for hours my role is to help businesses avoid those moments. And when new features roll out on apps or websites without issues, I’ve done my job well.

                                I’m passionate about using smart tools and automation to make life easier for teams, customers, and communities. Whether you’re in retail, education, hospitality, ministry, or transportation, I can help your systems work better behind the scenes—so you can focus on what matters most. <br />
                            </h6>
                            <div className="d-lg-flex flex-nowrap gap-3 pt-2">
                                <h6 className="about-font1 fs-6"><span style={{color: '#400c7b'}}><HiOutlineMail /></span> Email: oyewumidavid84@gmail.com</h6>
                                <h6 className="about-font1 fs-6"><span style={{color: '#400c7b'}}><BiPhoneCall /></span> Phone Number: 09059630747</h6>
                            </div>
                        </div>
                        <div className="about-flex">
                            <div className="skill-image">
                                <div className="skill-image-overlay">
                                    <h6>
                                        Microsoft Azure | Azure DevOps | AWS | Kubernetes | Docker | CI/CD | Monitoring | React | Node.js | Cloud Engineering
                                    </h6>

                                            <div className="bar pt-3 pb-3">
                                                <div className="info">
                                                    <h5 style={{fontSize: '14px'}}>Azure Administrator
                                                        <span className="float-end">95%</span>
                                                    </h5>
                                                </div>
                                                <div className="progress-line9"><span className="azure"></span></div>
                                            </div>

                                            <div className="bar pt-3 pb-3">
                                                <div className="info">
                                                    <h5 style={{fontSize: '14px'}}>Azure DevOps
                                                        <span className="float-end">98%</span>
                                                    </h5>
                                                </div>
                                                <div className="progress-line10"><span className="devops"></span></div>
                                            </div>

                                            <div className="bar pt-3 pb-3">
                                                <div className="info">
                                                    <h5 style={{fontSize: '14px'}}>AWS
                                                        <span className="float-end">80%</span>
                                                    </h5>
                                                </div>
                                                <div className="progress-line10"><span className="devops"></span></div>
                                            </div>  

                                            <div className="bar pt-3 pb-3">
                                                <div className="info">
                                                    <h5 style={{fontSize: '14px'}}>Containerization
                                                        <span className="float-end">95%</span>
                                                    </h5>
                                                </div>
                                                <div className="progress-line1"><span className="html"></span></div>
                                            </div>   

                                            <div className="bar pt-3 pb-3">
                                                <div className="info">
                                                    <h5 style={{fontSize: '14px'}}>Docker
                                                        <span className="float-end">95%</span>
                                                    </h5>
                                                </div>
                                                <div className="progress-line2"><span className="css"></span></div>
                                            </div>   

                                            <div className="bar pt-3 pb-3">
                                                <div className="info">
                                                    <h5 style={{fontSize: '14px'}}>Kubernetes
                                                        <span className="float-end">95%</span>
                                                    </h5>
                                                </div>
                                                <div className="progress-line3"><span className="javascript"></span></div>
                                            </div>   

                                            <div className="bar pt-3 pb-3">
                                                <div className="info">
                                                    <h5 style={{fontSize: '14px'}}>REACT JS
                                                        <span className="float-end">95%</span>
                                                    </h5>
                                                </div>
                                                <div className="progress-line4"><span className="react"></span></div>
                                            </div>   

                                            <div className="bar pt-3 pb-3">
                                                <div className="info">
                                                    <h5 style={{fontSize: '14px'}}>CI/CD
                                                        <span className="float-end">98%</span>
                                                    </h5>
                                                </div>
                                                <div className="progress-line5"><span className="ui-ux"></span></div>
                                            </div>   

                                            <div className="bar pt-3 pb-3">
                                                <div className="info">
                                                    <h5 style={{fontSize: '14px'}}>Monitoring
                                                        <span className="float-end">95%</span>
                                                    </h5>
                                                </div>
                                                <div className="progress-line6"><span className="wordpress"></span></div>
                                            </div>   

                                            <div className="bar pt-3 pb-3">
                                                <div className="info">
                                                    <h5 style={{fontSize: '14px'}}>NODE JS
                                                        <span className="float-end">90%</span>
                                                    </h5>
                                                </div>
                                                <div className="progress-line7"><span className="node"></span></div>
                                            </div>   

                                            <div className="bar pt-3 pb-3">
                                                <div className="info">
                                                    <h5 style={{fontSize: '14px'}}>Cloud Engineering
                                                        <span className="float-end">90%</span>
                                                    </h5>
                                                </div>
                                                <div className="progress-line8"><span className="express"></span></div>
                                            </div>   
                                </div>    
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;