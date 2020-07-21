import React from 'react';

import TopNavBar from './top-nav-bar.component';
import SideNavBar from './side-nav-bar.component';

const Navigation: React.FC = () => {
    const [openSideNav, setOpenSideNav] = React.useState(true);

    const toggleDrawer = () => {
        setOpenSideNav(!openSideNav);
    };

    const handleDrawerClose = () => {
        if (openSideNav) {
            setOpenSideNav(false);
        }
    };

    return (
        <>
            <TopNavBar toggleDrawer={toggleDrawer} />
            <SideNavBar openSideNav={openSideNav} handleDrawerClose={handleDrawerClose} />
        </>
    );
}

export default Navigation;