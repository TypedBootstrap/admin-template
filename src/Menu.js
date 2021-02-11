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
                heading: 'Login Screens:'
            },
            {
                name: 'Login',
                path: '/login'
            },
            {
                name: 'Register',
                path: '/register'
            },
            {
                name: 'Forgot Password',
                path: '/forgot-password'
            },
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
