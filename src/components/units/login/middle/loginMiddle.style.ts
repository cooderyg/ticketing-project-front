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
  margin-top: 200px;
  min-height: 80vh;
  @media (max-width: 768px) {
    margin-top: 100px;
  }
`;

export const LoginForm = styled.form`
  width: 420px;
  padding: 32px 40px;
  border: 1px solid ${color.gray};
  border-radius: 8px;
  @media (max-width: 500px) {
    width: 320px;
    padding: 20px;
  }
`;

export const EmailBox = styled.div`
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
  cursor: pointer;
`;

export const Input = styled.input`
  padding: 8px 12px;
  border-radius: 8px;
  border: 1px solid ${color.gray};
  :focus {
    border: 1px solid ${color.primary};
  }
`;

export const SubmitButton = styled.button`
  width: 100%;
  margin-top: 20px;
  padding: 12px 32px;
  border-radius: 8px;
  background-color: ${color.primary};
  color: ${color.white};
  transition: 0.2s;
  cursor: pointer;
  :hover {
    background-color: ${color.secondary};
    color: ${color.black};
  }
`;

export const Signup = styled.a`
  margin-top: 32px;
  text-align: center;
  transition: 0.2s;
  cursor: pointer;

  :hover {
    color: ${color.primary};
  }
`;
