import styled from "@emotion/styled";
import { color } from "../../../../commons/styles/color.styles";

export const Container = styled.section`
  max-width: 1280px;
  min-height: 80vh;
  margin: 100px auto;
  padding: 0 20px;
`;

export const Title = styled.h2`
  margin-bottom: 32px;
  font-size: 24px;
  font-weight: 700;
`;

export const Wrapper = styled.div``;

export const ProfileBox = styled.ul`
  display: flex;
  gap: 20px;
  margin-bottom: 40px;
`;

export const ProfileImageBox = styled.li`
  position: relative;
  width: 100px;
  height: 100px;
`;

export const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid ${color.gray};
  border-radius: 50px;
  overflow: hidden;
`;

export const NicknameBox = styled.li``;

export const Nickname = styled.strong`
  display: block;
  margin-top: 16px;
  font-size: 20px;
  font-weight: 500;
  color: ${color.primary};
`;

export const EditWrapper = styled.div`
  margin-top: 32px;
  > button:first-child {
    margin-right: 12px;
  }
`;

export const EditBtn = styled.button`
  padding: 4px 8px;
  border: 1px solid ${color.gray};
  border-radius: 4px;
  font-size: 12px;
  cursor: pointer;
`;

// 예매내역
export const ReservationBox = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 28px;
`;

export const Reservation = styled.li`
  width: 288px;
  padding: 12px;
  border: 1px solid ${color.gray};
  border-radius: 4px;
  cursor: pointer;
`;

export const ReservationTitle = styled.h4`
  margin-bottom: 8px;
  font-size: 20px;
  color: ${color.primary};
`;

export const ReservationDate = styled.p`
  margin-bottom: 4px;
`;

export const ReservationSeats = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

export const ReservationSeat = styled.li`
  padding: 5px 8px 4px;
  border: 1px solid ${color.gray};
  border-radius: 50px;
  font-size: 12px;
`;
