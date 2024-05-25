var map = L.map('map').setView([-7.250445, 112.768845], 8);

// Satelite {https://stackoverflow.com/questions/33343881/leaflet-in-google-maps}
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

var boundariesLayer;
var capitalsLayer;
var showBoth = false;

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

    // Load boundaries layer if selected
    if (document.getElementById('showBoundaries').checked || showBoth) {
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
            })
            .catch(function (error) {
                console.error(error);
            });
    }

    // Load capitals layer if selected
    if (document.getElementById('showCapitals').checked || showBoth) {
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
                        layer.bindPopup("<b>" + feature.properties.name + "</b><br>" + feature.properties.province);
                    }
                }).addTo(map);
            })
            .catch(function (error) {
                console.error(error);
            });
    }
}

loadGeoJSON();

var radios = document.querySelectorAll('input[name="displayOption"]');
radios.forEach(function (radio) {
    radio.addEventListener('change', function () {
        showBoth = false;
        loadGeoJSON();
    });
});


var checkbox = document.getElementById('showBoth');
checkbox.addEventListener('change', function () {
    showBoth = this.checked;
    loadGeoJSON();
});
// get geojson
