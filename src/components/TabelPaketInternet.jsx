import { useState } from "react";
import {
  ImSortAlphaAsc,
  ImSortNumericAsc,
  ImSortAlphaDesc,
  ImSortNumbericDesc
} from "react-icons/im";
import styled from "styled-components";

import { konversiHarga } from "../utils/konversi";

const Wrapper = styled.div`
  max-width: 700px;
  margin: 0 auto;
  display: ${(props) => (props.active ? "flex" : "none")};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-left: 2px solid #2d4059;
  border-right: 2px solid #2d4059;
  border-bottom: 2px solid #2d4059;
  padding: 20px 10px;
  gap: 10px;

  h2 {
    // font-size: 1em;
    text-align: center;
    text-transform: capitalize;
    margin-bottom: 10px;
    font-weight: 500;
  }

  .filter-section {
    align-self: flex-start;
    display: flex;
    align-items: center;

    span {
      margin-right: 12px;
      font-weight: bold;
      text-transform: capitalize;
    }

    select {
      padding: 8px 12px;
      font-size: 14px;
      border: 1px solid #ccc;
      border-radius: 4px;
      outline: none;
    }
  }
`;

const Tabel = styled.table`
  width: 100%;
  margin: 0 auto;
  border-collapse: collapse;

  thead th {
    background-color: #333;
    border: 1px solid #333;
    color: #fff;
    text-align: center;
    padding: 10px;
    white-space: nowrap;

    &.click:hover {
      cursor: pointer;
    }

    svg {
      font-size: 12px;
      margin-left: 5px;
    }
  }

  tbody td {
    // border-bottom: 1px solid #ccc;
    border: 1px solid rgb(80, 67, 67);
    padding: 5px;
    font-size: 13px;

    &.td {
      max-width: 200px;
      overflow: scroll;
    }
  }
`;

const Pagination = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 24px;
`;

const Button = styled.button`
  margin: 0 8px;
  padding: 8px 12px;
  font-size: 16px;
  background-color: ${({ btnActive }) => (btnActive ? "#0077c8" : "#eee")};
  color: ${({ btnActive }) => (btnActive ? "white" : "#0077c8")};
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const ITEMS_PER_PAGE = 10;

const TabelPaketInternet = ({ data, title, active }) => {
  // filter berdasarkan jenis paket
  const [selectedJenisPaket, setSelectedJenisPaket] = useState("Semua");
  const [currentPage, setCurrentPage] = useState(1);

  // array daftar jenis paket
  const jenisPaketOptions = [...new Set(data?.map((data) => data.jenis_paket))];

  const [sortConfig, setSortConfig] = useState({
    key: null,
    direction: ""
  });

  const requestSort = (key) => {
    let direction = "ascending";
    if (sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  const getClassNamesFor = (name) => {
    if (!sortConfig.key) {
      return;
    }
    return sortConfig.key === name ? sortConfig.direction : undefined;
  };

  function parseHarga(harga) {
    return parseInt(harga.replace(/[^\d]/g, ""), 10);
  }

  const sortedData =
    data &&
    [...data].sort((a, b) => {
      if (sortConfig.key === "harga") {
        if (parseHarga(a[sortConfig.key]) < parseHarga(b[sortConfig.key])) {
          return sortConfig.direction === "ascending" ? -1 : 1;
        }
        if (parseHarga(a[sortConfig.key]) > parseHarga(b[sortConfig.key])) {
          return sortConfig.direction === "ascending" ? 1 : -1;
        }
      } else {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? 1 : -1;
        }
      }

      return 0;
    });

  // filter
  const filteredData =
    selectedJenisPaket === "Semua"
      ? sortedData
      : sortedData.filter((data) => data.jenis_paket === selectedJenisPaket);

  const pageCount = Math.ceil(filteredData?.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;

  const handlePageClick = (pageNum) => {
    setCurrentPage(pageNum);
  };

  return (
    <>
      {data ? (
        <Wrapper active={active}>
          <h2>{title}</h2>
          <div className="filter-section">
            <span>Filter berdasarkan jenis paket:</span>
            <select
              value={selectedJenisPaket}
              onChange={(e) => {
                setSelectedJenisPaket(e.target.value);
                setCurrentPage(1);
              }}
            >
              <option value="Semua">Semua</option>
              {jenisPaketOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
          <Tabel>
            <thead>
              <tr>
                <th className="click" onClick={() => requestSort("kode")}>
                  <span>Kode</span>
                  {getClassNamesFor("kode") === "ascending" ? (
                    <ImSortAlphaAsc />
                  ) : (
                    <ImSortAlphaDesc />
                  )}
                </th>
                <th>
                  <span>Jenis Paket</span>
                </th>
                <th>Kuota</th>
                <th className="click" onClick={() => requestSort("harga")}>
                  <span>Harga</span>
                  {getClassNamesFor("harga") === "ascending" ? (
                    <ImSortNumericAsc />
                  ) : (
                    <ImSortNumbericDesc />
                  )}
                </th>
                <th>Deskripsi</th>
              </tr>
            </thead>
            <tbody>
              {filteredData?.slice(startIndex, endIndex).map((item) => (
                <tr key={item.kode}>
                  <td>{item.kode}</td>
                  <td>{item.jenis_paket}</td>
                  <td className="td">{item.kuota_paket}</td>
                  <td>{konversiHarga(item.harga, 3000)}</td>
                  <td>{item.desc}</td>
                </tr>
              ))}
            </tbody>
          </Tabel>
          <Pagination>
            {Array.from({ length: pageCount }).map((_, i) => (
              <Button
                key={i + 1}
                onClick={() => handlePageClick(i + 1)}
                btnActive={currentPage === i + 1}
              >
                {i + 1}
              </Button>
            ))}
          </Pagination>
        </Wrapper>
      ) : (
        <span>loading ...</span>
      )}
    </>
  );
};

export default TabelPaketInternet;
