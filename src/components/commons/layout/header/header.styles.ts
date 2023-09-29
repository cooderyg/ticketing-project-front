import styled from "@emotion/styled";
import { color } from "../../../../commons/styles/color.styles";

export const Header = styled.header`
  border-bottom: 1px solid #ccc;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1280px;
  margin: 0 auto;
  padding: 8px 12px 8px 20px;
`;

export const LogoBox = styled.h1`
  cursor: pointer;
`;

export const Nav = styled.nav`
  display: flex;
  gap: 4px;
  > a {
    padding: 12px 8px;
    font-weight: bold;
    transition: 0.2s;
    :hover {
      color: ${color.gray};
    }
  }
`;
