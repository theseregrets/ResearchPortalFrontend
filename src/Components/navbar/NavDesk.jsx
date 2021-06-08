import React from 'react'
import Button from '@material-ui/core/Button';
import Logo from '../../Assets/research_portal_cropped.png'
import {Link} from 'react-router-dom'

export default function NavDesk() {
    return (
        <div className='container-fluid'>
            <div className="row">
                <div className="col-4">
                    <Link to='/'><img src={Logo} alt="" className="img-fluid col-6" style={{position:'absolute'}} /></Link>
                </div>
                <Button component={Link} to={'/milestones'} className="col" style={{color:'black',zIndex:2}}> Milestones</Button>
                <Button component={Link} to={'/team'}  className="col" style={{color:'black',zIndex:2}}>Team</Button>
                <Button component={Link} to={'/about-us'}  className="col" style={{color:'black',zIndex:2}}>About Us</Button>
            </div>
        </div>
    )
}
