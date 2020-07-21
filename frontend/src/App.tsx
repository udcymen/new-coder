import React from 'react';

import { CssBaseline, makeStyles, Theme, createStyles } from '@material-ui/core';

import { BrowserRouter } from 'react-router-dom';

import Navigation from './component/navigation/navigation.component';
import Content from './component/content/content.component';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    content: {
      flexGrow: 1,
      height: '100vh',
      overflow: 'auto',
    },
    appBarSpacer: {
      ...theme.mixins.toolbar,
    },
    container: {
      padding: theme.spacing(4, 2),
    },
  }),
);

export const App: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <BrowserRouter>
        <CssBaseline />
        <Navigation />
        <Content />
      </BrowserRouter>
    </div>
  );
}

export default App;
