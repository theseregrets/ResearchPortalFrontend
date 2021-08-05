/* eslint-disable react/button-has-type */
import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionActions from '@material-ui/core/AccordionActions';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Chip from '@material-ui/core/Chip';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import FilterProject from './filterProject';
import { projects } from '../../Data/proj';

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

export default function Projects() {
  const classes = useStyles();

  const allProjects = projects;
  const [project, setProject] = useState(projects);
  let projs = [];

  useEffect(() => {
    fetch('https://ieeenitdgp.pythonanywhere.com/api/projects/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => {
        projs = data.results;
        console.log(projs);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  return (
    <div className={classes.root}>
      <FilterProject
        project={project}
        setProject={setProject}
        allProjects={allProjects}
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
                <Typography className={classes.heading}>{proj.name}</Typography>
                {proj.tags.map((tag) => (
                  <Chip
                    label={tag}
                    color="primary"
                    variant="outlined"
                    size="small"
                    className={classes.project_chip}
                  />
                ))}
              </div>
              <div className={classes.column}>
                <Typography className={classes.heading}>{proj.prof}</Typography>
              </div>
              <div className={classes.column}>
                <Chip label={proj.dept} color="primary" />
              </div>
            </AccordionSummary>
            <AccordionDetails className={classes.details}>
              <div>
                <Typography className={classes.secondaryHeading}>
                  Project Heading
                </Typography>
                <Divider />
                <div className={classes.proj_para}>
                  <Typography>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
                    in reprehenderit possimus maxime laborum laboriosam eius
                    laboreaut, vero ad aperiam est officiis, nostrum nihil minus
                    commodi ipsum cumque!
                  </Typography>
                </div>
              </div>
            </AccordionDetails>
            <Divider />
            <AccordionActions>
              <Button size="medium" variant="contained" color="primary">
                Apply
              </Button>
            </AccordionActions>
          </Accordion>
        ))
      ) : (
        <Typography variant="h4" align="center">
          No matching projects
        </Typography>
      )}
    </div>
  );
}
