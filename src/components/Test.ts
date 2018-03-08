import { Component, Vue } from 'vue-property-decorator';

@Component({
	template: `
		<div>
			Test
			<input type="text">
		</div>
	`
})
export default class Test extends Vue {
	test() {
		console.log("Test")
	}
}