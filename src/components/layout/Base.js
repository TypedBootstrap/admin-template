import React from 'react';
import classnames from 'classnames';
import { useSelector } from 'react-redux';
import Header from './Header';
import Sidebar from './Sidebar';
import StickyFooter from './StickyFooter';

const Base = ({ children }) => {
    const { sidebarToggled } = useSelector(state => state.settings);

    return (
        <div className={classnames('Page', { 'sidebar-toggled': sidebarToggled })}>
            <Header />
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

export default Base;
