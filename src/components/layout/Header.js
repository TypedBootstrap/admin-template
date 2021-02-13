import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
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
import { toggleSetting } from '../../store/actions';
import { LogoutModal } from '../modals';

const Header = () => {
    const dispatch = useDispatch();

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    const toggleSidebar = () => dispatch(toggleSetting('sidebarToggled'));

    return (
        <header className="header">
            <Navbar color="dark" dark expand sticky="top">
                <NavbarBrand className="mr-1" href="index.html">
                    Start Bootstrap
                </NavbarBrand>
                <Button
                    type="button"
                    color="link"
                    size="sm"
                    className="text-white order-1 order-sm-0"
                    onClick={toggleSidebar}>
                    <FontAwesomeIcon icon="bars" />
                </Button>

                <Form className="d-none d-md-inline-block ml-auto mr-0 mr-md-3 my-2 my-md-0" inline>
                    <InputGroup>
                        <Input type="text" placeholder="Search for..." aria-label="Search" />
                        <InputGroupAddon addonType="append">
                            <Button type="button" color="primary">
                                <FontAwesomeIcon icon="search" />
                            </Button>
                        </InputGroupAddon>
                    </InputGroup>
                </Form>

                <Nav className="ml-auto ml-md-0" navbar>
                    <UncontrolledDropdown className="mx-1" nav inNavbar>
                        <DropdownToggle nav>
                            <FontAwesomeIcon icon="bell" fixedWidth />
                            <Badge color="danger">9+</Badge>
                        </DropdownToggle>
                        <DropdownMenu right>
                            <DropdownItem>Action</DropdownItem>
                            <DropdownItem>Another action</DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem>Something else here</DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                    <UncontrolledDropdown className="mx-1" nav inNavbar>
                        <DropdownToggle nav>
                            <FontAwesomeIcon icon="envelope" fixedWidth />
                            <Badge color="danger">7</Badge>
                        </DropdownToggle>
                        <DropdownMenu right>
                            <DropdownItem>Action</DropdownItem>
                            <DropdownItem>Another action</DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem>Something else here</DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                    <UncontrolledDropdown className="mx-1" nav inNavbar>
                        <DropdownToggle nav>
                            <FontAwesomeIcon icon="user-circle" fixedWidth />
                        </DropdownToggle>
                        <DropdownMenu right>
                            <DropdownItem>Settings</DropdownItem>
                            <DropdownItem>Activity Log</DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem onClick={toggle}>Logout</DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                </Nav>
            </Navbar>
            <LogoutModal isOpen={isOpen} handleToggle={toggle} />
        </header>
    );
};

export default Header;
