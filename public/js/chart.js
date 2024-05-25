const dataPersebaranPenyakit = document.getElementById('data_penyakit');
const dataPenyakit = new Chart(dataPersebaranPenyakit, {
    type: 'bar',
    data: {
        labels: ['Malaria', 'TBC', 'Pneumonia', 'Kusta', 'Tetanus', 'Campak', 'Diare', 'DBD', 'HIV/AIDS'],
        datasets: [{
            label: 'Jumlah Penderita',
            data: [1318636, 204394, 478078, 14397, 10, 8429, 4165789, 65602, 114065],
            borderWidth: 1,
            backgroundColor: '#2c3e50',
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
const dataKotaKab = document.getElementById('data-kotakab');
const dataWilayah = new Chart(dataKotaKab, {
    type: 'polarArea',
    data: {
        labels: [
            'Sumatra',
            'Jawa',
            'Nusa Tenggara',
            'Kalimantan',
            'Sulawesi',
            'Maluku',
            'Papua',
        ],
        datasets: [{
            label: 'Persebaran Wilayah Setiap Pulau',
            data: [154, 119, 41, 56, 81, 21, 42],
            backgroundColor: [
                'rgb(231,41,138)',
                'rgb(37,52,148)',
                'rgb(103,0,31)',
                'rgb(84,39,143)',
                'rgb(215,48,31)', 
                'rgb(33,113,181)', 
                'rgb(158,202,225)', 
            ]
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true,
            }
        }, 
        layout: {
            padding: {
                left: 60,
                // right: 50,
                // top: 50,
                // bottom: 50
            }
        }
    }
});