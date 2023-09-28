import styled from "@emotion/styled";
import { color } from "../../../../commons/styles/color.styles";

export const Container = styled.section`
  max-width: 1280px;
  margin: 0 auto;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 300px;
`;

export const LoginForm = styled.form`
  width: 420px;
  padding: 32px 40px;
  border: 1px solid ${color.gray};
  border-radius: 4px;
  @media (max-width: 500px) {
    width: 320px;
    padding: 20px;
  }
`;

export const TitleBox = styled.div`
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const PasswordBox = styled.div`
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Label = styled.label`
  padding-left: 4px;
`;

export const Input = styled.input`
  padding: 8px 12px;
  border-radius: 8px;
  border: 1px solid ${color.gray};
`;

export const SubmitButton = styled.button`
  width: 100%;
  margin-top: 20px;
  padding: 12px 32px;
  border-radius: 8px;
  background-color: ${color.primary};
  transition: 0.2s;
  cursor: pointer;
  :hover {
    background-color: ${color.block};
  }
`;
