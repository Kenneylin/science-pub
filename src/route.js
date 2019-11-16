import Home from './component/Home.jsx';
import Contact from './component/Contact';

import View from './view/View';

const routes = [
    // {
    //     path: '/',
    //     component: Home,
    //     exact: true,
    // },
    {
        path: '/',
        component: View,
        exact: false,
        routes: [
            {
                path: '/view',
                component: Home,
                exact: true,
            },
            {
                path: '/contact',
                component: Contact,
                exact: true,
            },
        ],
    },
];

export default routes;