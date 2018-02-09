var map = L.map('my-map').setView([40.713435,-73.971291], 12);
  L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_nolabels/{z}/{x}/{y}.png', {
  	attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="http://cartodb.com/attributions">CartoDB</a>',
  	subdomains: 'abcd',
  	maxZoom: 19
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
  //dkfjalskdfj
