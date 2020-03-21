import React from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames';
import {
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
    Nav,
    NavItem,
    NavLink,
    NavbarText,
    UncontrolledDropdown
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import menu from 'config/menu';

/**
 * Sidebar
 */
const Sidebar = ({ sidebarToggled }) => (
    <div className={classnames('Sidebar', { toggled: sidebarToggled })}>
        <Nav navbar>
            {menu.map((item, i) => {
                if (item.heading) {
                    return <NavbarText key={i}>{item.heading}</NavbarText>;
                } else if (!item.subMenu) {
                    return (
                        <NavItem key={i}>
                            <NavLink tag={Link} to={item.path}>
                                <FontAwesomeIcon icon={item.icon} fixedWidth />
                                <span>{item.name}</span>
                            </NavLink>
                        </NavItem>
                    );
                } else if (item.subMenu) {
                    return (
                        <UncontrolledDropdown key={i} nav inNavbar>
                            <DropdownToggle nav>
                                <FontAwesomeIcon icon={item.icon} fixedWidth />
                                <span>{item.name}</span>
                            </DropdownToggle>
                            <DropdownMenu>
                                {item.subMenu.map((item, i) => {
                                    if (item.heading) {
                                        return (
                                            <DropdownItem key={i} tag="h6" header>
                                                {item.heading}
                                            </DropdownItem>
                                        );
                                    }

                                    return (
                                        <DropdownItem key={i} tag={Link} to={item.path}>
                                            {item.name}
                                        </DropdownItem>
                                    );
                                })}
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    );
                }

                return null;
            })}
        </Nav>
    </div>
);

const mapStateToProps = store => ({ ...store.settings });

export default connect(mapStateToProps)(Sidebar);
