import "./View.scss"

import { Layout } from "../../Layout/Layout"
import React from 'react'
import { useNavigate } from "react-router-dom";

export const View = () => {
  let navigate = useNavigate();

  const handleBtnPrint = () => {
    navigate("/note");
  };
  return (
    <Layout>
      <div className="view-container">
        <table>
          <tr>
            <th>ID</th>
            <th>Nama</th>
            <th>Tanggal</th>
            <th>Jenis Mobil</th>
            <th>Durasi</th>
            <th>Denda</th>
            <th>Total Harga</th>
            <th>Print</th>
          </tr>
          <tr>
            <td>ID_1</td>
            <td>nama</td>
            <td>tanggal</td>
            <td>jenis mobil</td>
            <td>durasi</td>
            <td>denda</td>
            <td>total harga</td>
            <td style={{cursor: "pointer"}} onClick={handleBtnPrint}>print</td>
            
          </tr>
          <tr>
            <td>ID_2</td>
            <td>nama</td>
            <td>tanggal</td>
            <td>jenis mobil</td>
            <td>durasi</td>
            <td>denda</td>
            <td>total harga</td>
            <td style={{cursor: "pointer"}} onClick={handleBtnPrint}>print</td>
            
          </tr>
          <tr>
            <td>ID_3</td>
            <td>nama</td>
            <td>tanggal</td>
            <td>jenis mobil</td>
            <td>durasi</td>
            <td>denda</td>
            <td>total harga</td>
            <td style={{cursor: "pointer"}} onClick={handleBtnPrint}>print</td>
            
          </tr>
          <tr>
            <td>ID_4</td>
            <td>nama</td>
            <td>tanggal</td>
            <td>jenis mobil</td>
            <td>durasi</td>
            <td>denda</td>
            <td>total harga</td>
            <td style={{cursor: "pointer"}} onClick={handleBtnPrint}>print</td>
            
          </tr>
        </table>
      </div>
    </Layout>
    
  )
}
