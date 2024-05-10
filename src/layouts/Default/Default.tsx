import React from 'react';
import { DashboardLayout } from '@typedbootstrap/admin-components';
import { Footer, Sidenav, Topnav } from 'components/organisms';
import { useAppSelector } from 'hooks';
import { Outlet } from 'react-router-dom';
import { selectSidebarToggled } from 'store/uiSlice';

export interface DefaultProps {}

const Default: React.FC<DefaultProps> = () => {
    const sidebarToggled = useAppSelector(selectSidebarToggled);

    return (
        <DashboardLayout
            topnav={<Topnav />}
            sidenav={<Sidenav />}
            footer={<Footer />}
            sidenavToggled={sidebarToggled}>
            <Outlet />
        </DashboardLayout>
    );
};

export default Default;
