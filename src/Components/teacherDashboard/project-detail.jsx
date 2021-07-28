import React from 'react';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
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
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
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
      fontSize: '8px',
    },
  },
}));

export default function ProjectDetail() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
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
                <h6>Delete</h6>
              </th>
              <th>
                <h6>SOP</h6>
              </th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project) => (
              <tr key={project.id}>
                <td>{project.name}</td>
                <td>{project.dept}</td>
                <td>{project.cgpa}</td>

                <td>
                  <Button
                    variant="contained"
                    color="secondary"
                    startIcon={<DeleteIcon />}
                  >
                    Reject
                  </Button>
                </td>
                <td>
                  <Button
                    variant="contained"
                    color="primary"
                    type="button"
                    onClick={handleOpen}
                  >
                    SOP
                  </Button>
                  <Modal
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    className={classes.modal}
                    open={open}
                    onClose={handleClose}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                      timeout: 500,
                    }}
                  >
                    <Fade in={open}>
                      <div className={classes.paper}>
                        <h2 id="transition-modal-title">
                          {' '}
                          Statement of Purpose
                        </h2>
                        <p id="transition-modal-description">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Voluptatum consectetur numquam rerum
                          accusantium, aliquid mollitia corporis cum reiciendis
                          vero autem asperiores, non reprehenderit error tempora
                          at eius totam nobis necessitatibus. Lorem ipsum dolor
                          sit, amet consectetur adipisicing elit. Cum fugit
                          iusto animi facere explicabo sed officia facilis culpa
                          hic doloribus? Ducimus magnam atque natus mollitia
                          possimus. Ducimus ullam minus impedit. Lorem ipsum
                          dolor sit amet, consectetur adipisicing elit. Ex
                          libero ipsum officiis aperiam molestias blanditiis,
                          qui numquam deleniti, est dolor eius molestiae
                          quibusdam voluptate iure, quis porro impedit neque
                          odit. Lorem ipsum dolor sit amet consectetur
                          adipisicing elit. Saepe iure praesentium maiores
                          veniam odit perferendis natus, rerum illo sunt
                          provident, a nobis incidunt tenetur unde voluptatum
                          cum corporis adipisci dolore!
                        </p>
                      </div>
                    </Fade>
                  </Modal>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Container>
    </>
  );
}
