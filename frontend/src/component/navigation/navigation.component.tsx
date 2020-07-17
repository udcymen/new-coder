import React from 'react';

import TopNavBar from './top-nav-bar.component';
import SideNavBar from './side-nav-bar.component';

const Navigation: React.FC = () => {
    const [openSideNav, setOpenSideNav] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpenSideNav(true);
    };

    const handleDrawerClose = () => {
        setOpenSideNav(false);
    };

    return (
        <>
            <TopNavBar openSideNav={openSideNav} handleDrawerOpen={handleDrawerOpen} />
            <SideNavBar openSideNav={openSideNav} handleDrawerClose={handleDrawerClose} />
        </>
    );
}

export default Navigation;