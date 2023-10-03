import styled from "@emotion/styled";
import { color } from "../../../../commons/styles/color.styles";

export const Container = styled.section`
  max-width: 1280px;
  min-height: 80vh;
  padding: 0 20px;
  margin: 100px auto 0;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 60px;
  @media (max-width: 1280px) {
    justify-content: flex-start;
  }
  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const PosterBox = styled.div`
  width: 420px;
  height: 560px;
  @media (max-width: 1024px) {
    width: 100%;
    height: auto;
    aspect-ratio: 3 / 4;
  }
`;

export const InfoSeatWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  @media (max-width: 1280px) {
    flex-direction: column;
    justify-content: flex-start;
    gap: 20px;
    margin-bottom: 32px;
  }
`;

export const Title = styled.h2`
  margin-bottom: 32px;
  font-size: 28px;
  font-weight: 700;
`;

export const InfoBox = styled.ul`
  width: 500px;
  @media (max-width: 1280px) {
    width: auto;
  }
`;

export const Status = styled.li`
  margin-bottom: 24px;
  font-size: 20px;
  font-weight: 700;
  color: ${color.primary};
`;

export const Date = styled.li`
  margin-bottom: 16px;
  font-weight: 600;
`;

export const Address = styled.li`
  margin-bottom: 16px;
  font-weight: 600;
`;

export const Description = styled.li`
  margin-bottom: 32px;
  line-height: 1.6;
`;

export const TotalPrice = styled.p`
  font-size: 20px;
  font-weight: 700;
`;

// 좌석 & 취소버튼
export const SeatWrapper = styled.div``;

export const SeatBox = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;

export const Seat = styled.li`
  height: min-content;
  padding: 8px;
  border: 1px solid ${color.gray};
  border-radius: 4px;
`;

export const SeatNumber = styled.p`
  color: ${color.primary};
`;

export const SeatPrice = styled.p`
  font-size: 12px;
`;

export const CancelBtn = styled.button`
  width: 280px;
  margin-top: 40px;
  padding: 17px 20px 16px;
  border: 1px solid ${color.gray};
  border-radius: 8px;
  color: ${color.white};
  background-color: ${color.primary};
  cursor: pointer;
`;
