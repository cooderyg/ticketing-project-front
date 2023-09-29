import styled from "@emotion/styled";
import { color } from "../../../commons/styles/color.styles";

export const Wrapper = styled.div`
  max-width: 1280px;
  margin: 61px auto 80px;
  padding: 0 20px;
`;

export const CardBox = styled.ul`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const Card = styled.li`
  width: 400px;
  height: 160px;
  margin-top: 20px;
  background-color: aqua;
  border: 1px solid ${color.gray};
  border-radius: 4px;
  @media (max-width: 1280px) {
    width: calc(50% - 10px);
    height: 180px; // TODO: 내용 삽입 후 수정
  }
`;
