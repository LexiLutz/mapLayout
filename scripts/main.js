let crmap = L.map('crmap').setView([10.038624, -85.261346], 8.18);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/dark-v10',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoibGV4aWx1dHoiLCJhIjoiY2tpNHd5MHJsMjdvbTJ4bzJyOHBybTYwNSJ9.y3R1DKUt7eFo85kpkrUGYg'
}).addTo(crmap);


let marker1 = L.marker([9.968812, -84.738863]).addTo(crmap);
let marker2 = L.marker([10.296228, -85.838770]).addTo(crmap);
let marker3 = L.marker([9.654466, -85.067952]).addTo(crmap);
let marker4 = L.marker([9.610276, -84.626606]).addTo(crmap);
let marker5 = L.marker([10.323947, -84.816174]).addTo(crmap);

L.marker([10.323947, -84.816174]).addTo(crmap)
    .bindPopup('A cloud forest where<br> there are monkeys.')
    .openPopup();

L.marker([9.610276, -84.626606]).addTo(crmap)
    .bindPopup('A good place<br> for sunbathing.')
    .openPopup();

L.marker([9.654466, -85.067952]).addTo(crmap)
    .bindPopup('A popular place<br> for hiking.')
    .openPopup();

L.marker([10.296228, -85.838770]).addTo(crmap)
    .bindPopup('There are yogis<br> that offer classes.')
    .openPopup();

L.marker([9.968812, -84.738863]).addTo(crmap)
    .bindPopup('Many hotels line<br> the shore.')
    .openPopup();
