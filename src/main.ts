import Vue from 'vue'
import AppShell from '@/AppShell';
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)

Vue.config.productionTip = false

new Vue({
	router,
	render: h => h(AppShell)
}).$mount('#app')
