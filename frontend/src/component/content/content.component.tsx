import React from 'react';

import { makeStyles, Theme, createStyles } from '@material-ui/core';

import Container from '@material-ui/core/Container';

import { Switch, Route } from 'react-router-dom';

import Home from '../home/home.component';
import QuestionHome from '../questions/question-home.component';
import About from '../about/about.component';
import Resume from '../resume/resume.component';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
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

const Content: React.FC = () => {
    const classes = useStyles();

    return (
        <main className={classes.content}>
            <div className={classes.appBarSpacer} />
            <Container maxWidth="lg" className={classes.container}>
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
                    <Route path="/resume">
                        <Resume />
                    </Route>
                </Switch>
            </Container>

        </main>
    );
}

export default Content;