import './App.css';
import Home from "./pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/search">
              <h1>Search page</h1>
          </Route>
          <Route path="/">
              <Home />
          </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
