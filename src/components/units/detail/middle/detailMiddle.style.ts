import styled from "@emotion/styled";
import { color } from "../../../../commons/styles/color.styles";

export const Container = styled.section`
  margin: 100px auto 20px;
  padding: 0 20px;
  max-width: 1280px;
  min-height: 80vh;
`;

export const Wrapper = styled.div`
  display: flex;
  padding-bottom: 24px;
  border-bottom: 1px solid ${color.gray};
  @media (max-width: 1080px) {
    justify-content: space-between;
    gap: 20px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const ProductTitle = styled.h2`
  padding-bottom: 20px;
  font-size: 28px;
  font-weight: bold;
`;

export const InfoPaymentWrapper = styled.div`
  flex: 1;
  display: flex;
  @media (max-width: 1080px) {
    flex: auto;
  }
  @media (max-width: 950px) {
    flex-direction: column;
    flex: 0;
  }
`;

// 이미지
export const PosterBox = styled.div`
  margin-right: 120px;
  width: 300px;
  height: 400;
  @media (max-width: 1080px) {
    margin-right: 20px;
  }
  @media (max-width: 950px) {
    margin-right: 0;
    width: 100%;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

// 설명
export const InfoBox = styled.ul`
  margin-right: auto;

  > li:first-child {
    padding-top: 0;
  }
`;

export const DescBox = styled.li`
  display: flex;
  gap: 5px;
  padding-top: 16px;

  > span {
    font-weight: 600;
  }
  > span:nth-child(1) {
    width: 80px;
  }
`;

// 결제
export const PriceBox = styled.ul`
  padding-left: 20px;

  > li {
    padding-top: 8px;
    font-weight: 600;
  }
  > li:first-child {
    padding-top: 0;
  }
`;

export const PaymentBox = styled.ul`
  @media (max-width: 950px) {
    padding: 16px 0;
  }
`;

export const SeatSelect = styled.select`
  border-radius: 2px;
  background-color: ${color.white};
`;

export const Seat = styled.option``;

export const SelectedSeatBox = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  max-width: 280px;
  margin-top: 20px;
  > li {
    padding: 4px 12px;
    background-color: aqua;
    border-radius: 50px;
    font-size: 12px;
    cursor: pointer;
  }
`;

export const Price = styled.p`
  margin-top: 32px;
  font-size: 16px;
  font-weight: bold;
`;

export const PaymentBtn = styled.button`
  width: 280px;
  padding: 12px 40px;
  margin-top: 20px;
  background-color: ${color.primary};
  color: ${color.white};
  border-radius: 4px;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
`;
