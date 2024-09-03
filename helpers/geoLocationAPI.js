// import { geoLocationAPIKey } from '../data/private'

const getPosition = () => {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject)
    });
};

getPosition().catch(err => {
    alert(`Error: ${err}. Please allow location services for local weather to load.`);
});

export const localPositionAndCurrentWeather = async (setWeather, setLocation, setUnitOfTemp) => {
    try {
        const position = await getPosition();
        const { latitude, longitude } = position.coords;

        const getReverseGeoLocation = await fetch(`https://revgeocode.search.hereapi.com/v1/revgeocode?at=${latitude}%2C${longitude}&lang=en-US&apiKey=${geoLocationAPIKey}`);
        if (!getReverseGeoLocation.ok) throw new Error("There was an issue retrieving the location");
        const geoData = await getReverseGeoLocation.json();

        const getWeather = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m`);
        if (!getWeather.ok) throw new Error("There was a problem fetching the weather data");

        const weatherData = await getWeather.json();
        const currentLocation = geoData.items[0].address.district;
        const currentWeather = weatherData.current.temperature_2m;
        const weatherUnit = weatherData.current_units.temperature_2m;

        setLocation(currentLocation);
        setWeather(currentWeather);
        setUnitOfTemp(weatherUnit);

    } catch(err) {
        console.log(`Error: ${err}`);
    }
};