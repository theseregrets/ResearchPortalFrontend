import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import UpdateIcon from '@material-ui/icons/Update';

const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: '100vh',
        flex: '1',
    },
    title: {
        marginTop: '50px',
        textAlign: 'center',
        padding: '10px'
    },
    btnContainer: {
        display: 'flex',
        width: '65%',
        justifyContent: 'space-between',
        margin: '20px auto'
    },
    editBtnContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '200px',
        marginLeft: 'auto' 
    },
    txt:{
        fontSize: '20px',
        margin: '20px auto',
        width: '65%',
        minHeight: '90vh',
        fontFamily: 'sans-serif',
        backgroundColor: 'white',
        padding: '10px',
        borderRadius: '10px',
        boxShadow: '0 0 10px rgba(0,0,0,0.1)'
    },
    txtArea: {
        display: 'block',
        margin: '20px auto',
        width: '65%',
        minHeight: '90vh',
        fontSize: '20px',
        padding: '10px',
    },
    [theme.breakpoints.down('sm')]: {
        btnContainer: {
            width: '90%'
        },
        txt:{
            width: '90%'
        },
        txtArea: {
            width: '90%'
        }
    }
}));

export default function ResearchStatement(){
    const classes = useStyles();

    let [isEditing, setIsEditing] = useState(false);

    function handleClick(){
        setIsEditing(isEditing?false:true);
    }

    let [text, setText] = useState(localStorage.getItem('statement')||"hello");

    function update(){
        let ta = document.querySelector("textarea");
        localStorage.setItem('statement', ta.value);
        setText(ta.value);
        setIsEditing(false);
    }
    function cancel() {
        setIsEditing(false);
    }

    return (
        <div className={classes.root}>
            <h2 className={classes.title}>Research statement</h2>
            <div className={classes.btnContainer}>
                {!isEditing?
                <Button variant="contained" color="primary" className={classes.editBtn} onClick={handleClick}>
                    <UpdateIcon />
                    Edit
                </Button>:<></>}
                {isEditing?
                <div className={classes.editBtnContainer}>
                    <Button variant="contained" color="primary" onClick={update}>Update</Button>
                    <Button variant="contained" color="primary" onClick={cancel}>Cancel</Button>
                </div>
                :<div></div>}
            </div>
            <Statement ie={isEditing} text={text} />
            
        </div>
    );
}

function Statement(props) {
    const classes = useStyles();

    let [text, setText] = useState(localStorage.getItem('statement')||props.text);

    function handleChange(e){
        setText(e.target.value)
    }

    return(
        props.ie?
        <textarea value={text} maxLength={1500} onChange={handleChange} className={classes.txtArea} />:
        <pre className={classes.txt}>{props.text}</pre>
    );
}