import React from 'react';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';

import CssBaseline from '@material-ui/core/CssBaseline';

import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';

import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { projects } from '../../Data/projects';

const useStyles = makeStyles((theme) => ({
  subtitle: {
    margin: '60px',
    textAlign: 'center',
    fontStyle: 'italic',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  sop: {
    width: '600px',
    minHeight: '400px',
    overflow: 'auto',
  },

  numApp: { color: 'darkblue', fontStyle: 'italic' },
  [theme.breakpoints.down('sm')]: {
    container: {
      padding: '5%',
    },

    table: {
      fontSize: '8px',
    },
  },
}));

export default function ProjectDetail() {
  const classes = useStyles();
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <>
      <CssBaseline />
      <Container className={classes.container}>
        <h2 className={classes.subtitle}>Applications</h2>

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
                <h6>Year</h6>
              </th>
              <th>
                <h6>Date</h6>
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
                <td>{project.year}</td>
                <td>{project.date}</td>

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
                  <FormControl
                    variant="outlined"
                    className={classes.formControl}
                  >
                    <InputLabel id="demo-simple-select-outlined-label">
                      SOP
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-outlined-label"
                      id="demo-simple-select-outlined"
                      value={age}
                      onChange={handleChange}
                      label="Age"
                    >
                      <MenuItem className={classes.sop}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Cumque veniam error eligendi voluptatem aliquam
                        eum odit dolores obcaecati alias consequatur illo quia
                        nobis libero perferendis asperiores, minus commodi
                        aliquid! Necessitatibus. Lorem ipsum dolor sit amet
                        consectetur adipisicing elit. A unde neque non vitae
                        consectetur adipisci voluptatum cupiditate architecto
                        tenetur eligendi sit quae molestiae enim, doloribus
                        eveniet, cum animi. Animi, expedita. Lorem ipsum dolor,
                        sit amet consectetur adipisicing elit. Minus ipsa
                        repellendus omnis laboriosam, exercitationem molestias
                        quidem harum ipsam veritatis. Amet ullam voluptate sed
                        maxime dolorem molestias illum vel enim eum. Lorem ipsum
                        dolor sit amet, consectetur adipisicing elit. Quas nihil
                        ipsa vitae enim facilis! Aperiam ipsa, dolorem repellat
                        tempore delectus atque eveniet nobis ab sint tenetur
                        vitae assumenda numquam impedit.
                      </MenuItem>
                    </Select>
                  </FormControl>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Container>
    </>
  );
}
