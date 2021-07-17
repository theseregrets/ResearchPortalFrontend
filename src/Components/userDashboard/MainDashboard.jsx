import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import { deepPurple } from '@material-ui/core/colors';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';


const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: '100vh',
        flex: '1',
    },
    msg: {
        margin: 'auto',
        display: 'flex',
        width: '50%',
        padding: '15px',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fefefe',
        borderRadius: '10px',
        boxShadow: '0 0 10px rgba(0,0,0,0.2)',
    },
    purple: {
        color: theme.palette.getContrastText(deepPurple[500]),
        backgroundColor: deepPurple[500],
    },
    large: {
        width: theme.spacing(7),
        height: theme.spacing(7),
    },
    txt: {
        marginLeft: '50px',
    },
    title: {
        marginTop: '50px',
        textAlign: 'center',
    },
    btn: {
        display: 'block',
        margin: '20px auto'
    },
    card: {
        padding: '25px',
        display: 'flex',
        backgroundColor: 'white',
        width: '80%',
        margin: '20px auto',
        borderRadius: '10px',
        boxShadow: '0 0 10px rgba(0,0,0,0.2)',
    },
    img: {
        maxHeight: '200px',
        maxWidth: '200px',
    },
    cardText: {
        marginLeft: '40px',
    },
    '@media screen and (max-width: 700px)': {
        msg: {
            width: '90%'
        },
        card: {
            flexDirection: 'column',
            width: '90%'
        },
        img: {
            margin: 'auto',
        },
        cardText: {
            margin: '20px 0 0 0'
        },
        txt: {
            marginLeft: '25px',
            fontSize: '20px',
        },
        large: {
            width: theme.spacing(5),
            height: theme.spacing(5),
        },
    }
}));

export default function MainDashboard(){
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.msg}>
                <Avatar className={clsx(classes.purple, classes.large)}>NK</Avatar>
                <h4 className={classes.txt}>Welcome back Nitin!</h4>
            </div>
            <h2 className={classes.title}>Ongoing Projects</h2>
            <Button variant="contained" color="primary" className={classes.btn}>
                <AddIcon />
                Apply for more
            </Button>
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
        </div>
    );
}

function ProjectCard(){
    const classes = useStyles();

    return(
        <div className={classes.card}>
            <img src="https://miro.medium.com/max/1838/1*MI686k5sDQrISBM6L8pf5A.jpeg" alt="img" className={classes.img}/>
            <div className={classes.cardText}>
                <h4 className={classes.cardTextTitle}>Project Title</h4>
                <p className={classes.cardTextContent}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Proin lorem dui, cursus id enim eu, bibendum mollis quam. 
                    Nunc vel dignissim sapien. Duis vitae mi ac odio tempus dapibus eget rutrum lacus. 
                    Fusce eros sem, egestas porttitor rutrum aliquet, rutrum et erat. Donec vel tempor ex.
                </p>
            </div>
        </div>
    );
};
