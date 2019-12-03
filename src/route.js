import Contacts from './component/Contacts.jsx';
import View from './view/View.jsx';
import Publication from './component/Publication';
import Deadlines from './component/Deadlines';
import Search from './component/Search';
import Journals from './component/Journals';
import Submit from './component/Submit';
import Terms from './component/Terms';
import Private from './component/Private';
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
			{
				path: '/terms',
				component:Terms,
				exact: true,
			},
			{
				path: '/private',
				component:Private ,
				exact: true,
			},
		],
	},
];

export default routes;
