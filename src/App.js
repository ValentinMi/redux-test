import React from "react";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

import UsersList from "./pages/UsersList";
import UserProfil from "./pages/UserProfil";
import UserForm from "./pages/UserForm";
import Menu from "./components/Menu";

function App() {
  return (
    <div className="App">
      <Router>
        <Menu />
        <Switch>
          <Route path={"/users"} exact component={UsersList} />
          <Route path={"/users/new"} exact component={UserForm} />
          <Route path={"/users/:id"} exact component={UserProfil} />
          <Route
            path={"/configuration"}
            render={() => <h1>Page de configuration</h1>}
          />
          <Redirect from={"/create-user"} to={"/users/new"} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
