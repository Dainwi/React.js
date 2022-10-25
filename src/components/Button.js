import styled from "styled-components";
import { Link } from "react-router-dom";

export const Button = styled(Link)`
  background: ${({ primary }) => (primary ? "#000d1a" : "CD853F")};

  white-space: nowrap;
  outline: none;
  border: none;
  min-width: 100px;
  max-width: 200px;
  cursor: pointer;
  text-decoration: none;
  transition: 0.3s;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${({ big }) => (big ? "16px 40px" : "14px 24px")};
  color: ${({ primary }) => (primary ? "#fff" : "#000d1a")};
  font-size: ${({ big }) => (big ? "20px" : "14px")};

  &:hover {
    transform: translateY(-2px);
  }
`;
export const ButtonSec = styled(Link)`
  background: ${({ secondry }) => (secondry ? "#fff" : "#CD853F")};

  white-space: nowrap;
  outline: none;
  border: none;
  min-width: 100px;
  max-width: 200px;
  cursor: pointer;
  text-decoration: none;
  transition: 0.3s;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${({ big }) => (big ? "16px 40px" : "14px 24px")};
  color: ${({ secondry }) => (secondry ? "#000d1a" : "#000d1a")};
  font-size: ${({ big }) => (big ? "20px" : "14px")};
  font-family: 'Montserrat', sans-serif;
  border: 1px solid black;

  
  &:hover {
    transform: translateY(-2px);
    background: #000d1a;
    color: #fff;
  }
`;
