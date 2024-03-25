import React from 'react';
import { DashboardLayout } from '@typedbootstrap/admin-components';
import { Footer, Sidenav, Topnav } from 'components/organisms';
import { useAppSelector } from 'hooks';
import { selectSidebarToggled } from 'store/uiSlice';

export interface DefaultTemplateProps {
    children?: React.ReactNode;
}

const DefaultTemplate: React.FC<DefaultTemplateProps> = ({ children }) => {
    const sidebarToggled = useAppSelector(selectSidebarToggled);

    return (
        <DashboardLayout
            topnav={<Topnav />}
            sidenav={<Sidenav />}
            sidenavToggled={sidebarToggled}
            footer={<Footer />}
            topnavFixed>
            <main>{children}</main>
        </DashboardLayout>
    );
};

export default DefaultTemplate;
