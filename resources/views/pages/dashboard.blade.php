@extends('index')

@section('title', 'Dashboard')

@section('content')
    <div id="dashboard">
        <div class="container p-4">
            <div class="row">
                <div class="col-sm-4">
                    <div class="card border-0 shadow-sm">
                        <div class="card-body p-4">
                            <div class="card-title">
                                <h5>Total Jumlah Wilayah Provinsi</h5>
                                <span class="fst-italic">*Data beberapa tahun terakhir </span>
                            </div>
                            <hr />
                            <div class="card-field d-flex justify-content-between">
                                <p class="fs-3 fw-medium">38 Provinsi</p>
                                <span class="text-success"><svg xmlns="http://www.w3.org/2000/svg" width="40"
                                        height="40" fill="currentColor" class="bi bi-arrow-up-circle"
                                        viewBox="0 0 16 16">
                                        <path fill-rule="evenodd"
                                            d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707z" />
                                    </svg></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-sm-4">
                    <div class="card border-0 shadow-sm">
                        <div class="card-body p-4">
                            <div class="card-title">
                                <h5>Total Jumlah Wilayah Kota</h5>
                                <span class="fst-italic">*Data beberapa tahun terakhir </span>
                            </div>
                            <hr />
                            <div class="card-field d-flex justify-content-between">
                                <p class="fs-3 fw-medium">98 Kota</p>
                                <span class="text-success"><svg xmlns="http://www.w3.org/2000/svg" width="40"
                                        height="40" fill="currentColor" class="bi bi-arrow-up-circle"
                                        viewBox="0 0 16 16">
                                        <path fill-rule="evenodd"
                                            d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707z" />
                                    </svg></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-sm-4">
                    <div class="card border-0 shadow-sm">
                        <div class="card-body p-4">
                            <div class="card-title">
                                <h5>Total Jumlah Wilayah Kabupaten</h5>
                                <span class="fst-italic">*Data beberapa tahun terakhir </span>
                            </div>
                            <hr />
                            <div class="card-field d-flex justify-content-between">
                                <p class="fs-3 fw-medium">416 Kabupaten</p>
                                <span class="text-success"><svg xmlns="http://www.w3.org/2000/svg" width="40"
                                        height="40" fill="currentColor" class="bi bi-arrow-up-circle"
                                        viewBox="0 0 16 16">
                                        <path fill-rule="evenodd"
                                            d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707z" />
                                    </svg></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row py-4 px-1">
                <div class="col-sm-6">
                    <div class="chart-one bg-white p-3 shadow-sm">
                        <canvas id="data_penyakit" width="400" height="330"></canvas>
                    </div>
                </div>
                <div class="col-sm-6">
                    <div class="chart-one bg-white p-3 shadow-sm">
                        <canvas id="data-kotakab" ></canvas>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
