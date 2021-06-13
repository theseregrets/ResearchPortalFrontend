import React from 'react'
import RP from '../../Assets/research_portal_cropped.png'
import Logo from '../../Assets/ieeesb_logoblue.png'
import {Link} from 'react-router-dom'
import Button from '@material-ui/core/Button';

export default function Nav() {
    return (
        <div>
            <div className="navbar navbar-expand-lg ">
                <div className="container-fluid">
                    <div className="navbar-item w-25">
                        <Link to='/'><img src={RP} alt="" className="img-fluid w-50 navbar-brand" style={{}} /></Link>
                    </div>
                    
                    <div className="navbar-nav ml-lg-auto mb-2 mb-lg-0">
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
    )
}
