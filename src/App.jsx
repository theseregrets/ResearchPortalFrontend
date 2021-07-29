import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core';
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

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Router>
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
              <UserDashboard />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
