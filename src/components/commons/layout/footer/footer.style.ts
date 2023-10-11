import styled from "@emotion/styled";
import { color } from "../../../../commons/styles/color.styles";

export const Footer = styled.footer`
  background-color: ${color.gray};
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 100px 0 120px;
`;

export const Description = styled.p`
  margin-bottom: 20px;
`;

export const Address = styled.address`
  font-style: normal;
`;
