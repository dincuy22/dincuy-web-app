import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledOrderViaWA = styled(Link)`
  background-color: #4c8bf5;
  color: #fff;
  padding: 10px;
  border: none;
  border-radius: 4px;
  font-size: 15px;
  font-weight: bold;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #3469b7;
  }
`;

/**
 *
 * @param {String} text - pesan yang akan dikirim
 * @param {Boolean} off - nonaktifkan tombol
 */
const OrderViaWA = ({ text, off }) => {
  const message = encodeURIComponent(text);
  const url = `https://api.whatsapp.com/send?phone=+6281282478911&text=${message}`;

  return (
    <StyledOrderViaWA
      to={url}
      style={{
        pointerEvents: off && "none",
        backgroundColor: off && "#93afda"
      }}
      target="_blank"
    >
      Order Via WA
    </StyledOrderViaWA>
  );
};

export default OrderViaWA;
