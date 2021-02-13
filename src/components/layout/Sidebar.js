import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classnames from 'classnames';
import { useSelector } from 'react-redux';
import {
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown
} from 'reactstrap';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    const { sidebarToggled } = useSelector(state => state.ui);

    return (
        <Nav className={classnames('sidebar', { toggled: sidebarToggled })} navbar>
            <NavItem active>
                <NavLink tag={Link} to="/" >
                    <FontAwesomeIcon icon="tachometer-alt" fixedWidth />
                    <span>Dashboard</span>
                </NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                    <FontAwesomeIcon icon="folder" fixedWidth />
                    <span>Pages</span>
                </DropdownToggle>
                <DropdownMenu right>
                    <DropdownItem tag="h6" header>
                        Login Screens:
                    </DropdownItem>
                    <DropdownItem tag={Link} to="/login">
                        Login
                    </DropdownItem>
                    <DropdownItem tag={Link} to="/register">
                        Register
                    </DropdownItem>
                    <DropdownItem tag={Link} to="/forgot-password">
                        Forgot Password
                    </DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem tag="h6" header>
                        Other Pages:
                    </DropdownItem>
                    <DropdownItem tag={Link} to="/404">
                        404 Page
                    </DropdownItem>
                    <DropdownItem tag={Link} to="/blank">
                        Blank Page
                    </DropdownItem>
                </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem>
                <NavLink tag={Link} to="/charts">
                    <FontAwesomeIcon icon="chart-area" fixedWidth />
                    <span>Charts</span>
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="/tables">
                    <FontAwesomeIcon icon="table" fixedWidth />
                    <span>Tables</span>
                </NavLink>
            </NavItem>
        </Nav>
    );
};

export default Sidebar;
