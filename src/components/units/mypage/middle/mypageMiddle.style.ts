import styled from "@emotion/styled";
import { color } from "../../../../commons/styles/color.styles";

interface INicknameChangeModalProps {
  isModalOpen: boolean;
}

interface INicknameChangeInputProps {
  isError?: string;
}

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
  > button:nth-of-type(1),
  > button:nth-of-type(2) {
    margin-right: 12px;
  }
`;

export const EditBtn = styled.button`
  padding: 4px 8px;
  border: 1px solid ${color.gray};
  border-radius: 4px;
  font-size: 12px;
  transition: 0.2s;
  cursor: pointer;
  :hover {
    background-color: ${color.primary};
    color: ${color.white};
    border: 1px solid ${color.primary};
  }
`;

export const ImageInput = styled.input`
  display: none;
`;

export const NicknameChangeModal = styled.div<INicknameChangeModalProps>`
  ${(props) => (props.isModalOpen ? "display: block;" : "display: none;")}

  z-index: 9999;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  border: 1px solid ${color.black};
  background-color: rgba(0, 0, 0, 0.7);
`;

export const NicknameChangeForm = styled.form`
  position: absolute;
  top: 25%;
  left: 50%;
  transform: translate(-50%, -25%);
  width: 400px;
  padding: 20px;
  border: 1px solid ${color.black};
  border-radius: 8px;
  background-color: ${color.white};
`;

export const NicknameChangeLabel = styled.label`
  display: block;
  margin: 0 0 12px 4px;
  font-size: 20px;
  cursor: pointer;
`;

export const NicknameChangeInput = styled.input<INicknameChangeInputProps>`
  width: 100%;
  padding: 8px 12px;
  ${(props) =>
    props.isError
      ? `border: 1px solid ${color.red};`
      : `border: 1px solid ${color.gray};
        :focus {
          border: 1px solid ${color.primary};
        }
      `}
  border-radius: 8px;
`;

export const ErrorMessage = styled.div`
  padding: 4px 0 0 4px;
  color: ${color.red};
`;

export const ModalBtnBox = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 12px;
  margin-top: 12px;
  > button {
    padding: 8px 16px;
    cursor: pointer;
  }
`;

export const SubmitBtn = styled.button`
  background-color: ${color.primary};
  color: ${color.white};
  border-radius: 4px;
`;

export const CancelBtn = styled.button`
  color: ${color.black};
  border: 1px solid ${color.gray};
  border-radius: 4px;
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
