<script>
	export let weather;
	import dateformat from 'dateformat';

	console.log(weather);
	let date = dateformat(weather.location.localtime, 'dddd, h:MM TT');
</script>

<section>
	<h3>{weather.location.name}</h3>
	<h4>{date}</h4>
	<div class="section_firts">
		<div class="image_container">
			<img class="codition_icon" src={weather.current.condition.icon} alt="icon" />
		</div>
		<div class="text_condition">
			<h1>{weather.current.temp_c}°</h1>
			<h2>{weather.current.condition.text}</h2>
		</div>
	</div>
	<div class="info_state">
		<span>
			<h4>
				Humidity: <b>
					{weather.current.humidity} %
				</b>
			</h4>
		</span>
		<span>
			<h4>Wind: {weather.current.wind_kph} kph</h4>
		</span>
	</div>
</section>

<style>
	section {
		height: 90vh;
		padding: 1rem;
		aspect-ratio: 9/16;
		border-radius: 30px;
		background: #e2edf1;
		box-shadow: 34px 34px 68px #7f8587, -34px -34px 68px #ffffff;
	}
	section > h3,
	h4 {
		margin: auto;
	}
	.section_firts {
		display: flex;
		justify-content: space-between;
		align-items: center;

		margin-top: 5rem;
	}
	.image_container {
		width: 50%;
	}
	.codition_icon {
		width: 100%;
		filter: blur(0px);
		border-radius: 50%;
		background: #e2edf1;
		box-shadow: 30px 30px 50px #c0c9cd, -30px -30px 50px #ffffff;
	}
	.text_condition {
		text-align: center;
		margin: auto;
	}
	.text_condition > h1 {
		margin: auto;
		font-size: 3rem;
		font-weight: 400;
	}
	.info_state {
		display: flex;
		margin-top: 2rem;
		justify-content: space-around;
	}
</style>
