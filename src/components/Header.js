import React from "react";
import styled from "styled-components";
import { FaHome, FaBriefcase, FaUserEdit } from "react-icons/fa";
import Logo from "./common/Logo";
import NavButton from "./common/NavButton";

const HeaderComponent = styled.header`
  background-color: white;
  color: #0d3fbf;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
`;

const Nav = styled.nav`
  display: flex;
  gap: 10px;
`;

const Header = () => {
  return (
    <HeaderComponent>
      <Logo />
      <Nav>
        <NavButton to="/">
          <FaHome /> Início
        </NavButton>
        <NavButton to="/available-jobs">
          <FaBriefcase /> Vagas
        </NavButton>
        <NavButton to="/form">
          <FaUserEdit /> Editar Perfil
        </NavButton>
      </Nav>
    </HeaderComponent>
  );
};

export default Header;
