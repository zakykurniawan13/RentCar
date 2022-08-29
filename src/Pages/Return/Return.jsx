import "./Return.scss";

import React, { useState } from "react";

import Dropdown from "../../Component/Dropdown/Dropdown";
import { Layout } from "../../Layout/Layout";
import { useNavigate } from "react-router-dom";

const dummyDataSurat = [
  {
    id: "123",
    label: "Lengkap",
  },
  {
    id: "1234",
    label: "Tidak Lengkap",
  },
];

const dummyDataKondisi = [
  {
    id: "123",
    label: "Baik",
  },
  {
    id: "1234",
    label: "Buruk",
  },
];

export const Return = () => {
  let navigate = useNavigate();
  const [surat, setSurat] = useState(dummyDataSurat);
  const [kondisi, setKondisi] = useState(dummyDataKondisi);
  const [selectedSurat, setSelectedSurat] = useState();
  const [selectedKondisi, setSelectedKondisi] = useState();

  const handleSelectSurat = (item) => {
    if (selectedSurat && selectedSurat.id === item.id) {
      setSelectedSurat();
    } else {
      setSelectedSurat(item);
    }
  };

  const handleSelectKondisi = (item) => {
    if (selectedKondisi && selectedKondisi.id === item.id) {
      setSelectedKondisi();
    } else {
      setSelectedKondisi(item);
    }
  };

  const handleBtnWrapper = () => {
    navigate("/history");
  };
  return (
    <Layout>
      <div className="return-container">
        <div className="return-form-wrapper">
          <div className="return-top">FORM PENGEMBALIAN</div>
          <>
            <div className="text-input-wrapper">
              <div className="text-input-label">Tanggal</div>
              <div className="text-input-border">
                <input className="text-input" type="date" />
              </div>
            </div>

            <Dropdown
              label="Surat"
              data={surat}
              selected={selectedSurat}
              onSelect={handleSelectSurat}
            />

            <Dropdown
              label="Kondisi"
              data={kondisi}
              selected={selectedKondisi}
              onSelect={handleSelectKondisi}
            />

            <div className="text-input-wrapper">
              <div className="text-input-label">DENDA</div>
              <div className="text-input-border">
                <input
                  className="text-input"
                  type="number"
                  placeholder="Denda"
                />
              </div>
            </div>

            <div className="text-input-wrapper">
              <div className="text-input-label">TOTAL HARGA</div>
              <div className="text-input-border">
                <input
                  className="text-input"
                  type="number"
                  placeholder="Total Harga"
                />
              </div>
            </div>
          </>
          <br />
          <div className="return-btn-wrapper">
            <div className="return-btn-print" onClick={handleBtnWrapper}>End</div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
