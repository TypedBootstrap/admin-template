const Menu = [
    {
        name: 'Dashboard',
        icon: 'tachometer-alt',
        path: '/'
    },
    {
        name: 'Pages',
        icon: 'folder',
        subMenu: [
            {
                heading: 'Other Pages:'
            },
            {
                name: 'Blank Page',
                path: '/blank'
            }
        ]
    }
];

export default Menu;
