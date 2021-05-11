import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import MainContainer from "./pages/main";
import UserContainer from "./pages/_user";
import RepositoryContainer from "./pages/_user/_repository";
import RepositoriesContainer from "./pages/_user/repositories";
import SettingsContainer from "./pages/_user/settings";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" component={MainContainer} exact />
          <Route path="/:user" component={UserContainer} exact />
          <Route
            path="/:user/repositories"
            component={RepositoriesContainer}
            exact
          />
          <Route path="/:user/settings" component={SettingsContainer} exact />
          <Route
            path="/:user/:repository"
            component={RepositoryContainer}
            exact
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
