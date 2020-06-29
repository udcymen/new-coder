import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, InputBase, IconButton } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { createStyles, fade, Theme, makeStyles } from '@material-ui/core/styles';
import SideNavBar from './side-nav-bar.component';



const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1
        },
        title: {
            display: 'none',
            [theme.breakpoints.up('sm')]: {
                display: 'block'
            },
        },
        search: {
            flexGrow: 1,
            position: 'relative',
            borderRadius: theme.shape.borderRadius,
            backgroundColor: fade(theme.palette.common.white, 0.15),
            '&:hover': {
                backgroundColor: fade(theme.palette.common.white, 0.25)
            },
            marginLeft: theme.spacing(5),
        },
        searchIcon: {
            padding: theme.spacing(0, 2),
            height: '100%',
            position: 'absolute',
            pointerEvents: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        },
        inputRoot: {
            color: 'inherit'
        },
        inputInput: {
            padding: theme.spacing(1, 1, 1, 0),
            paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
            transition: theme.transitions.create('width'),
            width: '100%'
        },
    }),
);

function TopNavBar() {
    const classes = useStyles();

    return (
        <AppBar position="static" >
            <Toolbar>
                <SideNavBar />
                <Typography className={classes.title} variant="h6" noWrap>
                    New Coder
                </Typography>
                <div className={classes.search}>
                    <div className={classes.searchIcon}>
                        <SearchIcon />
                    </div>
                    <InputBase
                        placeholder="Search Question Here…"
                        classes={{
                            root: classes.inputRoot,
                            input: classes.inputInput,
                        }}
                        inputProps={{ 'aria-label': 'search questions' }}
                    />
                </div>
            </Toolbar>
        </AppBar>
    );
}

export default TopNavBar;