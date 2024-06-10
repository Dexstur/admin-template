import { styled } from "styled-components";
import { Navbar } from "adminlte-2-react";

export const CustomNav = styled.div`
  display: flex;
  padding: 1.5rem;
  gap: 1rem;
`;

export const CustomNavItem = styled.div`
  display: flex;
  align-items: center;

  &:hover {
    opacity: 0.8;
    cursor: pointer;
  }
`;
