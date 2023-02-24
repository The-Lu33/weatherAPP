import axios from 'axios';

export const futureWeather = async () => {
	try {
		const ipResponse = await axios.get('https://ipapi.co/json/');
		const latitude = ipResponse.data.latitude;
		const longitude = ipResponse.data.longitude;
		const options = {
			method: 'GET',
			url: `https://pro.openweathermap.org/data/2.5/forecast/hourly?lat=${latitude}&lon=${longitude}&appid=aa2d1e279d90f7b3f88606bb595ba93c
            `
		};

		const weatherResponse = await axios.request(options);
		console.log(weatherResponse.data);
		return weatherResponse.data;
	} catch (error) {
		console.log(error);
	}
};
