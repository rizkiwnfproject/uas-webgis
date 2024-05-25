var map = L.map('map').setView([-2.548926, 118.0148634], 5);

// Satelite {https://stackoverflow.com/questions/33343881/leaflet-in-google-maps}
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

var campakLayer;
var capitalsLayer;
var citiesLayer;
var displayOption = 'both';

var colors = ['#a6cee3', '#1f78b4', '#b2df8a', '#33a02c', '#fb9a99', '#e31a1c', '#fdbf6f', '#ff7f00', '#cab2d6', '#6a3d9a', '#ffff99', '#b15928', '#b35806', '#e08214', '#fdb863', '#fee0b6', '#f7f7f7', '#d8daeb', '#b2abd2', '#8073ac', '#542788', '#c51b7d', '#de77ae', '#f1b6da', '#fde0ef', '#e6f5d0', '#b8e186', '#7fbc41', '#01665e', '#4d9221', '#35978f', '#f5f5f5',];
function getColor(index) {
    return colors[index % colors.length];
}

function loadGeoJSON() {
    if (boundariesLayer) {
        map.removeLayer(boundariesLayer);
    }
    if (capitalsLayer) {
        map.removeLayer(capitalsLayer);
    }
    if (citiesLayer) {
        map.removeLayer(citiesLayer);
    }

    // Load boundaries layer if selected
    if (displayOption === 'both' || displayOption === 'boundaries') {
        loadBoundariesLayer();
    } else if (displayOption === 'both' || displayOption === 'cities') {
        // Load capitals layer directly if only capitals are selected
        loadCitiesLayer();
    } else {
        loadCapitalsLayer();
    }
}

function loadBoundariesLayer() {
    axios.get('/data/polygon-province.geojson')
        .then(function (response) {
            boundariesLayer = L.geoJSON(response.data, {
                style: function (feature) {
                    var fillColor = getColor(feature.properties.ID);
                    return {
                        fillColor: fillColor,
                        fillOpacity: 0.5,
                        color: '#000',
                        weight: 1,
                        opacity: 1
                    };
                },
                onEachFeature: function (feature, layer) {
                    if (feature.properties && feature.properties.Provinsi) {
                        var popupContent = "<b>ID:</b> " + feature.properties.ID + "<br><b>Provinsi:</b> " + feature.properties.Provinsi;
                        layer.bindPopup(popupContent);
                    }
                }
            }).addTo(map);

            // Load capitals layer if selected
            if (displayOption === 'both' || displayOption === 'cities') {
                loadCitiesLayer();
            }
        })
        .catch(function (error) {
            console.error(error);
        });
}

function loadCapitalsLayer() {
    axios.get('/data/point-ibuprov.geojson')
        .then(function (response) {
            capitalsLayer = L.geoJSON(response.data, {
                pointToLayer: function (feature, latlng) {
                    return L.circleMarker(latlng, {
                        radius: 8,
                        fillColor: "#ff7800",
                        color: "#000",
                        weight: 1,
                        opacity: 1,
                        fillOpacity: 0.8
                    });
                },
                onEachFeature: function (feature, layer) {
                    if (feature.properties && feature.properties.name) {
                        layer.bindPopup("<b>" + feature.properties.name + "</b><br>" + feature.properties.capital);
                    }
                }
            }).addTo(map);

            // Bring the markers to the front
            capitalsLayer.bringToFront();
        })
        .catch(function (error) {
            console.error(error);
        });
}

function loadCitiesLayer() {
    axios.get('/data/point-kota-indonesia.geojson')
        .then(function (response) {
            capitalsLayer = L.geoJSON(response.data, {
                pointToLayer: function (feature, latlng) {
                    return L.circleMarker(latlng, {
                        radius: 8,
                        fillColor: "#ff7800",
                        color: "#000",
                        weight: 1,
                        opacity: 1,
                        fillOpacity: 0.8,
                        zIndexOffset: 1
                    });
                },
                onEachFeature: function (feature, layer) {
                    layer.bindPopup("<b>" + feature.properties.name);
                    // layer.bindPopup("<b>" + feature.properties.name + "</b><br>" + feature.properties.province);
                }
            }).addTo(map);
        })
        .catch(function (error) {
            console.error(error);
        });
}

// Load GeoJSON layers with default option
loadGeoJSON();

// Add event listener to radio buttons to change display option
var radios = document.querySelectorAll('input[name="displayOption"]');
radios.forEach(function (radio) {
    radio.addEventListener('change', function () {
        displayOption = this.value;
        loadGeoJSON();
    });
});
// get geojson
