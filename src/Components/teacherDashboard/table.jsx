/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
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
import CircularProgress from '@material-ui/core/CircularProgress';

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
          {`${row.student.user.first_name} ${row.student.user.last_name}`}
        </TableCell>
        <TableCell align="right">{row.student.branch}</TableCell>
        <TableCell align="right">{row.student.cgpa}</TableCell>
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
                Research Statement
              </Typography>
              <p>{row.student.rs}</p>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
}
// Row.propTypes = {
//   row: PropTypes.shape({
//     name: PropTypes.string.isRequired,
//     dept: PropTypes.string.isRequired,
//     year: PropTypes.string.isRequired,
//     cgpa: PropTypes.number.isRequired,
//   }).isRequired,
// };

export default function ApplicationTable(props) {
  const { data } = props;

  return (
    <>
      {!data ? (
        <CircularProgress color="inherit" />
      ) : (
        <>
          {data.count ? (
            <>
              <Typography variant="h4">
                {data.count} students have applied
              </Typography>
              <TableContainer component={Paper}>
                <Table aria-label="collapsible table">
                  <TableHead>
                    <TableRow>
                      <TableCell>Name</TableCell>
                      <TableCell align="right">Dept</TableCell>
                      <TableCell align="right">CGPA</TableCell>
                      <TableCell align="right">Reject</TableCell>
                      <TableCell>research Statement</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {data.results.map((row) => (
                      <Row key={row.id} row={row} />
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </>
          ) : (
            <Typography variant="h3">0 students have applied</Typography>
          )}
        </>
      )}
    </>
  );
}
