var map = L.map('map').setView([-6.1750, 106.8283], 16.75);

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
// L.marker([-7.328729169584429, 112.75088273668399], { icon: hospitalIcon }).addTo(map).on('click', function (e) {
//     alert(e.latlng);
// });

// var latlngs = [
//     [
//         -7.32933344953733,
//         112.74977057258815
//     ],
//     [
//         -7.329509781274055,
//         112.751236024018
//     ],
//     [
//         -7.328688578589336,
//         112.75153317794758
//     ],
//     [
//         -7.327732395430601,
//         112.75193405682228
//     ],
//     [
//         -7.326668507446314,
//         112.75239648443153
//     ],
//     [
//         -7.326573939744762,
//         112.75251566714934
//     ],
//     [
//         -7.326555026201547,
//         112.75262054794183
//     ],
//     [
//         -7.326602310056813,
//         112.75333087694332
//     ],
//     [
//         -7.326578668130395,
//         112.75345005966102
//     ]
// ];

// Polyline
// var polyline = L.polyline(latlngs).addTo(map);
// map.fitBounds(polyline.getBounds());

// polyline.setStyle({
//     color: 'yellow',
//     weight: 20
// });

// Polygon
// var polygon = L.polygon(latlngs).addTo(map);
// map.fitBounds(polygon.getBounds());
// polygon.setStyle({
//     color: 'red',
//     fillColor: 'red'
// });

// get database
$(document).ready(function () {
    $.getJSON('province/json', function (data) {
        $.each(data, function (index) {
            L.marker([parseFloat(data[index].longitude), parseFloat(data[index].latitude)], { icon: hospitalIcon }).addTo(map)
        })
    });
});

// get geojson
// $.getJSON('/data/map.geojson', function (json) {
//     geoLayer = L.geoJson(json, {
//         style: function (feature) {
//             return {
//                 fillOpacity: 0,
//                 weight: 2,
//                 opacity: 1,
//                 color: 'yellow',
//                 dashArray: '30 10',
//                 lineCap: 'square',
//             };
//         },
//         onEachFeature: function (feature, layer) {
//             // alert(feature.properties.id);
//             var iconLabel = L.divIcon({
//                 className: 'label-bidang',
//                 html: '<b>' + feature.properties.name + '</b>',
//                 iconSixe: [100, 20],
//             })
//             L.marker(layer.getBounds().getCenter(), { icon: iconLabel }).addTo(map);
//             layer.on('click', (e) => {
//                 // alert(feature.properties.name);
//                 $.getJSON('point/location/' + feature.properties.id, function (detail) {
//                     $.each(detail, function(index){
//                         // alert(detail[index].address);

//                         var html = '<h5>Nama Lokasi: ' +detail[index].name+ '</h5>'
//                         html += '<h6>Alamat: ' +detail[index].address+ '</h6>'
//                         html += '<img height=100px src="/images/rumah.jpg" alt="">'
//                         L.popup().setLatLng(layer.getBounds().getCenter()).setContent(html).openOn(map);
//                     });
//                 })
//             })
//             layer.addTo(map);
//         }
//     });
// });