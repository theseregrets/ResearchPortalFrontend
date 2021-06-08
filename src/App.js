import Navbar from './Components/navbar/Navbar'
import Homepage from './Components/homepage/homepage'
import './general.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Dashboard from './Components/Admin Dashboard/adminDashboard'
import Milestones from './Components/Milestones/milestones'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route exact path="/milestones">
            <Milestones />
          </Route>
          <Route exact path="/dashboard">
            <Dashboard />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
