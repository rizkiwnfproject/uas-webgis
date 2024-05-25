var map = L.map('map').setView([0.6246932    , 123.975001], 16.75);

// Basemap

// Satelite {https://stackoverflow.com/questions/33343881/leaflet-in-google-maps}
L.tileLayer('http://{s}.google.com/vt?lyrs=s&x={x}&y={y}&z={z}', {
    maxZoom: 20,
    subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
}).addTo(map);

// Marker
var hospitalIcon = L.icon({
    iconUrl: 'images/hospital-building.png',

    iconSize: [50, 50], // size of the icon
    iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
});


// get database
$(document).ready(function () {
    $.getJSON('province/point', function (data) {
        $.each(data, function (index) {
            L.marker([parseFloat(data[index].longitude), parseFloat(data[index].latitude)], { icon: hospitalIcon }).addTo(map);
        })
    });
});
