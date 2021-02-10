import React from 'react';
import { useSelector } from 'react-redux';
import classnames from 'classnames';
import { Navigation, Sidebar, StickyFooter } from 'components/layout';

/**
 * Page
 */
const Page = ({ children }) => {
    const { sidebarToggled } = useSelector(state => state.settings);

    return (
        <div className={classnames('Page', { 'sidebar-toggled': sidebarToggled })}>
            <Navigation />
            <div className="wrapper">
                <Sidebar />
                <div className="content-wrapper">
                    {children}
                    <StickyFooter />
                </div>
            </div>
        </div>
    );
};

export default Page;
