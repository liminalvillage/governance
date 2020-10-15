import { Header } from 'components/Header';
import { Loader } from 'components/Loader';
import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

const Home = lazy(() => import('pages/Home'));
const Repository = lazy(() => import('pages/Repository'));

export function Default() {
  return (
    <div>
      <BrowserRouter>
        <Header />

        <Suspense fallback={<Loader />}>
          <div className="container">
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/:org/:repo">
                <Repository />
              </Route>
              <Redirect to="/" />
            </Switch>
          </div>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}