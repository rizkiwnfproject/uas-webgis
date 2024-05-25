@extends('index')

@section('title', 'Peta Provinsi')

@section('content')
    <div id="map-province">
        <div class="container p-4">
            <div id="map"></div>
            <div id="controls-province">
                <input type="radio" id="showBoundaries" name="displayOption" value="boundaries">
                <label for="showBoundaries">Batas Provinsi</label>
                <br>
                <input type="radio" id="showCapitals" name="displayOption" value="capitals">
                <label for="showCapitals">Ibukota Provinsi</label>
                <br>
                <input type="radio" id="showCities" name="displayOption" value="cities">
                <label for="showCities">Kota/Kabupaten</label>
                <br>
                <input type="radio" id="showBoth" name="displayOption" value="both" checked>
                <label for="showBoth">Semuanya</label>
            </div>
        </div>
    </div>

@endsection
