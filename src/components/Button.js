import styled from "styled-components";
import { Link } from "react-router-dom";
import {motion} from 'framer-motion'

export const Button = styled(Link, motion.button)`
  padding: 1rem 3rem;
  font-size: 1rem;
  border: 2px solid #fff;
  background: transparent;
  border-radius: 4px;
  outline: none;
  cursor: pointer;
  text-decoration: none;
  color: #fff;
`;
