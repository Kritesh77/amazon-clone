import "./App.css";
import Header from "./components/Header.js";
import Mainwrap from "./components/Mainwrap.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Header />

        <Switch>
          <Route path="/checkout"></Route>
          <Route path="/">
            <Mainwrap />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
