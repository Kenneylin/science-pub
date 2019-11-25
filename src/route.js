import Home from './component/Home.jsx';
import Contacts from './component/Contacts.jsx';
import View from './view/View.jsx';
import Publication from '../src/component/Publication';
import Deadlines from '../src/component/Deadlines';
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
            {
                path: '/Deadlines',
                component: Deadlines,
                exact: true,
            },           
        ],
    },
];

export default routes;