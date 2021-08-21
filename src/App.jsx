import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import Backdrop from '@material-ui/core/Backdrop';
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/core/Alert';
import CircularProgress from '@material-ui/core/CircularProgress';
import theme from './Components/theme/Theme';
import Navbar from './Components/navbar/Navbar';
import Footer from './Components/footer/Footer';
import Homepage from './Components/homepage/homepage';
import './general.css';
import Milestones from './Components/Milestones/milestones';
import Team from './Components/team/Team';
import About from './Components/about/AboutUs';
import Login from './Components/login/Login';
import Projects from './Components/projects/Projects';
import Signup from './Components/signup/Signup';
import UserDashboard from './Components/userDashboard/Dashboard';
import DashboardTeacher from './Components/teacherDashboard/teacher-dashboard';
import ScrollToTop from './Components/scrollToTop/ScrollToTop';
import feedback from './Redux/Actions/feedback';

function App() {
  const state = useSelector((state) => state.profile);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={state.feedback === 'backdrop'}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      {/* <Snackbar
        open={state.feedback === 'snackbar'}
        autoHideDuration={2000}
        onClose={dispatch(feedback(''))}
      >
        <Alert onClose={dispatch(feedback(''))} severity="success">
          You have successfully logged in!!
        </Alert>
      </Snackbar> */}
      <ThemeProvider theme={theme}>
        <Router>
          <ScrollToTop />
          <Navbar />
          <Switch>
            <Route exact path="/">
              <Homepage />
            </Route>
            <Route exact path="/milestones">
              <Milestones />
            </Route>
            <Route exact path="/team">
              <Team />
            </Route>
            <Route exact path="/about-us">
              <About />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/projects">
              <Projects />
            </Route>
            <Route exact path="/signup">
              <Signup />
            </Route>
            <Route path="/dashboard">
              {state.isStudent ? <UserDashboard /> : <DashboardTeacher />}
            </Route>
          </Switch>
          <Footer />
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
