/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable no-param-reassign */
import React, { useState } from 'react';
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
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/core/Alert';
import { useSelector } from 'react-redux';

const useRowStyles = makeStyles({
  root: {
    '& > *': {
      borderBottom: 'unset',
    },
  },
});

function Row(props) {
  const { row } = props;
  const [open, setOpen] = useState(false);
  const [rejected, setRejected] = useState(false);
  const classes = useRowStyles();
  const state = useSelector((state) => state.profile);
  function rejectApplication(event, slug, username) {
    fetch(
      `https://ieeenitdgp.pythonanywhere.com/api/projects/shortlist/${slug}/`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${state.jwt}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          stud_username: username,
          accepted: -1,
        }),
      }
    )
      .then((res) => {
        if (res.status === 200) {
          setRejected(true);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }
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
            onClick={(event) => {
              rejectApplication(
                event,
                row.post.slug,
                row.student.user.username
              );
            }}
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
      <Snackbar
        open={rejected}
        autoHideDuration={2000}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        onClose={() => {
          setRejected(false);
        }}
      >
        <Alert
          variant="filled"
          onClose={() => setRejected(false)}
          severity="success"
          sx={{ width: '100%' }}
        >
          Application rejected
        </Alert>
      </Snackbar>
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
