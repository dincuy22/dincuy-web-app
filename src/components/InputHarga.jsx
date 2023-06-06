import { useContext } from "react";
import { CheckoutContext } from "../context/CheckoutContext";
import { StyledInput } from "./Styled";

const InputHarga = () => {
  const { harga } = useContext(CheckoutContext);

  return (
    <StyledInput>
      <label htmlFor="total-harga">Total Harga:</label>
      <input
        id="total-harga"
        name="total-harga"
        type="text"
        disabled
        value={harga || "Rp. -"}
      />
    </StyledInput>
  );
};

export default InputHarga;
