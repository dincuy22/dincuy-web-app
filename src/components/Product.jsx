import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

const StyledProduct = styled.div`
  min-width: 300px;
  flex-grow: 1;
  background-color: #f1f1f1;
  border-radius: 5px;
  padding: 20px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  gap: 10px;
`;

const TooltipText = styled.span`
  background-color: #ce2f2f;
  padding: 3px;
  border-radius: 6px;
  color: white;
  font-size: 14px;

  position: absolute;
  top: -28px;
  left: 8px;
  text-align: center;
  visibility: hidden;
`;

const StyledLink = styled(Link)`
  background-color: #222831;
  border-radius: 5px;
  color: #ffffff;
  display: inline-block;
  padding: 10px;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    background-color: #a2d5f2;
  }

  ${(props) =>
    !props.tersedia &&
    css`
      cursor: not-allowed;
      opacity: 0.5;

      &:hover {
        background-color: #222831;
      }

      &:hover ~ ${TooltipText} {
        opacity: 1;
        visibility: visible;
      }
    `}
`;

const Product = ({ name, desc, link, tersedia }) => {
  const LinkTersedia = tersedia ? (
    <StyledLink tersedia="true" to={tersedia ? `checkout/${link}` : "#"}>
      Lihat Produk
    </StyledLink>
  ) : (
    <StyledLink to={tersedia ? `checkout/${link}` : "#"}>
      Lihat Produk
    </StyledLink>
  );

  return (
    <StyledProduct>
      <h2 style={{ fontSize: "20px", fontWeight: "500" }}>{name}</h2>
      <p style={{ fontWeight: "300" }}>{desc}</p>
      <div style={{ position: "relative" }}>
        {LinkTersedia}
        {!tersedia && <TooltipText>Belum tersedia</TooltipText>}
      </div>
    </StyledProduct>
  );
};

export default Product;
