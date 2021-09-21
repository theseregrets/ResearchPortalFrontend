import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import { makeStyles } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import MainDashboard from './MainDashboard';
import Statement from './ResearchStatement';
import Profile from './Profile';
import SideNav from './Sidenav';
import BottomNav from './BottomNav';
import BottomNavFix from './BottomNavFix';
import { colors } from '../theme/Theme';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
  dash: {
    display: 'flex',

    // for sidenav
    '& .MuiDrawer-docked': {
      backgroundColor: colors.drawerBg,
      borderRight: '1px solid rgba(0, 0, 0, 0.12)',
    },
  },
}));

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = React.useState(
    getWindowDimensions()
  );

  React.useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}

export default function Dashboard() {
  const classes = useStyles();

  const { width } = useWindowDimensions();

  const { path, url } = useRouteMatch();

  return (
    <div className={classes.root}>
      <div className={classes.dash}>
        <CssBaseline />
        {width > 900 ? (
          <SideNav url={url} width={width} />
        ) : (
          <BottomNav url={url} />
        )}

        <Switch>
          <Route exact path={path}>
            <MainDashboard />
          </Route>
          <Route path={`${path}/research-statement`}>
            <Statement />
          </Route>
          <Route path={`${path}/profile`}>
            <Profile />
          </Route>
        </Switch>
      </div>
      {width < 900 ? <BottomNavFix /> : null}
    </div>
  );
}
