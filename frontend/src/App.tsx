import React, { useState } from 'react';
import './App.css';
import { Paper } from '@material-ui/core';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import TopNavBar from './component/navigation/top-nav-bar.component';
import SideNavBar from './component/navigation/side-nav-bar.component';


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
            <div>
              Questions
            </div>
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
