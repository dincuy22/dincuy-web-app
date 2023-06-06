import { useContext, useState } from "react";
import styled from "styled-components";

import Layout from "../components/Layout";
import TabelPaketInternet from "../components/TabelPaketInternet";
import MyContext from "../context/MyContext";

const Container = styled.div`
  margin-top: 30px;
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  // gap: 20px;

  /* Style the tab menu */
  .tab-menu {
    display: flex;
    justify-content: center;
    // margin-bottom: 20px;
    border-bottom: 2px solid #2d4059;

    /* Style the tab links */
    .tablink {
      width: 100%;
      text-transform: capitalize;
      background-color: white;
      color: #2d4059;
      padding: 5px 10px;
      border: none;
      // border-bottom: 2px solid #1d2c4d;
      cursor: pointer;
      margin-right: 5px;
      font-size: 16px;
      font-weight: bold;
      transition: all 0.3s ease;
    }

    /* Change background color of active tab link */
    .tablink {
      &.active {
        background-color: #2d4059;
        color: white;
        // border-bottom-color: #fcbf49;
      }
    }
  }
`;

const DaftarHarga = () => {
  const [activeTab, setActiveTab] = useState("telkomsel");

  const openTab = (tabName) => {
    setActiveTab(tabName);
  };

  const { dataTelkom, dataAxis, dataIndosat, dataThree, dataXl } = useContext(
    MyContext
  );

  const dataInternet = {
    telkomsel: dataTelkom,
    axis: dataAxis,
    indosat: dataIndosat,
    three: dataThree,
    xl: dataXl
  };

  return (
    <Layout>
      <Container>
        <div className="tab-menu">
          {["telkomsel", "axis", "indosat", "three", "xl"].map((item) => (
            <button
              key={`tab-${item}`}
              className={`tablink ${activeTab === item ? "active" : ""}`}
              onClick={() => openTab(item)}
            >
              {item}
            </button>
          ))}
        </div>
        {["telkomsel", "axis", "indosat", "three", "xl"].map((item) => (
          <TabelPaketInternet
            key={`tabel-${item}`}
            active={`${activeTab === item ? "active" : ""}`}
            data={dataInternet[item]}
            title={`Paket Internet ${item}`}
          />
        ))}
      </Container>
    </Layout>
  );
};

export default DaftarHarga;
