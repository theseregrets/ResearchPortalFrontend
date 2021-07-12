import React from 'react'
import {Link,useHistory} from 'react-router-dom'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import firebase from 'firebase'
import fire from '../../Firebase/Firebase'
import clsx from 'clsx';
import GoogleButton from 'react-google-button'
import LockOpenIcon from '@material-ui/icons/LockOpen';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';


const useStyles = makeStyles((theme) => ({
    avatar:{
        marginTop:'10px',
        backgroundColor:'green'
    },
    paper:{
        width:'50vw',
        margin:'auto',
        height:'80vh',
        display:'flex',
        flexDirection:'column',
        [theme.breakpoints.down('sm')]:{
            width:'90vw',
            margin:'auto',
            height:'90vh',
        }
    },
    align:{
        marginLeft:'auto',
        marginRight:'auto',
    },
    field:{
        width:'40vw',
        marginLeft:'auto',
        marginRight:'auto',
        marginTop:'15px',
        [theme.breakpoints.down('sm')]:{
            width:'80vw',
            marginLeft:'auto',
            marginRight:'auto',
            marginTop:'40px'
        }
    }
}))

export default function Signup() {

    var history=useHistory();
    var classes=useStyles()

    const onSignup=()=>{
        alert('Signed In')
    }

    return (
        <Paper className={classes.paper} elevation={2}>
            <Avatar className={clsx(classes.align,classes.avatar)}>
                <LockOpenIcon />
            </Avatar>
            <Typography variant="h3" align='center'>Sign Up</Typography>
            <TextField required className={classes.field} id="outlined-required" label="Full Name" variant="outlined"/>
            <TextField required className={classes.field} id="outlined-required" label="Email" variant="outlined"/>
            <TextField required className={classes.field} id="outlined-required" label="Password" variant="outlined"/>
            <Button className={classes.field} color="primary" variant="contained" component={Link} to={'/signup'}>Sign Up</Button>
            <GoogleButton className={classes.field} onClick={() => onSignup()} />
        </Paper>
    )
}
