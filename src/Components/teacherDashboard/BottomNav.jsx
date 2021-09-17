import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

import AssignmentIcon from '@material-ui/icons/Assignment';
import PeopleIcon from '@material-ui/icons/People';
import CreateIcon from '@material-ui/icons/Create';
import PropTypes from 'prop-types';

const useStyles = makeStyles(() => ({
  box: {
    width: '100vw',
    position: 'fixed',
    left: '0',
    right: '0',
    bottom: '0',
    zIndex: '100',

    '& span': {
      textAlign: 'center',
    },

    '& a': {
      textDecoration: 'none',
    },
  },
}));

export default function BottomNav({ url }) {
  const classes = useStyles();

  const [value, setValue] = React.useState('dashboard');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation
      sx={{ width: 500 }}
      value={value}
      className={classes.box}
      onChange={handleChange}
    >
      {/* <BottomNavigationAction
        value="dashboard"
        icon={<DashboardIcon />}
        component={Link}
        to={url}
      /> */}
      <BottomNavigationAction
        value="projects"
        icon={<AssignmentIcon />}
        component={Link}
        to={`${url}`}
      />
      <BottomNavigationAction
        value="create-project"
        icon={<CreateIcon />}
        component={Link}
        to={`${url}/create-project`}
      />
      <BottomNavigationAction
        value="profile"
        icon={<PeopleIcon />}
        component={Link}
        to={`${url}/profile`}
      />
    </BottomNavigation>
  );
}

BottomNav.propTypes = {
  url: PropTypes.string.isRequired,
};
