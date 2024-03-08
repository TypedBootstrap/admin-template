import React from 'react';
import { faBars, faSearch, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import {
    Button,
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
    Form,
    Input,
    InputGroup,
    Nav,
    Navbar,
    NavbarBrand,
    UncontrolledDropdown
} from 'reactstrap';
import { useAppDispatch } from '../../../hooks';
import { uiActions } from '../../../store/uiSlice';

export interface TopnavProps {}

const Topnav: React.FC<TopnavProps> = () => {
    const dispatch = useAppDispatch();

    const toggleSidenav = (): void => {
        dispatch(uiActions.toggleSetting('sidebarToggled'));
    };

    return (
        <Navbar color="dark" dark expand>
            <NavbarBrand tag={Link} to="/">
                Start Bootstrap
            </NavbarBrand>
            <Button
                id="sidenav-toggle"
                className="order-1 order-lg-0 me-4 me-lg-0"
                color="link"
                onClick={toggleSidenav}
                size="sm">
                <FontAwesomeIcon icon={faBars} />
            </Button>
            <Form className="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0">
                <InputGroup>
                    <Input type="text" placeholder="Search for..." />
                    <Button type="button" color="primary">
                        <FontAwesomeIcon icon={faSearch} />
                    </Button>
                </InputGroup>
            </Form>
            <Nav className="ms-auto ms-md-0 me-3 me-lg-4" navbar>
                <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret>
                        <FontAwesomeIcon icon={faUser} fixedWidth />
                    </DropdownToggle>
                    <DropdownMenu end>
                        <DropdownItem>Option 1</DropdownItem>
                        <DropdownItem>Option 2</DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem tag={Link} to="/login">Logout</DropdownItem>
                    </DropdownMenu>
                </UncontrolledDropdown>
            </Nav>
        </Navbar>
    );
};

export default Topnav;
