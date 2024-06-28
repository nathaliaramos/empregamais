import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Button = styled.button`
  background-color: #f33a6a;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  display: flex;
  align-items: center;
  gap: 5px; /* Espaçamento entre o ícone e o texto */
  font-family: "Montserrat", sans-serif; /* Fonte */
  text-align: center; /* Alinha o texto ao centro */
  transition: background-color 0.3s; /* Transição suave para o hover */

  &:hover {
    background-color: #0056b3; /* Cor de fundo ao passar o mouse */
  }
`;

const NavButton = ({ to, children }) => {
  return (
    <Link to={to} style={{ textDecoration: "none", display: "inline-flex" }}>
      <Button>{children}</Button>
    </Link>
  );
};

export default NavButton;
