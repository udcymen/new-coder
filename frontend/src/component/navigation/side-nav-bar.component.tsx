import React, { useState } from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import { ListItem, List, ListItemText, IconButton, SwipeableDrawer } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';


interface Navigation {
  title: string;
  link: string;
}

const navigations: Navigation[] = [
  {title: "Home", link: ""},
  {title: "Question", link: "/questions"},
  {title: "About", link: "/about"},
]

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    list: {
      width: 250,
    },
    fullList: {
      width: 'auto',
    },
    menuButton: {
      marginRight: theme.spacing(2)
    },
  }),
);

function SideNavBar() {
  const classes = useStyles();
  const [showSideNavBar, setShowSideNavBar] = useState(false);

  return (
    <React.Fragment>
      <IconButton
        edge="start"
        className={classes.menuButton}
        onClick={() => setShowSideNavBar(true)}
        color="inherit"
        aria-label="open menu"
      >
        <MenuIcon />
      </IconButton>
      <SwipeableDrawer
        anchor="left"
        open={showSideNavBar}
        onClose={() => setShowSideNavBar(false)}
        onOpen={() => setShowSideNavBar(true)}
      >
        <div
          className={classes.list}
          role="navigation"
          onClick={() => setShowSideNavBar(false)}
          onKeyDown={() => setShowSideNavBar(false)}
        >
          <List>
            {navigations.map((navigation: Navigation) => (
              <ListItem button key={navigation.title}>
                <Link to={navigation.link}>
                  <ListItemText primary={navigation.title} />
                </Link>
              </ListItem>
            ))}
          </List>
        </div>
      </SwipeableDrawer>

    </React.Fragment>
  );
}

export default SideNavBar;