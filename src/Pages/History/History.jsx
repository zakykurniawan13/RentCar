import "./History.scss";

import {Navigate, useNavigate} from 'react-router-dom'

import { Layout } from "../../Layout/Layout";
import React from "react";

export const History = () => {
  let navigate = useNavigate();

  const handleView = () => {
    navigate("/view");
  };
  return (
    <Layout>
      <div className="history-container">
        <table>
          <tr>
            <th>NAMA_ID</th>
            <th>Tanggal Transaksi</th>
            <th>Detail</th>
          </tr>
          <tr>
            <td>ID_1</td>
            <td>Desember 10, 1815</td>
            <td style={{cursor: "pointer"}} onClick={handleView}>view</td>
            
          </tr>
          <tr>
            <td>ID_2</td>
            <td>Desember 9, 1906</td>
            <td style={{cursor: "pointer"}} onClick={handleView}>view</td>
            
          </tr>
          <tr>
            <td>ID_3</td>
            <td>August 17, 1936</td>
            <td style={{cursor: "pointer"}} onClick={handleView}>view</td>
            
          </tr>
          <tr>
            <td>ID_4</td>
            <td>June 24, 1917</td>
            <td style={{cursor: "pointer"}} onClick={handleView}>view</td>
            
          </tr>
        </table>
      </div>
    </Layout>
  );
};
