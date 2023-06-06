import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledHeader = styled.header`
  width: 100%;
  background-color: #393e46;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  justify-content: center;
  align-items: center;
`;

const Logo = styled.span`
  color: white;
  font-size: 2.5rem;
  font-family: "Sedgwick Ave Display", cursive;
`;

const StyledLink = styled(Link)`
  color: #ffffff;
  font-size: 18px;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    color: #a2d5f2;
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <Link to="/">
        <Logo>Dincuy</Logo>
      </Link>
      <nav style={{ display: "flex", gap: "10px" }}>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/checkout">Checkout</StyledLink>
        <StyledLink to="/about">About</StyledLink>
      </nav>
    </StyledHeader>
  );
};

export default Header;
