import { BrowserRouter, Route, Switch } from "react-router-dom";
import { LoginPage } from "../screens/LoginPage/LoginPage";
import React from "react";
import { SignUpPage } from "../screens/SignUpPage/SignUpPage";
import FeedPage from "../screens/feedPage/feedPage";
export function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/login">
          <LoginPage />
        </Route>
        <Route exact path="/signup">
          <SignUpPage />
        </Route>
        <Route exact path="/">
          <FeedPage />
        </Route>

      </Switch>
    </BrowserRouter>
  );
}
