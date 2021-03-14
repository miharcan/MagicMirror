/* Magic Mirror Config Sample
 *
 * By Michael Teeuw https://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information on how you can configure this file
 * See https://github.com/MichMich/MagicMirror#configuration
 *
 */

var config = {
	address: "localhost", 	// Address to listen on, can be:
							// - "localhost", "127.0.0.1", "::1" to listen on loopback interface
							// - another specific IPv4/6 to listen on a specific interface
							// - "0.0.0.0", "::" to listen on any interface
							// Default, when address config is left out or empty, is "localhost"
	port: 8080,
	basePath: "/", 	// The URL path where MagicMirror is hosted. If you are using a Reverse proxy
					// you must set the sub path here. basePath must end with a /
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"], 	// Set [] to allow all IP addresses
															// or add a specific IPv4 of 192.168.1.5 :
															// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
															// or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
															// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	useHttps: false, 		// Support HTTPS or not, default "false" will use HTTP
	httpsPrivateKey: "", 	// HTTPS private key path, only require when useHttps is true
	httpsCertificate: "", 	// HTTPS Certificate path, only require when useHttps is true

	language: "en",
	logLevel: ["INFO", "LOG", "WARN", "ERROR"],
	timeFormat: 24,
	units: "metric",
	// serverOnly:  true/false/"local" ,
	// local for armv6l processors, default
	//   starts serveronly and then starts chrome browser
	// false, default for all NON-armv6l devices
	// true, force serveronly mode, because you want to.. no UI on this device

	modules: [
		//{
		//	module: "alert",
		//},
		//{
		//	module: "updatenotification",
		//	position: "top_bar"
		//},
		{
			module: "clock",
			position: "top_left"
		},
		//{
		//	module: "calendar",
		//	header: "US Holidays",
		//	position: "top_left",
		//	config: {
		//		calendars: [
		//			{
		//				symbol: "calendar-check",
		//				url: "webcal://www.calendarlabs.com/ical-calendar/ics/76/US_Holidays.ics"					}
		//		]
		//	}
		//},
		//{
		//	module: "compliments",
		//	position: "lower_third"
		//},
		{
			module: "currentweather",
			position: "top_right",
			config: {
				location: "Galway",
				showWindDirectionAsArrow: true,
				locationID: "2964180", //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
				useBeaufort: false,
				useKMPHwind: "true",
				showFeelsLike: false,
				appid: "YOUR_API_KEY"
			}
		},
		{
			module: "weatherforecast",
			position: "top_left",
			header: "Weather Forecast",
			config: {
				location: "Galway",
				locationID: "2964180", //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
				showRainAmount: true, // let see if this works
				maxNumberOfDays: 7,
				appid: "YOUR_OPENWEATHER_API_KEY"
			}
		},
		{
			module: "MMM-MarineWeather",
			position: "top_right",
			config: {
				latitude: 53.270962, // Latitude 
				longitude: -9.062691, // Longitude
				params: ['airTemperature', 'waterTemperature', 'windSpeed', 'gust', 'windDirection', 'waveHeight', 'waveDirection'], // 
				//def ['airTemperature', 'waterTemperature', 'pressure', 'cloudCover', 'windSpeed', 'windDirection', 'waveHeight', 'waveDirection']
				//opt ['pressure', 'cloudCover', 'visibility', 'seaLevel', 'windSpeed', 'gust', 'windDirection', 'waveHeight', 'waveDirection', 'wavePeriod']
				showWindDirectionAsArrow: true,
				useBeaufort: true,
				appid: "YOUR_API_KEY" // StormGlass API key (docs.stormglass.io)
			}
		},
		{
			module: "MMM-Traffic",
			position: "bottom_left",
			config: {
				accessToken: "YOUR_API_KEY",
				originCoords: "-8.925245290173217,53.26676911338486",
				destinationCoords: "-9.074422267449028,53.29002747011715",
				firstLine: "{duration} mins",
				secondLine: "To DSI",
				//days: [0,1,2,3,4],
				//hoursStart: "08:00",
				//hoursEnd: "10:00"
			}
		},
		{
			module: "MMM-Traffic",
			position: "bottom_right",
			config: {
				accessToken: "YOUR_OPENWEATHER_API_KEY",
				originCoords: "-8.925245290173217,53.26676911338486",
				destinationCoords: "-8.56543840520483,53.190160254037416",
				firstLine: "{duration} mins",
				secondLine: "To Loughrea",
				//days: [0,1,2,3,4],
				//hoursStart: "08:00",
				//hoursEnd: "10:00"
			}
		},
		//{
		//	module: "newsfeed",
		//	position: "bottom_bar",
		//	config: {
		//		feeds: [
		//			{
		//				title: "New York Times",
		//				url: "https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml"
		//			}
		//		],
		//		showSourceTitle: true,
		//		showPublishDate: true,
		//		broadcastNewsFeeds: true,
		//		broadcastNewsUpdates: true
		//	}
		//},
	]
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
