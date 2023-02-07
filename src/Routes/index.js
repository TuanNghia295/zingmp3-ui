import Home from '~/Pages/Home';
import Chart from '~/Pages/Chart';

const publicRoutes = [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/chart',
        component: Chart,
    },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
