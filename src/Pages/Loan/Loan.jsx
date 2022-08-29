import "./Loan.scss";

import React, { useState } from "react";

import Dropdown from "../../Component/Dropdown/Dropdown";
import { Layout } from "../../Layout/Layout";
import { useNavigate } from "react-router-dom";

const dummyDataCar = [
  {
    id: "123",
    label: "Avanza",
  },
  {
    id: "1234",
    label: "Inova",
  },
];

const dummyDataDriver = [
  {
    id: "123",
    label: "Sunarto",
  },
  {
    id: "1234",
    label: "Pesulap Merah",
  },
];

const dummyDataDay = [
  {
    id: "123",
    label: "1 hari",
  },
  {
    id: "1234",
    label: "2 hari",
  },
];

export const Loan = () => {
  let navigate = useNavigate();

  const [carType, setCarType] = useState(dummyDataCar);
  const [driver, setDriver] = useState(dummyDataDriver);
  const [day, setDay] = useState(dummyDataDay);
  const [selectedCar, setSelectedCar] = useState();
  const [selectedDriver, setSelectedDriver] = useState();
  const [selectedDay, setSelectedDay] = useState();
  const [date, setDate] = useState();
  const [name, setName] = useState();

  const handleSelectCar = (item) => {
    if (selectedCar && selectedCar.id === item.id) {
      setSelectedCar();
    } else {
      setSelectedCar(item);
    }
  };

  const handleSelectDriver = (item) => {
    if (selectedDriver && selectedDriver.id === item.id) {
      setSelectedDriver();
    } else {
      setSelectedDriver(item);
    }
  };

  const handleSelectDay = (item) => {
    if (selectedDay && selectedDay.id === item.id) {
      setSelectedDay();
    } else {
      setSelectedDay(item);
    }
  };

  const handleDate = (e) => {
    setDate(e.target.value);
  };

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleBtnSave = () => {
    navigate("/transaction");
  };

  return (
    <Layout>
      <div className="loan-container">
        <div className="loan-form-wrapper">
          <div className="loan-top">FORM PEMINJAMAN</div>
          <>
            <div className="text-input-wrapper">
              <div className="text-input-label">Tanggal</div>
              <div className="text-input-border">
                <input
                  className="text-input"
                  type="date"
                  value={date}
                  onChange={handleDate}
                />
              </div>
            </div>

            <div className="text-input-wrapper">
              <div className="text-input-label">NAMA</div>
              <div className="text-input-border">
                <input
                  className="text-input"
                  type="text"
                  placeholder="nama"
                  onChange={handleName}
                />
              </div>
            </div>

            <div className="text-input-wrapper">
              <div className="text-input-label">ALAMAT</div>
              <div className="text-input-border">
                <input
                  className="text-input"
                  type="text"
                  placeholder="Alamat"
                />
              </div>
            </div>

            <div className="text-input-wrapper">
              <div className="text-input-label">NO HP</div>
              <div className="text-input-border">
                <input className="text-input" type="text" placeholder="No Hp" />
              </div>
            </div>

            <div className="text-input-wrapper">
              <div className="text-input-label">NO KTP</div>
              <div className="text-input-border">
                <input
                  className="text-input"
                  type="text"
                  placeholder="No Ktp"
                />
              </div>
            </div>

            <Dropdown
              label="Type Mobil"
              data={carType}
              selected={selectedCar}
              onSelect={handleSelectCar}
            />

            <Dropdown
              label="Nama Driver"
              data={driver}
              selected={selectedDriver}
              onSelect={handleSelectDriver}
            />

            <Dropdown
              label="Durasi Sewa"
              data={day}
              selected={selectedDay}
              onSelect={handleSelectDay}
            />
          </>
          <br />
          <div className="loan-btn-wrapper">
            <div className="loan-btn-print" onClick={handleBtnSave}>
              save
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
