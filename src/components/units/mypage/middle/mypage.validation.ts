import * as yup from "yup";

export const nicknameChangeSchema = yup.object({
  nickname: yup
    .string()
    .max(12, "닉네임은 최대 12자리로 입력해주세요.")
    .required("닉네임을 입력해주세요."),
});
