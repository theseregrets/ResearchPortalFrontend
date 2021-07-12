import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Accordion from '@material-ui/core/Accordion';
import Typography from '@material-ui/core/Typography';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {projects} from '../../Data/projects'

const useStyles = makeStyles({
});


export default function Projects() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper} className='w-75 ml-auto mr-auto'>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Project Name</TableCell>
            <TableCell align="center">Faculty Name</TableCell>
            <TableCell align="center">Department</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {projects.map((row) => (
            <TableRow key={row.name}>
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
                <TableCell align="center" component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="center">{row.faculty}</TableCell>
                <TableCell align="center">{row.dept}</TableCell>
             
              </AccordionSummary>
              <AccordionDetails>
                <Typography className={classes.heading}>{row.details}</Typography>
              </AccordionDetails>
            </Accordion>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
