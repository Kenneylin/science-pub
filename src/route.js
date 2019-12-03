import Home from './component/Home.jsx';
import Contacts from './component/Contacts.jsx';
import View from './view/View.jsx';
import Publication from '../src/component/Publication';
import Deadlines from '../src/component/Deadlines';
import Search from './component/Search';
import Journals from './component/Journals';
import Submit from './component/Submit';
const routes = [
	{
		path: '/',
		component: View,
		exact: false,
		routes: [
			{
				path: '/',
				component: Journals,
				exact: true,
			},
			{
				path: '/journals',
				component: Journals,
				exact: true,
			},
			{
				path: '/contacts',
				component: Contacts,
				exact: true,
			},
			{
				path: '/publication',
				component: Publication,
				exact: true,
			},
			{
				path: '/deadlines',
				component: Deadlines,
				exact: true,
			},
			{
				path: '/search',
				component: Search,
				exact: true,
			},
			{
				path: '/submit',
				component:Submit,
				exact: true,
			},
		],
	},
];

export default routes;
