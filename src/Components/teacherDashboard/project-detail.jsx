import React from 'react';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import { projects } from '../../Data/projects';

const ProjectDetail = () => (
  <>
    <CssBaseline />
    <Container maxWidth="md">
      <h1>project name</h1>
      <h2>5 students applied</h2>
      <img src="https://picsum.photos/200/300.jpg" alt="" />
      <p>
        Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
        aside for 10 minutes. Heat oil in a (14- to 16-inch) paella pan or a
        large, deep skillet over medium-high heat. Add chicken, shrimp and
        chorizo, and cook, stirring occasionally until lightly browned, 6 to 8
        minutes. Transfer shrimp to a large plate and set aside, leaving chicken
        and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes,
        onion, salt and pepper, and cook, stirring often until thickened and
        fragrant, about 10 minutes. Add saffron broth and remaining 4 1/2 cups
        chicken broth; bring to a boil. Add rice and stir very gently to
        distribute. Top with artichokes and peppers, and cook without stirring,
        until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to
        medium-low, add reserved shrimp and mussels, tucking them down into the
        rice, and cook again without stirring, until mussels have opened and
        rice is just tender, 5 to 7 minutes more. (Discard any mussels that
        don’t open.) Set aside off of the heat to let rest for 10 minutes, and
        then serve.
      </p>
      <h1>Applications</h1>
      <table className="table">
        <thead>
          <tr>
            <th onClick={() => onSort('name')}>
              <h3>Name</h3>
            </th>
            <th onClick={() => onSort('year')}>
              <h3>Department</h3>
            </th>
            <th onClick={() => onSort('ratings')}>
              <h3>Statement of Purpose</h3>
            </th>
            <th>
              <h3>Status</h3>
            </th>
            <th>
              <h3>Accept</h3>
            </th>
            <th>
              <h3>Delete</h3>
            </th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project) => (
            <tr key={project.id}>
              <td>{project.name}</td>
              <td>{project.dept}</td>
              <td>{project.details}</td>
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

export default ProjectDetail;
