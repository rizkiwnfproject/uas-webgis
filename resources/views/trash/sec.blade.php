<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    {{-- CSS --}}
    <link rel="stylesheet" href="{{ asset('css/app.css') }}">
    <link rel="stylesheet" href="{{ asset('css/leaflet.css') }}">x
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY=" crossorigin="" />
    {{-- JS --}}
    <script src="{{ asset('js/leaflet.js') }}"></script>
    <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js" integrity="sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo=" crossorigin=""></script>
    {{-- JQuery --}}
    <script src="https://code.jquery.com/jquery-3.7.1.js" integrity="sha256-eKhayi8LEQwp4NKxN+CfCh+3qOVUtJn3QNZ0TciWLP4="
        crossorigin="anonymous"></script>

        <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>

    <title>Webgis</title>
</head>

<body>
    <div id="map"></ div>
    <script src="{{ asset('js/maps-school-jatim.js') }}"></script>
    {{-- <script src="{{ asset('js/maps-custom.js') }}"></script> --}}
</body>

</html>
