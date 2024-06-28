import React from "react";
import styled from "styled-components";
import logo from "../../assets/logo.png";

const LogoImage = styled.img`
  height: 80px;
  width: auto;
  margin-left: 20px;
`;

const Logo = () => {
  return <LogoImage src={logo} alt="Logo" />;
};

export default Logo;
