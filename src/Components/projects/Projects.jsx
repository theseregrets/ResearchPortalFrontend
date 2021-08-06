/* eslint-disable react/button-has-type */
import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionActions from '@material-ui/core/AccordionActions';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Chip from '@material-ui/core/Chip';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import FilterProject from './filterProject';

// import { projects } from '../../Data/proj';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '80%',
    margin: '5rem auto',
    minHeight: '80vh',
    [theme.breakpoints.down('sm')]: {
      width: '90%',
    },
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(20),
    fontWeight: 'bolder',
    marginBottom: '1rem',
    marginLeft: '5%',
  },
  icon: {
    verticalAlign: 'bottom',
    height: 20,
    width: 20,
  },
  details: {
    alignItems: 'center',
  },
  column: {
    flex: '1 1 0',
  },
  helper: {
    borderLeft: `2px solid ${theme.palette.divider}`,
    padding: theme.spacing(1, 2),
  },
  bio_color: {
    color: '#ffb300',
  },
  proj_para: {
    // border: '1px solid lightgray',
    margin: '1rem 2rem 1rem 2rem',
    padding: '1rem',
    borderRadius: '1rem',

    [theme.breakpoints.down('sm')]: {
      margin: '0',
    },
  },
  link: {
    color: theme.palette.primary.main,
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
  accord: {
    marginBottom: '0.5rem',
    borderRadius: '4px',
    borderTop: 'none',
    transition: 'box-shadow 0.5s ease',
    '&::before': {
      display: 'none',
    },
    '&:hover': {
      boxShadow: theme.shadows[7],
    },
  },
  rings: {
    position: 'fixed',
    backgroundColor: 'rgb(91, 117, 202)',
    width: '100%',
    height: '85vh',
    clipPath: 'circle(40% at 0% 20%)',
    zIndex: '-2',
  },
  accord_sum: {
    backgroundColor: 'rgba(217, 243, 247, 0.05)',

    '& .MuiAccordionSummary-content': {
      flexWrap: 'wrap',
      gap: '10px',
    },
  },
  project_chip: {
    marginRight: '3px',
  },
}));

let projs = [];
export default function Projects() {
  const classes = useStyles();
  const state = useSelector((state) => state.profile);
  const [project, setProject] = useState([]);
  const history = useHistory();

  useEffect(() => {
    if (!projs.length) {
      fetch('https://ieeenitdgp.pythonanywhere.com/api/projects/', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((res) => res.json())
        .then((data) => {
          projs = data;
          setProject(projs);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, []);

  function applyforProject(slug) {
    if (state.isLogged) {
      fetch(
        `https://ieeenitdgp.pythonanywhere.com//api/projects/apply/${slug}/`,
        {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${state.jwt}`,
          },
        }
      )
        .then((res) => res.json())
        .then((data) => {
          // this is console.log but the student cannot apply if CV is not downloaded.
          console.log(data);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      history.push('/login');
    }
  }

  return (
    <div className={classes.root}>
      <FilterProject
        project={projs}
        setProject={setProject}
        allProjects={projs}
      />
      {project.length ? (
        project.map((proj) => (
          <Accordion className={classes.accord} elevation={3}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1c-content"
              id="panel1c-header"
              className={classes.accord_sum}
            >
              <div className={classes.column}>
                <Typography className={classes.heading}>
                  {proj.title}
                </Typography>
                {/* {proj.tags.map((tag) => (
                  <Chip
                    label={tag}
                    color="primary"
                    variant="outlined"
                    size="small"
                    className={classes.project_chip}
                  />
                ))} */}
              </div>
              <div className={classes.column}>
                <Typography className={classes.heading}>
                  {proj.teacher.user.first_name + proj.teacher.user.last_name}
                </Typography>
              </div>
              <div className={classes.column}>
                <Chip label={proj.teacher.branch} color="primary" />
              </div>
            </AccordionSummary>
            <AccordionDetails className={classes.details}>
              <div>
                <Typography className={classes.secondaryHeading}>
                  {proj.title}
                </Typography>
                <Divider />
                <div className={classes.proj_para}>
                  <Typography>{proj.description}</Typography>
                </div>
              </div>
            </AccordionDetails>
            <Divider />
            <AccordionActions>
              <Button
                size="medium"
                variant="contained"
                color="primary"
                onClick={(event) => {
                  applyforProject(proj.slug);
                }}
              >
                Apply
              </Button>
            </AccordionActions>
          </Accordion>
        ))
      ) : (
        <>
          {!projs.length ? (
            <CircularProgress disableShrink />
          ) : (
            <Typography variant="h4">No match found</Typography>
          )}
        </>
      )}
    </div>
  );
}
