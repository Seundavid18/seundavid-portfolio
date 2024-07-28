import React from "react";
import {BsEmojiSmile} from 'react-icons/bs'


function Hero() {
    return(
        <section className="pb-5 bg-white" id="home">
            <div className="hero">
                <div className="container">
                    <div className="hero-padding">
                        <div className="text-white text-center">
                            <h1 className="pb-2 comp">SEUN DAVID DEV</h1>
                            <h6 className="pb-5">React js | Node.js | Microsoft Azure | Azure DevOps | MongoDB | Cloud Engineer<br /> If you're a business seeking a web presence or are looking <br /> to hire, contact me here</h6>
                            <div className="d-grid justify-content-center gap-4 d-lg-flex pt-4">
                                <button class="btn btn-light1" type="button"><a href="#contact" style={{textDecoration: 'none', color: '#400c7b'}}>Hire Me<span className="ps-3"><BsEmojiSmile size={20} /></span></a></button>
                            </div>                        
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero;