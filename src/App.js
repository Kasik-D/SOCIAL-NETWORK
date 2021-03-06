import "./App.css";
import Aside from "./components/Aside/Aside";
import HeaderContainer from "./components/Header/HeaderContainer";
import Massage from "./components/Massage/Massage";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";

function App(props) {
  return (
    <Router>
      <div className="wrapper">
        <HeaderContainer />
        <Aside />
        <main className="main">
          <Switch>
            <Route path="/Profile/:userId?">
              <ProfileContainer />
            </Route>
            <Route path="/Massages">
              <Massage />
            </Route>
            <Route path="/Users">
              <UsersContainer />
            </Route>
            <Route path="/Music">
              <Music />
            </Route>
            <Route path="/Settings">
              <Settings />
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
