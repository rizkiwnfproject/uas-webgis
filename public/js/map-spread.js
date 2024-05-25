var map = L.map('map').setView([-2.548926, 118.0148634], 5);

// Satelite {https://stackoverflow.com/questions/33343881/leaflet-in-google-maps}
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

let boundariesLayer;
let selectedDisease = document.querySelector('input[name="disease"]:checked').value;;

function getColor(cases, disease) {
    if (disease === 'Tetanus') {
        return cases > 2 ? '#f03b20' :
            cases > 1 ? '#feb24c' :
                '#ffeda0';
    } else if (disease === 'Campak' || disease === 'Kusta') {
        return cases > 500 ? '#800026' :
            cases > 300 ? '#BD0026' :
                cases > 200 ? '#E31A1C' :
                    cases > 100 ? '#FC4E2A' :
                        cases > 50 ? '#FD8D3C' :
                            cases > 10 ? '#FEB24C' :
                                '#FED976';
    } else if (disease === 'TBC' || disease === 'HIV/AIDS') {
        return cases > 20000 ? '#800026' :
            cases > 10000 ? '#BD0026' :
                cases > 5000 ? '#E31A1C' :
                    cases > 3000 ? '#FC4E2A' :
                        cases > 1000 ? '#FD8D3C' :
                            cases > 500 ? '#FEB24C' :
                                '#FED976';
    } else if (disease === 'Diare') {
        return cases > 200000 ? '#800026' :
            cases > 100000 ? '#BD0026' :
                cases > 50000 ? '#E31A1C' :
                    cases > 30000 ? '#FC4E2A' :
                        cases > 10000 ? '#FD8D3C' :
                            cases > 1000 ? '#FEB24C' :
                                '#FED976';
    } else if (disease === 'DBD') {
        return cases > 5000 ? '#800026' :
            cases > 3000 ? '#BD0026' :
                cases > 1000 ? '#E31A1C' :
                    cases > 500 ? '#FC4E2A' :
                        cases > 100 ? '#FD8D3C' :
                            cases > 10 ? '#FEB24C' :
                                '#FED976';
    } else {
        return cases > 50000 ? '#800026' :
            cases > 20000 ? '#BD0026' :
                cases > 10000 ? '#E31A1C' :
                    cases > 5000 ? '#FC4E2A' :
                        cases > 2000 ? '#FD8D3C' :
                            cases > 1000 ? '#FEB24C' :
                                cases > 500 ? '#FED976' :
                                    '#FFEDA0';
    }
}

function styleFeature(feature) {
    const cases = feature.properties[selectedDisease];
    return {
        fillColor: getColor(cases, selectedDisease),
        fillOpacity: 0.7,
        color: '#000',
        weight: 1,
        opacity: 1
    };
}

function onEachFeature(feature, layer) {
    if (feature.properties && feature.properties.Provinsi) {
        const popupContent = `<b>ID:</b> ${feature.properties.ID}<br><b>Provinsi:</b> ${feature.properties.Provinsi}<br><b>${selectedDisease}:</b> ${feature.properties[selectedDisease]}`;
        layer.bindPopup(popupContent);
    }
}

function loadBoundariesLayer() {
    axios.get('/data/persebaran-penyakit.geojson')
        .then(function (response) {
            boundariesLayer = L.geoJSON(response.data, {
                style: styleFeature,
                onEachFeature: onEachFeature
            }).addTo(map);
        })
        .catch(function (error) {
            console.error(error);
        });
}

function updateMap() {
    if (boundariesLayer) {
        map.removeLayer(boundariesLayer);
    }
    loadBoundariesLayer();
}

loadBoundariesLayer();

var radios = document.querySelectorAll('input[name="disease"]').forEach(radio => {
    radio.addEventListener('change', function () {
        selectedDisease = this.value;
        loadBoundariesLayer();
    });
});

// Membuat legend
function createLegend() {
    var legend = L.control({ position: 'bottomright' });

    legend.onAdd = function (map) {
        var div = L.DomUtil.create('div', 'legend');
        var grades = [];
        var labels = [];

        // Mendapatkan nilai-nilai untuk legend berdasarkan penyakit yang dipilih
        if (selectedDisease === 'Tetanus') {
            grades = [0, 1, 2];
            labels = ['0', '1', '2+'];
        } else if (selectedDisease === 'Campak' || selectedDisease === 'Kusta') {
            grades = [0, 10, 50, 100, 200, 300, 500];
        } else if (selectedDisease === 'TBC' || selectedDisease === 'HIV/AIDS') {
            grades = [0, 500, 1000, 3000, 5000, 10000, 20000];
        } else if (selectedDisease === 'Diare') {
            grades = [0, 1000, 10000, 30000, 50000, 100000, 200000];
        } else if (selectedDisease === 'DBD') {
            grades = [0, 10, 100, 500, 1000, 3000, 5000];
        } else {
            grades = [0, 500, 1000, 2000, 5000, 10000, 20000, 50000];
        }

        // Generate labels for each grade
        for (var i = 0; i < grades.length; i++) {
            var color = getColor(grades[i] + 1, selectedDisease); // Mendapatkan warna berdasarkan nilai grade
            var labels = grades[i] + (grades[i + 1] ? ' &ndash; ' + grades[i + 1] : '+'); // Label grade
            div.innerHTML += '<i style="background:' + color + '"></i> ' + labels + '<br>'; // Menambahkan warna dan label ke dalam div
        }

        return div;
    };

    return legend;
}

// Membuat legend dan menambahkannya ke dalam peta
var legend = createLegend();
legend.addTo(map);

// Event listener untuk radio button
var radios = document.querySelectorAll('input[name="disease"]').forEach(radio => {
    radio.addEventListener('change', function () {
        selectedDisease = this.value;
        legend.remove(); // Menghapus legend yang lama
        legend = createLegend(); // Membuat legend yang baru
        legend.addTo(map); // Menambahkan legend yang baru ke dalam peta
        loadBoundariesLayer(); // Memuat kembali layer batas provinsi
    });
});