import intro_svg from '../../Assets/illustration.svg'
import './homepage.css'
import Button from '@material-ui/core/Button';
import {styled} from '@material-ui/styles'
import Circle from '../../Assets/circle.svg'


export default function homepage() {
    return (
        <div>
            <div className="circle"></div>
            <div className="container" style={{height:'100vh'}}>
                <div className="row align-items-center">
                    <div className="col">
                    </div>
                    <div className="col">
                        <img id='intro' className='img-fluid' src={intro_svg} />
                    </div>
                </div>   
            </div>  
            <div className="container" style={{position:'absolute',top:'50vh'}}>
                <div className="row">
                    <div className="col">
                        <div className="border-circle"></div>
                        <img src={Circle} alt="" className="str" />
                    </div>
                </div>
            </div>  
        </div>
    )
}




