import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import { ListItem, List, ListItemText, Drawer, ListItemIcon } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import InfoIcon from '@material-ui/icons/Info';


interface Props extends RouteComponentProps {
  showSideNavBar: boolean;
  closeSideNavBar(): void;
}

interface Navigation {
  text: string;
  icon: any;
  onClick(): void
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    list: {
      width: 250,
    },
    fullList: {
      width: 'auto',
    },
  }),
);

const SideNavBar: React.FC<Props> = ({ showSideNavBar, closeSideNavBar, history }) => {
  const navigations: Navigation[] = [
    {
      text: "Home",
      icon: <HomeIcon />,
      onClick: () => history.push("/")
    },
    {
      text: "Question", 
      icon: <QuestionAnswerIcon />,
      onClick: () => history.push("/questions")
    },
    {
      text: "About", 
      icon: <InfoIcon />,
      onClick: () => history.push("/about")
    },
  ]

  const classes = useStyles();

  return (
    <Drawer
      anchor="left"
      open={showSideNavBar}
      onClose={closeSideNavBar}
      children={
        <div
          className={classes.list}
          role="navigation"
          onClick={closeSideNavBar}
          onKeyDown={closeSideNavBar}
        >
          <List>
            {navigations.map((navigation: Navigation) => {
              const { text, icon, onClick } = navigation;
              return (
                <ListItem button key={text} onClick={onClick}>
                  <ListItemIcon>{icon}</ListItemIcon>
                  <ListItemText primary={text} />
                </ListItem>
              );
            })}
          </List>
        </div>
      }
    />
  );
}

export default withRouter(SideNavBar);
