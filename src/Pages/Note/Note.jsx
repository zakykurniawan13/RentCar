import "./Note.scss";

import React, { useState } from "react";

import { Layout } from "../../Layout/Layout";
import { useNavigate } from "react-router-dom";

export const Note = () => {
  let navigate = useNavigate();
  const [nama, setNama] = useState("");
  const [alamat, setAlamat] = useState("");
  const [noHp, setNoHp] = useState("");
  const [noKtp, setNoKtp] = useState("");
  const [jenisMobil, setJenisMobil] = useState("");
  const [durasiSewa, setDurasiSewa] = useState("");
  const [totalHarga, setTotalHarga] = useState("");

  const handleNama = (e) => {
    setNama(e.target.value);
  };
  
  const handleAlamat = (e) => {
    setAlamat(e.target.value);
  };

  const handleNoHp = (e) => {
    setNoHp(e.target.value);
  };

  const handleNoKtp = (e) => {
    setNoKtp(e.target.value);
  };

  const handleJenisMobil = (e) => {
    setJenisMobil(e.target.value);
  };

  const handleDurasiSewa = (e) => {
    setDurasiSewa(e.target.value);
  };

  const handleTotalHarga = (e) => {
    setTotalHarga(e.target.value);
  };

  const handleHome = () => {
    navigate("/");
  };

  return (
    <Layout>
      <div className="note-container">
        <div className="note-form-wrapper">
          <div className="note-top">NOTA TRANSAKSI</div>
          <>
            <div className="text-input-wrapper">
              <div className="text-input-label">NAMA</div>
              <div className="text-input-border">
                <input
                  className="text-input"
                  type="text"
                  value={"Nama"}
                  onChange={handleNama}
                  disabled
                />
              </div>
            </div>

            <div className="text-input-wrapper">
              <div className="text-input-label">ALAMAT</div>
              <div className="text-input-border">
                <input
                  className="text-input"
                  type="text"
                  value={"Alamat"}
                  onChange={handleAlamat}
                  disabled
                />
              </div>
            </div>

            <div className="text-input-wrapper">
              <div className="text-input-label">NO HP</div>
              <div className="text-input-border">
                <input
                  className="text-input"
                  type="text"
                  value={"No Hp"}
                  onChange={handleNoHp}
                  disabled
                />
              </div>
            </div>

            <div className="text-input-wrapper">
              <div className="text-input-label">NO KTP</div>
              <div className="text-input-border">
                <input
                  className="text-input"
                  type="text"
                  value={"No Ktp"}
                  onChange={handleNoKtp}
                  disabled
                />
              </div>
            </div>

            <div className="text-input-wrapper">
              <div className="text-input-label">JENIS MOBIL</div>
              <div className="text-input-border">
                <input
                  className="text-input"
                  type="text"
                  value={"Jenis Mobil"}
                  onChange={handleJenisMobil}
                  disabled
                />
              </div>
            </div>

            <div className="text-input-wrapper">
              <div className="text-input-label">DURASI SEWA</div>
              <div className="text-input-border">
                <input
                  className="text-input"
                  type="text"
                  value={"Durasi Sewa"}
                  onChange={handleDurasiSewa}
                  disabled
                />
              </div>
            </div>

            <div className="text-input-wrapper">
              <div className="text-input-label">TOTAL HARGA</div>
              <div className="text-input-border">
                <input
                  className="text-input"
                  type="text"
                  value={"Total Harga"}
                  onChange={handleTotalHarga}
                  disabled
                />
              </div>
            </div>
          </>
          <br />
          <div className="note-btn-wrapper">
            <div className="note-btn-print" onClick={handleHome}>print</div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
