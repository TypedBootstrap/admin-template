import React from 'react';
import { faTachometerAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SidenavNavigation, SidenavNavigationItems } from '@typedbootstrap/admin-components';
import { Link } from 'react-router-dom';

export interface SidenavProps {}

const Sidenav: React.FC<SidenavProps> = () => {
    const items: SidenavNavigationItems = [
        {
            name: 'Dashboard',
            tag: Link,
            icon: <FontAwesomeIcon icon={faTachometerAlt} />,
            to: '/'
        }
    ];

    return <SidenavNavigation items={items} dark />;
};

export default Sidenav;
