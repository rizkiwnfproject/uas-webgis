@extends('index')

@section('title', 'Dashboard')

@section('content')
    <div id="dashboard">
        <div class="container">
            <div class="row">
              <div class="col-sm-4">
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title">Jumlah Jenis Penyakit</h5>
                    <p class="card-text" id="penyakitCount">150</p>
                  </div>
                </div>
              </div>
              <div class="col-sm-4">
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title">Jumlah Wilayah</h5>
                    <p class="card-text" id="wilayahCount">42</p>
                  </div>
                </div>
              </div>
              <div class="col-sm-4">
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title">Jumlah Sekolah</h5>
                    <p class="card-text" id="sekolahCount">1032</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
    </div>
@endsection
