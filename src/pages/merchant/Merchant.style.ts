import { styled } from "styled-components";

export const MerchantTableContainer = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: block;
  }
`;

export const MerchantCardContainer = styled.div`
  display: block;

  @media (min-width: 768px) {
    display: none;
  }
`;

export const MerchantBreak = styled.div`
  display: block;
  height: 1rem;

  @media (min-width: 768px) {
    display: none;
  }
`;
