import styled from "@emotion/styled";

export const Header = styled.header`
  border-bottom: 1px solid #ccc;
`;

export const Wrapper = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 4px 0;
`;

export const Nav = styled.nav`
  display: flex;
  gap: 4px;
  > a {
    padding: 12px 8px;
  }
`;
