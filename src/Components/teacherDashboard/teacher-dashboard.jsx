import React from 'react';
import { Route, Switch, useRouteMatch, Link } from 'react-router-dom';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import PeopleIcon from '@material-ui/icons/People';
import AssignmentIcon from '@material-ui/icons/Assignment';
import CreateIcon from '@material-ui/icons/Create';
import Posts from './posts';
import Profile from './profile';
import ProjectDetail from './project-detail';
import BottomNav from './BottomNav';
import BottomNavFix from './BottomNavFix';
import NewPost from './new-post';
import { colors } from '../theme/Theme';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    minHeight: '100vh',
    // for sidenav
    '& .MuiDrawer-docked': {
      backgroundColor: colors.drawerBg,
      borderRight: '1px solid rgba(0, 0, 0, 0.12)',
    },
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'sticky',
    top: '80px',
    border: '0',
    height: 'auto',
    whiteSpace: 'nowrap',
    width: '240px',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
  },
  drawerListText: {
    color: 'initial',
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'none',
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

export default function DashboardTeacher() {
  const classes = useStyles();
  const { width } = useWindowDimensions();
  const [open, setOpen] = React.useState(width > 900);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  const { path, url } = useRouteMatch();

  return (
    <div className={classes.root}>
      <CssBaseline />
      {width > 900 ? (
        <Drawer
          variant="permanent"
          classes={{
            paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
          }}
          open={open}
        >
          <div className={classes.toolbarIcon}>
            <IconButton onClick={open ? handleDrawerClose : handleDrawerOpen}>
              {open ? <ChevronLeftIcon /> : <ChevronRightIcon />}
            </IconButton>
          </div>
          <Divider />

          <List>
            {/* <Link to={`${url}`} className={classes.drawerListText}>
                <ListItem button>
                  <ListItemIcon>
                    <DashboardIcon />
                  </ListItemIcon>
                  <ListItemText primary="Dashboard" />
                </ListItem>
              </Link> */}

            <Link to={`${url}`} className={classes.drawerListText}>
              <ListItem button>
                <ListItemIcon>
                  <AssignmentIcon />
                </ListItemIcon>
                <ListItemText primary="Projects" />
              </ListItem>
            </Link>

            <Link
              to={`${url}/create-project`}
              className={classes.drawerListText}
            >
              <ListItem button>
                <ListItemIcon>
                  <CreateIcon />
                </ListItemIcon>
                <ListItemText primary="Create-Project" />
              </ListItem>
            </Link>

            <Link to={`${url}/profile`} className={classes.drawerListText}>
              <ListItem button>
                <ListItemIcon>
                  <PeopleIcon />
                </ListItemIcon>
                <ListItemText primary="Profile" />
              </ListItem>
            </Link>
          </List>
        </Drawer>
      ) : (
        <BottomNav url={url} />
      )}

      <Switch>
        {/* <Route exact path={path}>
            <Overview />
          </Route> */}

        <Route exact path={`${path}`}>
          <Posts />
        </Route>
        <Route path={`${path}/profile`}>
          <Profile />
        </Route>
        <Route path={`${path}/create-project`}>
          <NewPost />
        </Route>
        <Route path={`${path}/project-detail/:slug`}>
          <ProjectDetail />
        </Route>
      </Switch>
      {width < 900 ? <BottomNavFix /> : null}
    </div>
  );
}
