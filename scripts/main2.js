
let map2 = L.map('map2').setView([34.618712, -111.420835], 6.49);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/outdoors-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoibGV4aWx1dHoiLCJhIjoiY2tpNHd5MHJsMjdvbTJ4bzJyOHBybTYwNSJ9.y3R1DKUt7eFo85kpkrUGYg'
}).addTo(map2);


for (let i = 0; i < places.length; i++) {
  L.marker( [ places[i].lat, places[i].long])
  .bindPopup('<h3>' + places[i].placeName + '</h3>' + '<p>' +
    places[i].description + '</p>')
    .addTo(map2);
}
