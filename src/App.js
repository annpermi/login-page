import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path='/' component={SignUp} />
          <Route path='/signin' component={SignIn} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
