import React,{useState} from 'react'
import RP from '../../Assets/research_portal_cropped.png'
import Logo from '../../Assets/ieeesb_logoblue.png'
import {Link} from 'react-router-dom'
import Button from '@material-ui/core/Button';
import Drawer from '@material-ui/core/Drawer';

export default function Nav() {
    const [isOpen,toggle]=useState(false)

    return (
        <div>
            <div className="navbar navbar-expand-lg navbar-light ">
                <div className="container-fluid">
                <button class="navbar-toggler" onClick={()=>toggle(true)} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                  </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">

                    <div className="navbar-item w-25">
                        <Link to='/'><img src={RP} alt="" className="img-fluid w-50 navbar-brand" style={{}} /></Link>
                    </div>
                    
                    <div className="navbar-item ml-lg-auto mb-2 mb-lg-0">
                        <Button component={Link} to={'/milestones'} className="nav-item mr-lg-5" style={{color:'black',zIndex:2}}> Milestones</Button>
                        <Button component={Link} to={'/team'}  className="nav-item mr-lg-5" style={{color:'black',zIndex:2}}>Team</Button>
                        <Button component={Link} to={'/about-us'}  className="nav-item mr-lg-5" style={{color:'black',zIndex:2}}>About Us</Button>
                    </div>
                    <div className="navbar-item w-25" style={{zIndex:2}} >
                        <a href="https://www.ieeesbnitdgp.com/" ><img src={Logo} alt="" className="img-fluid w-25 ml-auto d-block" /></a>
                    </div>
                    </div>
                </div>
            </div>

            <Drawer anchor='left' open={isOpen} onClose={()=>toggle(false)}>
              <div>This is a list item</div>
            </Drawer>

        </div>
    )
}
