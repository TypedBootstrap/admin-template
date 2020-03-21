import React from 'react';
import { connect } from 'react-redux';
import { toggleSetting } from 'store/actions';
import {
    Badge,
    Button,
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
    Nav,
    Navbar,
    NavbarBrand,
    UncontrolledDropdown
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faBell, faEnvelope, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import SearchForm from 'components/SearchForm';

/**
 * Navigation
 */
const Navigation = ({ toggleSetting }) => {
    const toggleSidebar = e => {
        e.preventDefault();

        toggleSetting('sidebarToggled');
    };

    return (
        <Navbar className="Navigation" color="primary" dark expand sticky="top">
            <NavbarBrand>React Admin</NavbarBrand>
            <Button
                className="text-white order-1 order-sm-0"
                color="link"
                size="sm"
                onClick={toggleSidebar}>
                <FontAwesomeIcon icon={faBars} />
            </Button>
            <SearchForm />
            <Nav className="ml-auto ml-md-0" navbar>
                <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav>
                        <FontAwesomeIcon icon={faBell} fixedWidth />
                        <Badge color="danger">9+</Badge>
                    </DropdownToggle>
                    <DropdownMenu right>
                        <DropdownItem href="/#">Action</DropdownItem>
                        <DropdownItem href="/#">Action action</DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem href="/#">Action else here</DropdownItem>
                    </DropdownMenu>
                </UncontrolledDropdown>
                <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav>
                        <FontAwesomeIcon icon={faEnvelope} fixedWidth />
                        <Badge color="danger">7</Badge>
                    </DropdownToggle>
                    <DropdownMenu right>
                        <DropdownItem href="/#">Action</DropdownItem>
                        <DropdownItem href="/#">Action action</DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem href="/#">Action else here</DropdownItem>
                    </DropdownMenu>
                </UncontrolledDropdown>
                <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav>
                        <FontAwesomeIcon icon={faUserCircle} fixedWidth />
                    </DropdownToggle>
                    <DropdownMenu right>
                        <DropdownItem href="/#">Settings</DropdownItem>
                        <DropdownItem href="/#">Activity Log</DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem href="/#">Logout</DropdownItem>
                    </DropdownMenu>
                </UncontrolledDropdown>
            </Nav>
        </Navbar>
    );
};

export default connect(null, { toggleSetting })(Navigation);
