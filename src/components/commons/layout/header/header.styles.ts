import styled from "@emotion/styled";
import { color } from "../../../../commons/styles/color.styles";

export const Header = styled.header`
  border-bottom: 1px solid #ccc;
  position: fixed;
  top: 0;
  z-index: 99;
  width: 100%;
  background-color: ${color.white};
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
  > a {
    height: 40px;
  }
`;

export const Nav = styled.nav`
  position: relative;
  display: flex;
  align-items: center;
  gap: 4px;
  > a {
    padding: 12px 8px;
    font-weight: bold;
    transition: 0.2s;
    :hover {
      color: ${color.primary};
    }
  }
`;

export const ProfileImageBox = styled.div`
  width: 36px;
  height: 36px;
  border: 1px solid ${color.gray};
  border-radius: 50px;
  overflow: hidden;
  cursor: pointer;
`;

export const UserMenuBox = styled.ul`
  z-index: 999;
  position: absolute;
  top: 44px;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 12px;
  width: 180px;
  padding: 12px;
  border: 1px solid ${color.gray};
  border-radius: 4px;
  background-color: ${color.white};
  li,
  button,
  a,
  span {
    font-size: 12px;
    font-weight: bold;
    color: ${color.black};
  }
`;

export const MyWrapper = styled.li`
  display: flex;
  width: 100%;
`;

export const Nickname = styled.span`
  flex: 1;
`;

export const Mypage = styled.a`
  display: inline-block;
  transition: 0.2s;
  cursor: pointer;
  :hover {
    color: ${color.primary};
  }
`;

export const PointWrapper = styled.li`
  display: flex;
  width: 100%;
`;

export const NowPoint = styled.span`
  flex: 1;
`;

export const ChargeButton = styled.button`
  transition: 0.2s;
  cursor: pointer;
  :hover {
    color: ${color.primary};
  }
`;

export const LogoutButtonWrapper = styled.li``;

export const LogoutButton = styled.button`
  transition: 0.2s;
  cursor: pointer;
  :hover {
    color: ${color.primary};
  }
`;
