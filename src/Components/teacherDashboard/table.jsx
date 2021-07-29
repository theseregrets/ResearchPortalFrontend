import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import { projects } from '../../Data/projects';

const useRowStyles = makeStyles({
  root: {
    '& > *': {
      borderBottom: 'unset',
    },
  },
});

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  const classes = useRowStyles();

  return (
    <>
      <TableRow className={classes.root}>
        <TableCell component="th" scope="row">
          {row.name}
        </TableCell>
        <TableCell align="right">{row.dept}</TableCell>
        <TableCell align="right">{row.year}</TableCell>
        <TableCell align="right">{row.cgpa}</TableCell>
        <TableCell align="right">
          <Button
            variant="contained"
            color="secondary"
            startIcon={<DeleteIcon />}
          >
            Reject
          </Button>
        </TableCell>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography variant="h6" gutterBottom component="div">
                Statement of Purpose
              </Typography>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                itaque sunt voluptatum facere, ratione ut quod nulla
                reprehenderit suscipit? Sit laboriosam quaerat esse perferendis
                vero est? Magni incidunt inventore eius?Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Quibusdam impedit illo natus
                inventore? Esse numquam cum, inventore rerum obcaecati unde quae
                cupiditate modi eos error quis, assumenda exercitationem animi
                enim. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Distinctio, quo voluptas nihil, quia nisi enim eveniet veniam
                molestiae odit, est laboriosam! Dolores eum nam officia minus
                velit autem dolor nostrum. Lorem, ipsum dolor sit amet
                consectetur adipisicing elit. Cupiditate exercitationem quisquam
                eos explicabo perspiciatis porro autem nihil nam, placeat
                obcaecati sapiente mollitia magni aliquid quia id unde
                reprehenderit minima doloribus. Lorem ipsum dolor sit amet,
                consectetur adipisicing elit. Cumque dolores corporis esse
                doloremque exercitationem sapiente, voluptatibus cum quas nisi
                veniam officiis maxime voluptate sunt assumenda in deserunt
                autem quod soluta?
              </p>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
}
Row.propTypes = {
  row: PropTypes.shape({
    name: PropTypes.string.isRequired,
    dept: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
    cgpa: PropTypes.number.isRequired,
  }).isRequired,
};
const rows = projects;

export default function ApplicationTable() {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Dept</TableCell>
            <TableCell align="right">Year</TableCell>
            <TableCell align="right">CGPA</TableCell>
            <TableCell align="right">Reject</TableCell>
            <TableCell>SOP</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.id} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
