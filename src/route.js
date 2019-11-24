import Home from './component/Home.jsx';
import Contacts from './component/Contacts.jsx';
import View from './view/View.jsx';
import Publication from '../src/component/Publication';
const routes = [
    /*/
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
                path: '/journals',
                component: Home,
                exact: true,
            },
            {
                path: '/Contacts',
                component: Contacts,
                exact: true,
            },
            {
                path: '/Publication',
                component: Publication,
                exact: true,
            },         
        ],
    },
];

export default routes;