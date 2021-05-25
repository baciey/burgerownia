import React from "react";
import { Route, Switch } from "react-router-dom";
//PAGES
import Home from "./pages/Home";
import About from "./pages/About";
import Menu from "./pages/Menu";
import Contact from "./pages/Contact";
import EventsOrganization from "./pages/EventsOrganization";
import News from "./pages/News";
//COMPONENTS
import NewsSingleArticlePage from "./pages/NewsSingleArticlePage";

const Main = () => {
  return (
    <div className="page-content-container">
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/menu">
          <Menu />
        </Route>
        <Route path="/o-nas">
          <About />
        </Route>
        <Route path="/kontakt">
          <Contact />
        </Route>
        <Route path="/organizacja-imprez">
          <EventsOrganization />
        </Route>
        <Route path="/aktualnosci" exact>
          <News />
        </Route>
        <Route path={`/aktualnosci/:articleId`}>
          <NewsSingleArticlePage />
        </Route>
      </Switch>
    </div>
  );
};

export default Main;
