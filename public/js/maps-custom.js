var map = L.map('map').setView([-7.328729169584429, 112.75088273668399], 16.75);

// Basemap

// Satelite {https://stackoverflow.com/questions/33343881/leaflet-in-google-maps}
L.tileLayer('http://{s}.google.com/vt?lyrs=s&x={x}&y={y}&z={z}', {
    maxZoom: 20,
    subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
}).addTo(map);

// Marker
var hospital = L.icon({
    iconUrl: 'images/hospital-building.png',

    iconSize:     [50, 50], // size of the icon
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});
L.marker([-7.328729169584429, 112.75088273668399], {icon: hospital}).addTo(map).on('click', function(e){
    alert(e.latlng);
});

// Polyline
var latlngs = [
    [45.51, -122.68],
    [37.77, -122.43],
    [34.04, -118.2]
];
var polyline = L.polyline(latlngs, {color: 'red'}).addTo(map);
map.fitBounds(polyline.getBounds());
