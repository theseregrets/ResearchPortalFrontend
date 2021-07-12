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
        height:'70vh',
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

export default function Login() {

    var history=useHistory();
    var provider = new firebase.auth.GoogleAuthProvider();
    var classes=useStyles()

    const onLogin=()=>{
        firebase.auth()
        .signInWithPopup(provider)
        .then((result) => {
           
            var credential = result.credential;
            alert('user logged in')
            // This gives you a Google Access Token. You can use it to access the Google API.
            var token = credential.accessToken;
            // The signed-in user info.
            var user = result.user;
            history.push('/')
        }).catch((error) => {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
            alert('Invalid')
        });
    }

    return (
        <Paper className={classes.paper} elevation={2}>
            <Avatar className={clsx(classes.align,classes.avatar)}>
                <LockOpenIcon />
            </Avatar>
            <Typography variant="h3" align='center'>Login</Typography>
            <TextField required className={classes.field} id="outlined-required" label="Email" variant="outlined"/>
            <TextField required className={classes.field} id="outlined-required" label="Password" variant="outlined"/>
            <Button className={classes.field} color="primary" variant="contained" component={Link} to={'/signup'}>Sign Up</Button>
            <GoogleButton className={classes.field} onClick={() => onLogin()} />
        </Paper>
    )
}
