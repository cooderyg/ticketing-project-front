import styled from "@emotion/styled";
import { color } from "../../../../commons/styles/color.styles";

class InputProps {
  isSignupEmail?: boolean = false;
  isError?: string;
}

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

export const SignupForm = styled.form`
  width: 420px;
  padding: 32px 40px;
  border: 1px solid ${color.gray};
  border-radius: 8px;
  @media (max-width: 500px) {
    width: 320px;
    padding: 20px;
  }
`;

// 이메일
export const EmailBox = styled.div`
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const EmailWrapper = styled.div`
  display: flex;
  gap: 4px;
`;

export const EmailAuthBtn = styled.button`
  width: 60px;
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

// 비밀번호
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

export const Input = styled.input<InputProps>`
  ${(props) => (props.isSignupEmail ? "width: calc(100% - 60px);" : "")}
  padding: 8px 12px;
  border-radius: 8px;
  ${(props) =>
    props.isError
      ? `border: 1px solid ${color.red};`
      : `border: 1px solid ${color.gray};`}

  :focus {
    border: 1px solid ${color.primary};
  }
`;

export const ErrorMessage = styled.p`
  padding-left: 4px;
  color: ${color.red};
`;

export const NicknameBox = styled.div`
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
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
