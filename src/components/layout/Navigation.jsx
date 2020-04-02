import React from 'react';
import { connect } from 'react-redux';
import { toggleSetting } from 'store/actions';
import {
    Badge,
    Button,
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
    Form,
    Input,
    InputGroup,
    InputGroupAddon,
    Nav,
    Navbar,
    NavbarBrand,
    UncontrolledDropdown
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

/**
 * Navigation
 */
const Navigation = ({ toggleSetting }) => {
    const toggleSidebar = e => {
        e.preventDefault();

        toggleSetting('sidebarToggled');
    };

    return (
        <Navbar className="Navigation" color="primary-dark" dark expand sticky="top">
            <NavbarBrand className="o-hidden">React Admin</NavbarBrand>
            <Button
                className="text-white order-1 order-sm-0"
                color="link"
                size="sm"
                onClick={toggleSidebar}>
                <FontAwesomeIcon icon="bars" />
            </Button>
            <Form className="d-none d-md-inline-block ml-auto mr-0 mr-md-3 my-2 my-md-0" inline>
                <InputGroup>
                    <Input type="text" placeholder="Search for..." />
                    <InputGroupAddon addonType="append">
                        <Button color="primary" type="button">
                            <FontAwesomeIcon icon="search" />
                        </Button>
                    </InputGroupAddon>
                </InputGroup>
            </Form>
            <Nav className="ml-auto ml-md-0" navbar>
                <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav>
                        <FontAwesomeIcon icon="bell" fixedWidth />
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
                        <FontAwesomeIcon icon="envelope" fixedWidth />
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
                        <FontAwesomeIcon icon="user-circle" fixedWidth />
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
