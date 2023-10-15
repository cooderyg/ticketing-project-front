import * as yup from "yup";

export enum ROLE {
  USER = "USER",
  HOST = "HOST",
}

export const schema = yup.object({
  role: yup.mixed<ROLE>().oneOf(Object.values(ROLE)).required(),
  email: yup
    .string()
    .email("이메일 형식에 적합하지 않습니다.")
    .required("이메일은 필수 입력입니다."),
  password: yup
    .string()
    .min(8, "비밀번호는 최소 8자리 이상으로 입력해주세요.")
    .max(15, "비밀번호는 최대 15자리로 입력해주세요.")
    .required("비밀번호는 필수 입력입니다."),
  confirmPassword: yup.string().required("비밀번호를 확인해주세요."),
  nickname: yup.string().required("닉네임을 입력해주세요."),
});
1;
