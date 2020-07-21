import React from 'react';

import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

interface Props {
    title: string;
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        paper: {
            padding: theme.spacing(2),
            color: theme.palette.text.secondary,
        },
        list: {
            position: 'relative',
            overflow: 'auto',
        },
    }),
);

const Section: React.FC<Props> = ({ title, children }) => {
    const classes = useStyles();

    return (
        <Grid item xs={12}>
            <Paper className={classes.paper}>
                <List className={classes.list} subheader={<li />}>
                    <ListItem>
                        <ListItemText primary={title} primaryTypographyProps={{ variant: "h4" }} aria-label={title}></ListItemText>
                    </ListItem>
                    <Divider />
                    <ListItem>
                        {children}
                    </ListItem>
                </List>
            </Paper>
        </Grid>
    );
}

export default Section;