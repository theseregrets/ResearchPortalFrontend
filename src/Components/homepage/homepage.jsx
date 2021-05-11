import intro_svg from '../../Assets/intro-img.svg'
import './homepage.css'
import Button from '@material-ui/core/Button';


export default function homepage() {
    return (
        <div>
            <div className='container'>
                <div className="outer-circle"></div>
                <div className="row my-custom-row justify-content-center">
                    <div className="col-sm-4">
                        <p>Research Portal</p>
                        <div className="row">
                        <Button variant="outlined">Faculty</Button>
                        <Button variant="outlined" color="secondary">Student</Button>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <img id='intro' src={intro_svg} />
                    </div>
                    
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-sm-4">
                        Objectives
                    </div>
                    
                </div>
            </div>
        </div>
    )
}
