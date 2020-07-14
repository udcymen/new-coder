import React, { useState } from 'react';
import './App.css';
import { Paper, Container } from '@material-ui/core';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import TopNavBar from './component/navigation/top-nav-bar.component';
import QuestionHome from './component/questions/question-home.component';

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <TopNavBar />
      <Container>
          <Switch>
            <Route exact path="/">
              <div>
                Home
            </div>
            </Route>
            <Route path="/questions">
              <QuestionHome />
            </Route>
            <Route path="/about">
              <div>
                About
            </div>
            </Route>
          </Switch>
      </Container>
    </BrowserRouter>
  );
}

export default App;
