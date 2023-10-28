import styled from "@emotion/styled";
import { color } from "../../../../commons/styles/color.styles";

interface IInputProps {
  isError?: string;
}

export const Container = styled.section`
  max-width: 1280px;
  min-height: 80vh;
  margin: 100px auto;
  padding: 0 20px;
`;

export const Wrapper = styled.div``;

export const Subject = styled.h2`
  margin-bottom: 20px;
  text-align: center;
  font-size: 28px;
  font-weight: bold;
`;

export const Label = styled.label`
  padding-right: 20px;
  font-size: 20px;
  cursor: pointer;
  @media (max-width: 768px) {
    font-size: 16px;
    padding-right: 12px;
  }
`;

export const Input = styled.input<IInputProps>`
  padding: 8px 12px;
  border: 1px solid ${color.gray};
  border-radius: 8px;
  ${(props) =>
    props.isError
      ? `border: 1px solid ${color.red};`
      : `:focus {
    border: 1px solid ${color.primary};
  }`}
`;

export const ErrorMessage = styled.p`
  color: ${color.red};
  padding: 4px 0 0 105px;
  @media (max-width: 768px) {
    padding: 4px 0;
    font-size: 12px;
  }
`;

export const RegistrationForm = styled.form`
  padding: 60px 80px;
  border: 1px solid ${color.gray};
  border-radius: 8px;
  @media (max-width: 1020px) {
    padding: 32px;
  }
  @media (max-width: 768px) {
    padding: 0;
    border: none;
  }
`;

export const SelectRunningTimeWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin-bottom: 32px;
  @media (max-width: 1020px) {
    margin-bottom: 16px;
  }
`;

export const CategoryBox = styled.div`
  > label {
    cursor: auto;
  }
`;

export const AgeLimitBox = styled.div``;

export const RunningTimeBox = styled.div`
  width: calc(100% - 376px);
  input {
    width: calc(100% - 95px);
  }
  @media (max-width: 768px) {
    width: 100%;
    input {
      width: calc(100% - 72px);
    }
  }
`;

export const Select = styled.select`
  padding: 8px 14px 8px 10px;
  background-color: transparent;
  border: 1px solid ${color.gray};
  border-radius: 8px;
  outline: none;
  cursor: pointer;
  :focus {
    border: 1px solid ${color.primary};
  }
`;

export const Option = styled.option``;

export const NameBox = styled.div`
  margin-bottom: 32px;
  > input {
    width: calc(100% - 95px);
  }
  @media (max-width: 768px) {
    margin-bottom: 16px;
    input {
      width: calc(100% - 72px);
    }
  }
`;

export const DescriptionBox = styled.div`
  margin-bottom: 32px;
  > input {
    width: calc(100% - 95px);
  }
  @media (max-width: 768px) {
    margin-bottom: 16px;
    input {
      width: calc(100% - 72px);
    }
  }
`;

export const AddressBox = styled.div`
  margin-bottom: 32px;
  > input {
    width: calc(100% - 95px);
  }
  @media (max-width: 768px) {
    margin-bottom: 16px;
    input {
      width: calc(100% - 72px);
    }
  }
`;

export const DateWrapper = styled.div`
  display: flex;
  gap: 16px;
`;

export const DateBox = styled.div`
  width: 100%;
  margin-bottom: 32px;
  > div {
    width: calc(100% - 95px);
  }
  > label {
    cursor: auto;
  }
  > div > div > div {
    width: 100%;
    padding: 8px 12px;
  }
  @media (max-width: 1020px) {
    margin-bottom: 16px;
  }
  @media (max-width: 768px) {
    > div {
      width: calc(100% - 72px);
    }
  }
`;

export const SeatWrapper = styled.ul``;

export const SeatBox = styled.li`
  display: flex;
  gap: 24px;
  @media (max-width: 768px) {
    gap: 12px;
  }
`;

export const SeatInputBox = styled.div`
  width: calc(33% - 36px);
  margin-bottom: 16px;
  > label {
    padding-top: 6px;
  }
  > input {
    width: calc(100% - 90px);
  }

  @media (max-width: 768px) {
    width: calc(33% - 24px);
    margin-bottom: 4px;
    > label {
      display: block;
      padding-bottom: 8px;
    }
    > input {
      width: 100%;
    }
  }
`;

export const SeatRemoveBtn = styled.button`
  width: 40px;
  height: 40px;
  color: ${color.primary};
  cursor: pointer;

  @media (max-width: 768px) {
    margin-top: 32px;
  }
`;

export const SeatAddBtn = styled.button`
  display: block;
  margin: 0 auto 40px;
  width: 40px;
  color: ${color.primary};
  cursor: pointer;
`;

export const PosterImageBox = styled.div`
  display: flex;
  input {
    display: none;
  }
  svg {
    width: 200px;
    color: ${color.primary};
    cursor: pointer;
  }
  img {
    cursor: pointer;
  }
`;

export const RegistrationBtn = styled.button`
  width: 200px;
  display: block;
  margin: 80px auto 0;
  padding: 12px 16px;
  border-radius: 8px;
  background-color: ${color.primary};
  color: ${color.white};
  cursor: pointer;
`;
