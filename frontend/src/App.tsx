import React from 'react';

import { CssBaseline, makeStyles, Theme } from '@material-ui/core';

import Container from '@material-ui/core/Container';

import { Switch, Route, BrowserRouter } from 'react-router-dom';

import Navigation from './component/navigation/navigation.component';
import QuestionHome from './component/questions/question-home.component';
import Home from './component/home/home.component';
import About from './component/about/about.component';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'flex',
  },
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  appBarSpacer: theme.mixins.toolbar,
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
}));

export const App: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <BrowserRouter>
        <CssBaseline />
        <Navigation />
        <main className={classes.content}>
          <div className={classes.appBarSpacer} />
          <Container className={classes.container}>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/question">
                <QuestionHome />
              </Route>
              <Route path="/about">
                <About />
              </Route>
            </Switch>
          </Container>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
