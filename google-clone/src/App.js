import './App.css';
import Home from "./pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SearchPage from "./pages/SearchPage";

function App() {
  return (
    <div className="app" id="dkm">
      <Router>
        <Switch>
          <Route path="/search">
              <SearchPage />
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
