var map = L.map('my-map').setView([40.713435,-73.971291], 12);
  L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/toner-background/{z}/{x}/{y}.{ext}', {
  	attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  	subdomains: 'abcd',
  	minZoom: 0,
  	maxZoom: 20,
  	ext: 'png'
  }).addTo(map);

carData.forEach(function(carObject) {
  var latlng = [carObject.latitude, carObject.longitude];
  var options = {
    radius: 3,
    stroke: false,
    fillColor:'#ff0026',
    fillOpacity: .03,

  }
  L.circleMarker(latlng, options).addTo(map)
      // .bindPopup(pizzaObject.name + ' likes to eat at ' +  pizzaObject.pizzaShop);
});
