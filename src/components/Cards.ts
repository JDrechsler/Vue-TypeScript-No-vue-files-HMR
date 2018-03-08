import { Component, Vue } from 'vue-property-decorator';

@Component({
	template: `
		<section>
		<v-card>
			<v-card-media src="https://vuetifyjs.com/static/doc-images/cards/desert.jpg" height="200px">
			</v-card-media>
			<v-card-title primary-title>
				<div>
					<h3 class="headline mb-0">Kangaroo Valley Safari</h3>
					<div>Located two hours south of Sydney in the
						<br>Southern Highlands of New South Wales, ...</div>
				</div>
			</v-card-title>
			<v-card-actions>
				<v-btn flat color="orange">Share</v-btn>
				<v-btn flat color="orange">Explore</v-btn>
			</v-card-actions>
		</v-card>

		<p></p>

		<v-card>
			<v-card-media class="white--text" height="200px" src="https://vuetifyjs.com/static/doc-images/cards/docks.jpg">
				<v-container fill-height fluid>
					<v-layout fill-height>
						<v-flex xs12 align-end flexbox>
							<span class="headline">Top 10 Australian beaches</span>
						</v-flex>
					</v-layout>
				</v-container>
			</v-card-media>
			<v-card-title>
				<div>
					<span class="grey--text">Number 10</span>
					<br>
					<span>Whitehaven Beach</span>
					<br>
					<span>Whitsunday Island, Whitsunday Islands</span>
				</div>
			</v-card-title>
			<v-card-actions>
				<v-btn flat color="orange">Share</v-btn>
				<v-btn flat color="orange">Explore</v-btn>
			</v-card-actions>
		</v-card>

		<p></p>

		<v-card>
			<v-container fluid style="min-height: 0;" grid-list-lg>
				<v-layout row wrap>
					<v-flex xs12>
						<v-card color="blue-grey darken-2" class="white--text">
							<v-card-title primary-title>
								<div class="headline">Unlimited music now</div>
								<div>Listen to your favorite artists and albums whenever and wherever, online and offline.</div>
							</v-card-title>
							<v-card-actions>
								<v-btn flat dark>Listen now</v-btn>
							</v-card-actions>
						</v-card>
					</v-flex>
					<v-flex xs12>
						<v-card color="cyan darken-2" class="white--text">
							<v-container fluid grid-list-lg>
								<v-layout row>
									<v-flex xs7>
										<div>
											<div class="headline">Supermodel</div>
											<div>Foster the People</div>
										</div>
									</v-flex>
									<v-flex xs5>
										<v-card-media src="https://vuetifyjs.com/static/doc-images/cards/foster.jpg" height="125px" contain></v-card-media>
									</v-flex>
								</v-layout>
							</v-container>
						</v-card>
					</v-flex>
					<v-flex xs12>
						<v-card color="purple" class="white--text">
							<v-container fluid grid-list-lg>
								<v-layout row>
									<v-flex xs7>
										<div>
											<div class="headline">Halycon Days</div>
											<div>Ellie Goulding</div>
										</div>
									</v-flex>
									<v-flex xs5>
										<v-card-media src="https://vuetifyjs.com/static/doc-images/cards/halcyon.png" height="125px" contain></v-card-media>
									</v-flex>
								</v-layout>
							</v-container>
						</v-card>
					</v-flex>
				</v-layout>
			</v-container>
		</v-card>

	</section>
	`
})
export default class Cards extends Vue {
	cards = [
		{ title: 'Pre-fab homes', src: 'https://vuetifyjs.com/static/doc-images/cards/house.jpg', flex: 12 },
		{ title: 'Favorite road trips', src: 'https://vuetifyjs.com/static/doc-images/cards/road.jpg', flex: 6 },
		{ title: 'Best airlines', src: 'https://vuetifyjs.com/static/doc-images/cards/plane.jpg', flex: 6 }
	]
}