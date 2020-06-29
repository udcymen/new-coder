import React from 'react';
import './App.css';
import { Paper } from '@material-ui/core';
import TopNavBar from './component/navigation/top-nav-bar.component';
import { Switch, Route, BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <Paper>
        <TopNavBar />
        <Switch>
          <Route path="/questions">
            <div>
              Questions
            </div>
          </Route>
          <Route path="/about">
            <div>
              About
            </div>
          </Route>
          <Route path="/">
            <div>
              Home
            </div>
          </Route>
        </Switch>
      </Paper>
    </BrowserRouter>
  );
}

export default App;
