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
`;

export const RegistrationForm = styled.form`
  padding: 60px 80px;
  border: 1px solid ${color.gray};
  border-radius: 8px;
`;

export const CategoryTitleWrapper = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 40px;
`;

export const CategoryBox = styled.div`
  > label {
    cursor: auto;
  }
`;

export const CategorySelect = styled.select`
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

export const Category = styled.option``;

export const TitleBox = styled.div`
  flex: 1;
  > input {
    width: calc(100% - 95px);
  }
`;

export const DescriptionBox = styled.div`
  margin-bottom: 32px;
  > input {
    width: calc(100% - 95px);
  }
`;

export const AddressBox = styled.div`
  margin-bottom: 32px;
  > input {
    width: calc(100% - 95px);
  }
`;

export const DateWrapper = styled.div`
  display: flex;
  gap: 16px;
`;

export const DateBox = styled.div`
  margin-bottom: 32px;
  > div {
    width: calc(100% - 130px);
  }
`;

export const SeatWrapper = styled.ul``;

export const SeatBox = styled.li`
  display: flex;
  gap: 24px;
`;

export const SeatInputBox = styled.div`
  width: calc(50% - 48px);
  margin-bottom: 16px;
  > label {
    padding-top: 6px;
  }
  > input {
    width: calc(100% - 90px);
  }
`;

export const SeatRemoveBtn = styled.button`
  height: 36px;
  padding: 0 8px;
  border-radius: 4px;
  color: ${color.white};
  background-color: ${color.primary};
  cursor: pointer;
`;

export const SeatAddBtn = styled.button`
  display: block;
  margin: 0 auto 40px;
  padding: 8px;
  font-size: 16px;
  background-color: ${color.primary};
  color: ${color.white};
  border-radius: 8px;
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
  padding: 8px 12px;
  border-radius: 8px;
  background-color: ${color.primary};
  color: ${color.white};
  cursor: pointer;
`;
