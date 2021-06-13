import intro_svg from '../../Assets/illustration.svg'
import './homepage.css'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import {Link} from 'react-router-dom'

const useStyles = makeStyles(() => ({
    btnSet:{
        marginLeft:'6rem'
    },
    buttons:{
        border: '2px solid',
        borderRadius: '30px',
        marginLeft:'2rem'
    }
  }));


export default function Homepage() {

    const classes = useStyles();

    return (
        <div >
            <section >
                <div className="circle-clip" ></div>
                <div className="rings1">
                    <div className="inner-ring1"></div>
                </div>
                <div className="rings2">
                    <div className="inner-ring2"></div>
                </div>
                <div className="rings3">
                    <div className="inner-ring3"></div>
                </div>
            </section>
           <div className="container-fluid" style={{position:'absolute',marginTop:"10vh"}}>
               <div className="row">
                   <div className="col">
                       <div className="row">
                         <p style={{marginTop:"20vh", marginLeft:"2vw", fontSize:"4rem"}}><span style={{color:"blue"}}>R</span>esearch <span style={{color:"blue"}}>P</span>ortal</p>
                       </div>
                       <div className="row justify-content-center" className={classes.btnSet}>
                            <Button component={Link} to={'/projects'}  variant="outlined" className="col-2" className={classes.buttons} color="primary" >Projects</Button>
                            <Button component={Link} to={'/login'} variant="outlined" className="col-2" className={classes.buttons} color="primary">Login</Button>
                        </div>
                   </div>
                    <div className="col ">
                        <img src={intro_svg} alt="" className="w-75 mr-4 d-flex " style={{marginTop:"10vh"}} />
                    </div>
                    
                    
               </div>
               
           </div>
            
        </div>
    )
}




