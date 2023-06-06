import { Link } from "react-router-dom";
import styled from "styled-components";
import { FaFacebookF, FaYoutube, FaInstagram } from "react-icons/fa";

const StyledFooter = styled.footer`
  width: 100%;
  background-color: #393e46;
  color: #ffffff;
  padding: 30px 20px;
  font-size: 16px;
  text-align: center;
`;

const Wrapper = styled.div`
  margin: auto;
  width: 100%;
  max-width: 1000px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 420px) {
    flex-direction: column;
    gap: 10px;
  }
`;

const LinkIcon = styled(Link)`
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  height: 40px;
  width: 40px;
  background-color: #222831;
  transition: all 0.3s ease;

  &:hover {
    background-color: #a2d5f2;
  }

  svg {
    height: 20px;
    width: 20px;
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <Wrapper>
        <div style={{ display: "flex", gap: "10px" }}>
          <LinkIcon to="https://facebook.com/dk.dincuy" target="_blank">
            <FaFacebookF />
          </LinkIcon>
          <LinkIcon to="https://www.instagram.com/din_cuy04/" target="_blank">
            <FaInstagram />
          </LinkIcon>
          <LinkIcon
            to="https://www.youtube.com/channel/UC7YSyugVyXyGS6Sa2nS8EkA"
            target="_blank"
          >
            <FaYoutube />
          </LinkIcon>
        </div>
        <p style={{ fontSize: "14px" }}>
          &copy; 2023 Dincuy. All Rights Reserved.
        </p>
      </Wrapper>
    </StyledFooter>
  );
};

export default Footer;
