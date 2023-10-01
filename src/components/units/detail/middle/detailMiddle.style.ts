import styled from "@emotion/styled";
import { color } from "../../../../commons/styles/color.styles";

export const Container = styled.section`
  margin: 100px auto 20px;
  padding: 0 20px;
  max-width: 1280px;
`;

export const Wrapper = styled.div`
  display: flex;
  padding-bottom: 24px;
  border-bottom: 1px solid ${color.gray};
`;

export const ProductTitle = styled.h2`
  padding-bottom: 20px;
  font-size: 28px;
  font-weight: bold;
`;

// 이미지
export const PosterBox = styled.div`
  margin-right: 80px;
`;

// 설명
export const InfoBox = styled.ul`
  margin-right: auto;
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
  padding: 16px 0;
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
  border: 1px solid ${color.gray};
  border-radius: 4px;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
`;
