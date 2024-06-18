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
  gap: 5px;
`;

const NavButton = ({ to, children }) => {
  return (
    <Link to={to} style={{ textDecoration: "none" }}>
      <Button>{children}</Button>
    </Link>
  );
};

export default NavButton;
