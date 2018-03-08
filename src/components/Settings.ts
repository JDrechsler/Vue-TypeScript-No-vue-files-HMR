import { Component, Vue } from 'vue-property-decorator';
import { EventBus } from '@/AppShell';

@Component({
	template: `
		<section>
			<v-btn @click="changeTheme">Change Theme</v-btn>
		</section>
	`
})
export default class Settings extends Vue {
	changeTheme() {
		// console.log('Sent event: changeTheme')
		EventBus.$emit('changeTheme')
	}
}