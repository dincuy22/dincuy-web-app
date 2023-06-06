import { useContext, useEffect, useState } from "react";
import { CheckoutContext } from "../context/CheckoutContext";
import { konversiHarga } from "../utils/konversi";
import { StyledInput } from "./Styled";

/**
 *
 * @param {Object} data - data paket internet
 */
const SelectPaketInternet = ({ data }) => {
  const { setHarga } = useContext(CheckoutContext);
  const [dataPaket, setDataPaket] = useState("");

  const [selected, setSelected] = useState({
    jenisPaket: "",
    kuotaPaket: ""
  });

  const [jenisPaket, setJenisPaket] = useState([]);
  const [kuotaPaket, setKuotaPaket] = useState([]);

  const [paketDipilih, setPaketDipilih] = useState([]);

  useEffect(() => {
    setDataPaket(data);
  }, [data]);

  useEffect(() => {
    if (dataPaket) {
      setJenisPaket(
        dataPaket
          ?.map((paket) => paket.jenis_paket)
          .filter((jenis, index, arr) => arr.indexOf(jenis) === index)
      );
    } else {
      setJenisPaket([]);
    }
  }, [dataPaket]);

  useEffect(() => {
    if (selected.jenisPaket) {
      setKuotaPaket(
        dataPaket?.filter((item) => item.jenis_paket === selected.jenisPaket)
      );
    } else {
      setKuotaPaket([]);
    }
  }, [dataPaket, selected.jenisPaket]);

  useEffect(() => {
    if (selected.kuotaPaket) {
      setPaketDipilih(
        dataPaket?.filter((item) => item.kode === selected.kuotaPaket)
      );
    } else {
      setPaketDipilih([]);
    }
  }, [selected.kuotaPaket, dataPaket]);

  useEffect(() => {
    if (paketDipilih.length) {
      setHarga(konversiHarga(paketDipilih[0].harga, 3000));
    } else {
      setHarga("");
    }
  }, [paketDipilih, setHarga]);

  return (
    <>
      <StyledInput>
        <label htmlFor="jenis-paket">Jenis Paket</label>
        <select
          name="jenis-paket"
          id="jenis-paket"
          value={selected.jenisPaket}
          onChange={(e) => {
            setSelected({
              ...selected,
              jenisPaket: e.target.value,
              kuotaPaket: ""
            });
          }}
          required
        >
          <option value="" disabled>
            Pilih Jenis Paket
          </option>
          {jenisPaket?.map((item, index) => (
            <option key={index} value={item}>
              {item}
            </option>
          ))}
        </select>
      </StyledInput>
      {/* input Kuota Paket */}
      <StyledInput>
        <label htmlFor="kuota">Kuota Paket</label>
        <select
          name="kuota"
          id="kuota"
          value={selected.kuotaPaket}
          onChange={(e) => {
            setSelected({
              ...selected,
              kuotaPaket: e.target.value,
              dataPaket: {}
            });
          }}
        >
          <option value="" disabled>
            Pilih Kuota
          </option>
          {kuotaPaket?.map((item, index) => (
            <option key={index} value={item.kode}>
              {item.kuota_paket}
            </option>
          ))}
        </select>
      </StyledInput>
      {/* deskripsi */}
      <div style={{ marginBottom: "10px" }}>
        <h4>Deskripsi:</h4>
        <p
          style={{
            fontSize: "14px",
            fontStyle: "italic",
            marginTop: "5px",
            paddingLeft: "10px"
          }}
        >
          {paketDipilih[0]?.desc || "-"}
        </p>
      </div>
    </>
  );
};

export default SelectPaketInternet;
