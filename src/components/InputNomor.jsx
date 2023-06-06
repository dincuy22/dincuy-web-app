import { useContext, useState } from "react";
import { CheckoutContext } from "../context/CheckoutContext";
import { providerCodes } from "../utils/data";
import { StyledInput } from "./Styled";

const InputNomor = ({ type }) => {
  const { setProvider } = useContext(CheckoutContext);

  const [nomorHp, setNomorHp] = useState("");
  const [nomorMeteran, setNomorMeteran] = useState("");

  function handleChangeNomorHp(e) {
    setNomorHp(e.target.value);
    setProvider(providerCodes[e.target.value.slice(0, 4)]);
  }

  function handleChangeNomorMeteran(e) {
    setNomorMeteran(e.target.value);
    setProvider("PLN");
  }

  const inputNomorMeteran = (
    <StyledInput>
      <label>Nomor Meteran:</label>
      <input
        type="tel"
        name="nomor-meteran"
        value={nomorMeteran}
        onChange={handleChangeNomorMeteran}
        placeholder="Masukkan Nomor Meteran"
        required
      />
    </StyledInput>
  );

  const inputNomorHp = (
    <StyledInput>
      <label>Nomor Hp:</label>
      <input
        type="tel"
        name="nomor-hp"
        value={nomorHp}
        onChange={handleChangeNomorHp}
        placeholder="Masukkan Nomor Hp"
        required
      />
    </StyledInput>
  );
  return (
    <>
      {type === "pulsa" && inputNomorHp}
      {type === "paket_internet" && inputNomorHp}
      {type === "token" && inputNomorMeteran}
    </>
  );
};

export default InputNomor;
