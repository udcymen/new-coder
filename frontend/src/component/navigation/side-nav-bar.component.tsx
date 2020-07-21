import React from 'react';

import { Theme, makeStyles, createStyles } from '@material-ui/core/styles';

import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import HomeIcon from '@material-ui/icons/Home';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import InfoIcon from '@material-ui/icons/Info';
import DescriptionIcon from '@material-ui/icons/Description';

import { NavLink } from 'react-router-dom';

import clsx from 'clsx';

interface Props {
    openSideNav: boolean | undefined;
    handleDrawerClose(): void;
}

interface NavigationItem {
    text: string;
    to: string;
    icon: any;
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        drawerPaper: {
            position: 'relative',
            whiteSpace: 'nowrap',
            width: theme.spacing(26),
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
            backgroundColor: '#18202c',
        },
        drawerPaperClose: {
            overflowX: 'hidden',
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
            width: theme.spacing(7),
            [theme.breakpoints.up('sm')]: {
                width: theme.spacing(9),
            },
        },
        appBarSpacer: {
            ...theme.mixins.toolbar,
        },
        navLink: {
            textDecoration: 'none',
        },
        item: {
            paddingTop: theme.spacing(2),
            paddingBottom: theme.spacing(2),
            color: 'rgba(255, 255, 255, 0.7)',
            '&:hover,&:focus': {
                backgroundColor: 'rgba(255, 255, 255, 0.08)',
            }
        },
        itemIcon: {
            color: 'white',
        },
        divider: {
            backgroundColor: 'white',
        },
    }),
);

const SideNavBar: React.FC<Props> = ({ openSideNav, handleDrawerClose }) => {
    const classes = useStyles();

    const [selectedIndex, setSelectedIndex] = React.useState(0);

    const handleListItemClick = (index: number) => {
        handleDrawerClose();
        console.log(index);
        setSelectedIndex(index);
    };

    const NavigationItems: NavigationItem[] = [
        {
            text: "Home",
            to: "/",
            icon: <HomeIcon />
        },
        {
            text: "Question",
            to: "/question",
            icon: <QuestionAnswerIcon />
        },
        {
            text: "About",
            to: "/about",
            icon: <InfoIcon />
        },
        {
            text: "Resume",
            to: "/resume",
            icon: <DescriptionIcon />
        },
    ]

    return (
        <Drawer
            aria-label="Side Navigation Menu"
            variant="permanent"
            classes={{
                paper: clsx(classes.drawerPaper, !openSideNav && classes.drawerPaperClose),
            }}
            open={openSideNav}
        >
            <div className={classes.appBarSpacer} />
            <List>
                {NavigationItems.map((navigationItem: NavigationItem, index: number) => {
                    const { to, text, icon } = navigationItem;
                    return (
                        <NavLink to={to} key={text} className={classes.navLink}>
                            <ListItem
                                button
                                selected={selectedIndex === index}
                                aria-label={text}
                                onClick={() => handleListItemClick(index)}
                                className={classes.item}
                            >
                                <ListItemIcon className={classes.itemIcon}>
                                    {icon}
                                </ListItemIcon>
                                <ListItemText primary={navigationItem.text} />
                            </ListItem>
                        </NavLink>
                    );
                })}
            </List>
        </Drawer>
    );
}

export default SideNavBar;