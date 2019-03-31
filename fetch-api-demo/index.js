

var url = `http://api.openweathermap.org/data/2.5/weather?q=gachibowli&APPID=f748abf826ab701ed2c6c3ebcdbfb6bf`;

fetch(url)
    .then(response => response.json())
	.then(result => console.log(result))
	.catch(error => console.log(error)); 
