import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import { deepPurple } from '@material-ui/core/colors';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import ProjectCard from './ProjectCard'


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
    [theme.breakpoints.down('sm')]: {
        msg: {
            width: '90%'
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
};