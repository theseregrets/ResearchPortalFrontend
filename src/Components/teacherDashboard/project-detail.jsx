import React from 'react';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';

import { projects } from '../../Data/projects';
import { data } from '../../Data/project-data';

const useStyles = makeStyles((theme) => ({
  container: {
    padding: '0 14%',
  },
  title: {
    fontSize: '34px',
    textAlign: 'center',
    color: '#0047ab',
    fontStyle: 'italic',
    margin: '30px',
  },
  summary: {
    margin: '30px 0px',
    fontStyle: 'italic',
  },
  subtitle: {
    marginTop: '60px',
    textAlign: 'center',
    fontStyle: 'italic',
  },
  numApp: { color: 'darkblue', fontStyle: 'italic' },
  [theme.breakpoints.down('sm')]: {
    container: {
      padding: '5%',
    },
    title: {
      fontSize: '23px',
      margin: '10px',
    },
    table: {
      display: 'none',
    },
  },
}));

export default function ProjectDetail() {
  const classes = useStyles();
  return (
    <>
      <CssBaseline />
      <Container className={classes.container}>
        <Button
          variant="contained"
          color="secondary"
          startIcon={<DeleteIcon />}
        >
          Delete Project
        </Button>
        <h1 className={classes.title}>{data.title}</h1>
        <hr />
        <h4>Summary</h4>

        <p className={classes.summary}>{data.project}</p>
        <hr />
        <h4 style={{ margin: '30px 0px' }}>Description</h4>
        <p>{data.desc}</p>
        <hr />
        <h2 className={classes.subtitle}>Applications</h2>
        <h4 className={classes.numApp}>
          {projects.length} students have applied
        </h4>
        <table className={(classes.table, 'table')}>
          <thead>
            <tr>
              <th>
                <h6>Name</h6>
              </th>
              <th>
                <h6>Department</h6>
              </th>
              <th>
                <h6>CGPA</h6>
              </th>
              <th>
                <h6>Status</h6>
              </th>
              <th>
                <h6>Accept</h6>
              </th>
              <th>
                <h6>Delete</h6>
              </th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project) => (
              <tr key={project.id}>
                <td>{project.name}</td>
                <td>{project.dept}</td>
                <td>{project.cgpa}</td>
                <td>{project.status}</td>
                <td>
                  <Button
                    variant="contained"
                    color="primary"
                    startIcon={<AssignmentTurnedInIcon />}
                  >
                    Accept
                  </Button>
                </td>
                <td>
                  <Button
                    variant="contained"
                    color="secondary"
                    startIcon={<DeleteIcon />}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Container>
    </>
  );
}
