import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./custom.scss";
import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import About from "./components/About";
import AllCats from "./components/AllCats";
import CatMatches from "./components/Matched/MatchedCats";
import LandingPage from "./components/LandingPage";
import Match from "./components/Match";
import NavMenu from "./components/Navbar";
import PageNotFound from "./components/PageNotFound";
import RandomCatFact from "./components/RandomCatFact";
import Adopt from "./components/Matched/Adopt";
import Personality from "./components/Matched/Personality";

function App() {
  return (
    <div className="App">
      <NavMenu></NavMenu>
      <Switch>
        <Route exact path="/">
          <LandingPage />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route path="/match">
          <Match />
        </Route>
        <Route path="/match">
          <Match />
        </Route>
        <Route path="/Matched/Adopt">
          <Adopt />
        </Route>
        <Route path="/Matched/Personality">
          <Personality />
        </Route>
        <Route path="/cat-facts">
          <RandomCatFact />
        </Route>
        <Route path="/all-cats">
          <AllCats />
        </Route>
        <PageNotFound />
      </Switch>
    </div>
  );
}

export default App;
