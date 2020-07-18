import React from 'react';

import { Theme, makeStyles, fade } from '@material-ui/core/styles';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import IconButton from '@material-ui/core/IconButton';

import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/Notifications';

interface Props {
    toggleDrawer(): void;
}

const useStyles = makeStyles((theme: Theme) => ({
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
    },
    menuButton: {
        marginRight: theme.spacing(0),
        [theme.breakpoints.up('sm')]: {
            marginRight: theme.spacing(2),
        },
    },
    title: {
        flexGrow: 1,
    },
    toolbarIcon: {
        display: 'none',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(1),
        ...theme.mixins.toolbar,
        [theme.breakpoints.up('sm')]: {
            display: 'flex',
        },
    },
}));

const TopNavBar: React.FC<Props> = ({ toggleDrawer }) => {
    const classes = useStyles();

    return (
        <AppBar aria-label="Top Navigation Menu" className={classes.appBar}>
            <Toolbar>
                <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="open drawer"
                    onClick={toggleDrawer}
                    className={classes.menuButton}
                >
                    <MenuIcon />
                </IconButton>
                <Typography component="h1" variant="h6" color="inherit" noWrap aria-label="New Coder" className={classes.title}>
                    New Coder
                </Typography>
                <IconButton color="inherit" className={classes.toolbarIcon}>
                    <Badge badgeContent={4} color="secondary">
                        <NotificationsIcon />
                    </Badge>
                </IconButton>
                <IconButton color="inherit" className={classes.toolbarIcon}>
                    <Badge badgeContent={3} color="secondary">
                        <NotificationsIcon />
                    </Badge>
                </IconButton>
            </Toolbar>
        </AppBar>
    );
}

export default TopNavBar;