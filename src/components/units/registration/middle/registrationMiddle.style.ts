import styled from "@emotion/styled";
import { color } from "../../../../commons/styles/color.styles";

interface IInputProps {
  isError: string | undefined;
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
  > div {
    width: 50%;
  }
  input {
    width: calc(100% - 130px);
  }
`;

export const DateBox = styled.div``;

export const RegistrationBtn = styled.button``;
