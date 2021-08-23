import React, { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import CssBaseline from '@material-ui/core/CssBaseline';
import { useSelector } from 'react-redux';
import { Typography } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/styles';
import { useHistory, useParams } from 'react-router-dom';
import ApplicationTable from './table';
import { colors } from '../theme/Theme';

const useStyles = makeStyles((theme) => ({
  container: {
    padding: '0 14%',
  },
  title: {
    fontSize: '34px',
    textAlign: 'center',
    color: colors.projectHeading,
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
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  descTitle: {
    margin: '30px 0px',
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
  const { slug } = useParams();
  const state = useSelector((state) => state.profile);
  const history = useHistory();
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(
      `https://ieeenitdgp.pythonanywhere.com/api/projects/applied/${slug}/`,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${state.jwt}`,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function deleteProject() {
    fetch(
      `https://ieeenitdgp.pythonanywhere.com/api/projects/details/${slug}/`,
      {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${state.jwt}`,
        },
      }
    )
      .then((res) => {
        if (res.status === 204) {
          history.replace('/dashboard');
        } else {
          alert('some error');
        }
      })
      .catch((err) => {
        console.log(err);
        alert('some error');
      });
  }

  return (
    <>
      <CssBaseline />
      <Container className={classes.container}>
        <Button
          variant="contained"
          color="secondary"
          startIcon={<DeleteIcon />}
          onClick={() => {
            deleteProject();
          }}
        >
          Delete Project
        </Button>
        <Typography variant="h5">
          {data ? <>{data.count ? data.results[0].post.title : null}</> : null}
        </Typography>
        <p>
          {data ? (
            <>{data.count ? data.results[0].post.description : null}</>
          ) : null}
        </p>
        <Typography variant="h4" gutterBottom className={classes.subtitle}>
          Applications
        </Typography>
        <ApplicationTable data={data} />
      </Container>
    </>
  );
}
