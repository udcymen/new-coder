import React, { useState } from 'react';
import './App.css';
import { Paper } from '@material-ui/core';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import TopNavBar from './component/navigation/top-nav-bar.component';
import SideNavBar from './component/navigation/side-nav-bar.component';
import QuestionHome from './component/questions/question-home.component';

export const App: React.FC = () => {
  const [showSideNavBar, setShowSideNavBar] = useState(false);

  const openSideNavBar = () => {
    setShowSideNavBar(true);
  }

  const closeSideNavBar = () => {
    setShowSideNavBar(false);
  }
  return (
    <BrowserRouter>
      <SideNavBar
        showSideNavBar={showSideNavBar}
        closeSideNavBar={closeSideNavBar}
      />
      <Paper>
        <TopNavBar
          openSideNavBar={openSideNavBar}
        />
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
      </Paper>
    </BrowserRouter>
  );
}

export default App;
