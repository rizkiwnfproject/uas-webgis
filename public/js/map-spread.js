var map = L.map('map').setView([-2.548926, 118.0148634], 5);

// Basemap
// Satelite {https://stackoverflow.com/questions/33343881/leaflet-in-google-maps}
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Marker
var hospitalIcon = L.icon({
    iconUrl: 'images/hospital-building.png',

    iconSize: [50, 50], // size of the icon
    iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
});

// get geojson
axios.get('/data/penyakit-campak.geojson')
    .then(function (response) {
        L.geoJSON(response.data, {
            onEachFeature: function (feature, layer) {
                if (feature.properties && feature.properties.Provinsi) {
                    layer.bindPopup(feature.properties.Campak);
                }
            }
        }).addTo(map);
    })
    .catch(function (error) {
        console.error(error);
    });
