import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./index.scss";
import LandingPage from "./LandingPage";
import MoviePage from "./MoviePage";
import SearchPage from "./SearchPage";
import NotFoundPage from "./NotFoundPage";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={LandingPage} />
      <Route path="/search" exact component={SearchPage} />
      <Route path="/movie" exact component={MoviePage} />
      <Route component={NotFoundPage} />
    </Switch>
  </BrowserRouter>
);
export default Router;
