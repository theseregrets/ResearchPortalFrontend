import React from 'react'

export default function AboutUs(){
    return (
        <div>
            <div className="container" >
                <h1 class="display-6 text-center" style={{color:'white',textDecoration:'underline'}}>About Us</h1>
                <p className='text-center' style={{color:'white',fontSize:'1rem'}}>The IEEE Student Branch , NIT Durgapur is a society of enthusiasts aimed at promoting research-related activities in the campus. We are a direct handshake to IEEE, an international body that allows countless young researchers the opportunity to present & publish their innovations every year. Comprising of bright researchers, developers, speakers, and other contributors we are a society that welcomes in the era of better research prospects, on the campus.</p>
                <div className="row">
                    <div className="col-4 ">
                        <p className='text-center'  style={{color:'white',fontSize:'3rem'}}>50+</p>
                        <p className='text-center' style={{color:'white',fontSize:'1rem'}}>Branch Members</p>
                    </div>
                    <div className="col-4 border-white border-left border-right">
                        <p className='text-center'  style={{color:'white',fontSize:'3rem'}}>30+</p>
                        <p className='text-center' style={{color:'white',fontSize:'1rem'}}>Events and Workshops</p>
                    </div>
                    <div className="col-4">
                        <p className='text-center'  style={{color:'white',fontSize:'3rem'}}>500+</p>
                        <p className='text-center' style={{color:'white',fontSize:'1rem'}}>Participants</p>
                    </div>
                </div>


            </div>
        </div>
    )
}
