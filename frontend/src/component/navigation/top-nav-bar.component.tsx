import React, { useState, useRef } from 'react';
import { AppBar, Toolbar, Typography, List, ListItem, ListItemIcon, ListItemText, MenuItem, IconButton, Container } from '@material-ui/core';
import { createStyles, fade, Theme, makeStyles } from '@material-ui/core/styles';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import InfoIcon from '@material-ui/icons/Info';

interface Navigation {
    text: string;
    icon: any;
    onClick(): void
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1
        },
        title: {
            display: 'none',
            [theme.breakpoints.up('sm')]: {
                display: 'block',
                marginRight: theme.spacing(2),
            },
        },
        menuButton: {
            marginInline: theme.spacing(2),
        },

    }),
);

const TopNavBar: React.FC<RouteComponentProps> = ({ history }) => {
    const classes = useStyles();
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

    return (
        <AppBar position="static" >
            <Container>
                <Toolbar>
                    <Typography className={classes.title} variant="h6" noWrap>
                        New Coder
                    </Typography>
                    {navigations.map((navigation: Navigation) => {
                        const { text, icon, onClick } = navigation;
                        return (
                            <MenuItem aria-label={text} color="inherit" className={classes.menuButton} onClick={onClick}>
                                {icon}
                                <Typography className={classes.title} variant="subtitle1" noWrap>
                                    {text}
                                </Typography>
                            </MenuItem>
                        );
                    })}
                </Toolbar>
            </Container>

        </AppBar>
    );
}

export default withRouter(TopNavBar);