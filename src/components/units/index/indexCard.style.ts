import styled from "@emotion/styled";
import { color } from "../../../commons/styles/color.styles";

export const Container = styled.li`
  width: 400px;
  height: 180px;
  margin-top: 20px;
  border: 1px solid ${color.gray};
  border-radius: 4px;
  overflow: hidden;
  @media (max-width: 1280px) {
    width: calc(50% - 10px);
  }
`;

export const CardWrapper = styled.a`
  display: flex;
  width: 100%;
  height: 100%;
  cursor: pointer;
`;

export const ImageBox = styled.div`
  position: relative;
  width: 130px;
  height: 100%;
  padding: 0;
  margin: 0;
`;

export const InfoBox = styled.div`
  padding: 16px 12px;
  width: calc(100% - 130px);
`;

export const Title = styled.h4`
  padding-bottom: 12px;
  font-size: 20px;
  font-weight: bold;
  color: ${color.primary};
`;

export const Time = styled.p`
  padding-bottom: 8px;
  font-weight: bold;
`;

export const Cast = styled.p`
  padding-bottom: 8px;
  font-weight: bold;
`;

export const Description = styled.p`
  line-height: 1.3;
`;
