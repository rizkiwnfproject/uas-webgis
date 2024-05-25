@extends('index')

@section('title', 'Peta Persebaran Penyakit')

@section('content')
    <div id="map-spread">
        <div class="container p-4">
            <div id="map"></div>
            <div id="controls-province">
                <input type="radio" id="showCampak" name="disease" value="Campak" checked>
                <label for="showCampak">Campak</label>
                <br>
                <input type="radio" id="showHIV" name="disease" value="HIV/AIDS">
                <label for="showHIV">HIV/AIDS</label>
                <br>
                <input type="radio" id="showMalaria" name="disease" value="Malaria">
                <label for="showMalaria">Malaria</label>
                <br>
                <input type="radio" id="showTBC" name="disease" value="TBC">
                <label for="showTBC">TBC</label>
                <br>
                <input type="radio" id="showPneumonia" name="disease" value="Pneumonia">
                <label for="showPneumonia">Pneumonia</label>
                <br>
                <input type="radio" id="showKusta" name="disease" value="Kusta">
                <label for="showKusta">Kusta</label>
                <br>
                <input type="radio" id="showTetanus" name="disease" value="Tetanus">
                <label for="showTetanus">Tetanus</label>
                <br>
                <input type="radio" id="showDBD" name="disease" value="DBD">
                <label for="showDBD">DBD</label>
                <br>
                <input type="radio" id="showDiare" name="disease" value="Diare">
                <label for="showDiare">Diare</label>
                <br>                
            </div>
        </div>
    </div>
@endsection
