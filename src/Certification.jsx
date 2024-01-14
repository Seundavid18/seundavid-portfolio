import React from 'react'
import azureAd from '../src/Images/azure-administrator-associate-600x600.png'
import azureDev from '../src/Images/CERT-Expert-DevOps-Engineer-600x600.png'
import azureMct from '../src/Images/MCT-Microsoft_Certified_Trainer.png'
import azureFsp from '../src/Images/1549983738980.jpeg'

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
                <h5 className='text-center fw-bold pt-3'>Azure DevOps Engineer</h5>
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
            </div>
        </div>
    </section>
  )
}

export default Certification