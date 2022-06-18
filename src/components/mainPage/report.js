import React, { Component } from "react";
class Report extends React.Component {
  state = {};
  render() {
    return (
      <div class="container grid-cols-3">
        <div class="card 1 ">
          <div class="card persentase w-full bg-white drop-shadow-[0px_10px_10px_rgba(0,0,0,0.3)] px-3 py-3">
            <p>Belum Absen (Presensi 6:00 - 09:00)</p>
            <p>Waktu Habis</p>
          </div>
          <div class="card preview w-full"></div>
        </div>
      </div>
    );
  }
}

export default Report;
