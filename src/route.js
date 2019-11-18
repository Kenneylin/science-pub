import Home from './component/Home.jsx';
import Contacts from './component/Contacts';
import Myreact from './component/Myreact';
import View from './view/View';
import Commit from './component/Commit.jsx';

const routes = [
    /*
     {
         path: '/',
         component: Home,
         exact: true,
     },
     */
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
                path: '/contacts',
                component: Contacts,
                exact: true,
            },
            {
                path: '/commit',
                component: Commit,
                exact: true,
            },
            {
                path: '/myreact',
                component: Myreact,
                exact: true,
            },
        ],
    },
];

export default routes;