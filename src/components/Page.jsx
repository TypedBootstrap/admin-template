import React from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames';
import { Navigation, Sidebar, StickyFooter } from 'components/layout';

/**
 * Page
 */
const Page = ({ children, sidebarToggled }) => (
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

const mapStateToProps = store => ({ ...store.settings });

export default connect(mapStateToProps)(Page);
