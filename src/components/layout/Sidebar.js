import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classnames from 'classnames';
import menu from 'config/menu';
import { useSelector } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import {
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown
} from 'reactstrap';

/**
 * Sidebar Item
 */
const SidebarItem = ({ active, item }) => (
    <NavItem active={active}>
        <NavLink tag={Link} to={item.path}>
            <FontAwesomeIcon icon={item.icon} fixedWidth />
            <span>{item.name}</span>
        </NavLink>
    </NavItem>
);

/**
 * Sidebar Sub Menu
 */
const SidebarSubMenu = ({ active, item }) => (
    <UncontrolledDropdown active={active} nav inNavbar>
        <DropdownToggle nav>
            <FontAwesomeIcon icon={item.icon} fixedWidth />
            <span>{item.name}</span>
        </DropdownToggle>
        <DropdownMenu>
            {item.subMenu.map((item, i) => {
                if (item.heading) {
                    return <SidebarSubMenuItemHeading key={i} heading={item.heading} />;
                }

                return <SidebarSubMenuItem key={i} item={item} />;
            })}
        </DropdownMenu>
    </UncontrolledDropdown>
);

/**
 * Sidebar Sub Menu Item
 */
const SidebarSubMenuItem = ({ item }) => (
    <DropdownItem tag={Link} to={item.path}>
        {item.name}
    </DropdownItem>
);

/**
 * Sidebar Sub Menu Item Header
 */
const SidebarSubMenuItemHeading = ({ heading }) => (
    <DropdownItem tag="h6" header>
        {heading}
    </DropdownItem>
);

/**
 * Sidebar
 */
const Sidebar = ({ location }) => {
    const { sidebarToggled } = useSelector(state => state.settings);

    const isRouteActive = paths => {
        paths = Array.isArray(paths) ? paths : [paths];
        if (paths.indexOf(location.pathname) > -1) {
            return true;
        }

        return false;
    };

    const getSubMenuRoutes = item => {
        return item.subMenu.map(({ path }) => path);
    };

    return (
        <div className={classnames('sidebar', { toggled: sidebarToggled })}>
            <Nav navbar>
                {menu.map((item, i) => {
                    if (!item.subMenu) {
                        const isActive = isRouteActive(item.path);

                        return <SidebarItem key={i} active={isActive} item={item} />;
                    } else if (item.subMenu) {
                        const isActive = isRouteActive(getSubMenuRoutes(item));

                        return <SidebarSubMenu key={i} active={isActive} item={item} />;
                    }

                    return null;
                })}
            </Nav>
        </div>
    );
};

export default withRouter(Sidebar);
