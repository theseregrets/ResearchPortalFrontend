import React from 'react'
import Profile from './profile.png'

export default function Team() {
    return (
        <div>
            <div className="container" >
            <h1 class="display-4 text-center " >The Team</h1>
                <div className="row">
                    <div className="col-3">
                        <div class="card" style={{width: "15rem"}}>
                            <img src={Profile} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <p class="card-text text-center ">Lorem, ipsum dolor.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div class="card" style={{width: "15rem"}}>
                            <img src={Profile} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <p class="card-text text-center ">Lorem, ipsum dolor.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div class="card" style={{width: "15rem"}}>
                            <img src={Profile} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <p class="card-text text-center ">Lorem, ipsum dolor.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div class="card" style={{width: "15rem"}}>
                            <img src={Profile} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <p class="card-text text-center ">Lorem, ipsum dolor.</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                
            </div>
        </div>
    )
}
