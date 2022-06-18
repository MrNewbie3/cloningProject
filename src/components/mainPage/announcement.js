import React from "react";
class Announcement extends React.Component {
  state = {};
  render() {
    return (
      <div>
        <div className="container w-full bg-green-500 sm:flex  my-4 px-5 py-5 flex flex-col">
          <p className="text-white font-bold">NOMOR WA Anda adalah 6285855xxxxxx</p>
          <p className="text-white font-bold">Pastikan No WA anda Aktif. Klik disini untuk merubahnya</p>
        </div>
        <div class="container w-full bg-blue-500 sm:flex px-3 py-3">
          <p className="text-white ">Tidak ada piket hari ini</p>
        </div>
        <div class="container w-full bg-green-500 sm:flex px-3 py-3 my-4">
          <p className="text-white">
            <span class="font-bold">SETUJU</span> mengikuti KBM Luring. | <span className="text-black italic font-bold text-xs">Unduh surat pernyataan</span>
          </p>
        </div>
      </div>
    );
  }
}

export default Announcement;
