import Home from './component/Home.jsx';
import Contacts from './component/Contacts.jsx';
import View from './view/View.jsx';
import Publication from '../src/component/Publication';
import Deadlines from '../src/component/Deadlines';
import Search from './component/Search';
import Journals from './component/Journals';
import Submit from './component/Submit';
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
                component: Journals,
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
            {
                path: '/Search',
                component: Search,
                exact: true,
            },
            {
                path: '/Submit',
                component:Submit,
                exact: true,
            },                        
        ],
    },
];

export default routes;