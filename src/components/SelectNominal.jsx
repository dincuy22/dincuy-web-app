import { useContext, useEffect, useState } from "react";
import { CheckoutContext } from "../context/CheckoutContext";
import { konversiHarga } from "../utils/konversi";
import { pulsaOptions, tokenOptions } from "../utils/options";
import { StyledInput } from "./Styled";

/**
 *
 * @param {String} type - pulsa, token
 */
const SelectNominal = ({ type }) => {
  const { provider, setHarga } = useContext(CheckoutContext);
  const [selectedNominal, setSelectedNominal] = useState("");
  const [options, setOptions] = useState([]);

  function handleChange(e) {
    setSelectedNominal(e.target.value);
  }

  useEffect(() => {
    if (!provider) {
      setSelectedNominal("");
    }
  }, [provider]);

  useEffect(() => {
    if (type === "pulsa") {
      setOptions(pulsaOptions);
    } else {
      setOptions(tokenOptions);
    }
  }, [type]);

  useEffect(() => {
    if (selectedNominal) {
      setHarga(konversiHarga(selectedNominal, 3000));
    } else {
      setHarga("");
    }
  }, [selectedNominal, setHarga]);

  return (
    <StyledInput>
      <label style={{ textTransform: "capitalize" }}>Nominal:</label>
      <select value={selectedNominal} onChange={handleChange}>
        <option value="" disabled>
          Pilih Nominal
        </option>
        {options?.map((item, index) => (
          <option key={index} value={item}>
            {item}
          </option>
        ))}
      </select>
    </StyledInput>
  );
};

export default SelectNominal;
