@extends('index')

@section('title', 'Peta Provinsi')

@section('content')
    <div id="map-province">
        <div class="container">
            <div id="map"></div>
            <div id="controls">
                <input type="radio" id="showBoundaries" name="displayOption" value="boundaries" checked>
                <label for="showBoundaries">Tampilkan Batas Wilayah</label>
                <br>
                <input type="radio" id="showCapitals" name="displayOption" value="capitals">
                <label for="showCapitals">Tampilkan Ibu Kota Provinsi</label>
                <br>
                <input type="checkbox" id="showBoth" name="showBoth">
                <label for="showBoth">Tampilkan Keduanya</label>
            </div>
        </div>
    </div>

@endsection
