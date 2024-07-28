import React from 'react'
import azureAd from '../src/Images/azure-administrator-associate-600x600.png'
import azureDev from '../src/Images/Az-305.png'
import azureMct from '../src/Images/MCT.png'
import azureFsp from '../src/Images/1549983738980.jpeg'
import CompTIA from '../src/Images/CompTIA_Project_2B.png'
import newHorizon from '../src/Images/newhorizon.jpeg'


const Certification = () => {
  return (
    <section className="pt-5 pb-5 bg-white" id="contact">
        <div className="container">
            <h1 className="text-center fs-2 fw-bold about-header pt-4 pb-4">Certifications</h1>
            <div className="row justify-content-center row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
              <div className="col">
                <div className='cert-card d-flex justify-content-center'>
                  <img src={azureAd} alt="" className='cert-img'/>
                </div>
                <h5 className='text-center fw-bold pt-3'>Azure Administrator Associate</h5>
              </div>
              <div className="col">
                <div className='cert-card d-flex justify-content-center'>
                  <img src={azureDev} alt="" className='cert-img'/>
                </div>
                <h5 className='text-center fw-bold pt-3'>Azure Solutions Architect Experts</h5>
              </div>
              <div className="col">
                <div className='cert-card d-flex justify-content-center'>
                  <img src={azureMct} alt="" className='cert-img'/>
                </div>
                <h5 className='text-center fw-bold pt-3'>Microsoft Certified Trainer</h5>
              </div>
              <div className="col">
                <div className='cert-card d-flex justify-content-center'>
                  <img src={azureFsp} alt="" className='cert-img'/>
                </div>
                <h5 className='text-center fw-bold pt-3'>Fullstack Programming</h5>
              </div>
              <div className="col">
                <div className='cert-card d-flex justify-content-center'>
                  <img src={CompTIA} alt="" className='cert-img'/>
                </div>
                <h5 className='text-center fw-bold pt-3'>CompTIA Project+</h5>
            </div>
            <div className="col">
                <div className='cert-card d-flex justify-content-center'>
                  <img src={newHorizon} alt="" className='cert-img'/>
                </div>
                <h5 className='text-center fw-bold pt-3'>Managing Projects with Microsoft Project</h5>
            </div>
            </div>
        </div>
    </section>
  )
}

export default Certification