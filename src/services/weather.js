import axios from 'axios';

export const weatherapi = async () => {
	try {
		const ipResponse = await axios.get('https://ipapi.co/json/');
		const latitude = ipResponse.data.latitude;
		const longitude = ipResponse.data.longitude;

		const options = {
			method: 'GET',
			url: 'https://weatherapi-com.p.rapidapi.com/current.json',
			params: { q: `${latitude},${longitude}` },
			headers: {
				'X-RapidAPI-Key': '8dd7590ef2msh9b1dbcf06e7fb94p1c2a20jsn1a7d4cc4b4fd',
				'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
			}
		};

		const weatherResponse = await axios.request(options);
		return {
			location: weatherResponse.data.location,
			current: weatherResponse.data.current
		};
	} catch (error) {
		console.log('Error al obtener la ubicación: ' + error);
	}
};
