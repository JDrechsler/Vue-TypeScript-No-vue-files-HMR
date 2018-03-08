import Vue from 'vue'
import Router from 'vue-router'
import Test from '@/components/Test';
import Cards from '@/components/Cards';
import Settings from '@/components/Settings';

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/',
			name: 'cards',
			component: Cards
		},
		{
			path: '/test',
			name: 'test',
			component: Test
		},
		{
			path: '/settings',
			name: 'settings',
			component: Settings
		}
	]
})
