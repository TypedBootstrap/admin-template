import BlankPage from 'pages/BlankPage';
import IndexPage from 'pages/IndexPage';

const routes = [
    {
        key: 'index',
        component: IndexPage,
        path: '/',
        exact: true,
    },
    {
        key: 'blank',
        component: BlankPage,
        path: '/blank',
        exact: true,
    },
];

export default routes;
