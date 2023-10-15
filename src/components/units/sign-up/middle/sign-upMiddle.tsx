import Link from "next/link";
import * as S from "./sign-upMiddle.style";
import LogoImage from "../../../../../public/images/sign-logo.png";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./sign-up.validation";

interface ISignupFormData {
  email: string;
  password: string;
  confirmPassword: string;
  nickname: string;
}

export default function SignupMiddle() {
  const { register, handleSubmit, formState } = useForm<ISignupFormData>({
    resolver: yupResolver(schema),
    mode: "onBlur",
  });
  console.log(formState.errors);
  const onClickSubmit = (data: ISignupFormData): void => {
    console.log(data);
  };

  return (
    <>
      <S.Container>
        <S.Wrapper>
          <Link href="/">
            <a>
              <Image src={LogoImage} />
            </a>
          </Link>
          <S.SignupForm onSubmit={handleSubmit(onClickSubmit)}>
            <S.EmailBox>
              <S.Label htmlFor="email">이메일</S.Label>
              <S.EmailWrapper>
                <S.Input
                  {...register("email")}
                  isSignupEmail={true}
                  isError={formState.errors.email?.message}
                  id="email"
                  type="text"
                  placeholder="이메일을 입력해주세요."
                />
                <S.EmailAuthBtn type="button">인증</S.EmailAuthBtn>
              </S.EmailWrapper>
              <S.ErrorMessage>{formState.errors.email?.message}</S.ErrorMessage>
            </S.EmailBox>
            <S.PasswordBox>
              <S.Label htmlFor="password">비밀번호</S.Label>
              <S.Input
                {...register("password")}
                isError={formState.errors.password?.message}
                id="password"
                type="password"
                placeholder="최소 8자 이상 최대15자 이하"
              />
              <S.ErrorMessage>
                {formState.errors.password?.message}
              </S.ErrorMessage>
            </S.PasswordBox>
            <S.PasswordBox>
              <S.Label htmlFor="confirmPassword">비밀번호 확인</S.Label>
              <S.Input
                {...register("confirmPassword")}
                isError={formState.errors.confirmPassword?.message}
                id="confirmPassword"
                type="password"
                placeholder="비밀번호를 재입력해주세요."
              />
              <S.ErrorMessage>
                {formState.errors.confirmPassword?.message}
              </S.ErrorMessage>
            </S.PasswordBox>
            <S.NicknameBox>
              <S.Label htmlFor="nickname">닉네임</S.Label>
              <S.Input
                {...register("nickname")}
                isError={formState.errors.nickname?.message}
                id="nickname"
                type="text"
                placeholder="닉네임을 입력해주세요."
              />
              <S.ErrorMessage>
                {formState.errors.nickname?.message}
              </S.ErrorMessage>
            </S.NicknameBox>
            <S.SubmitButton>회원가입</S.SubmitButton>
          </S.SignupForm>
        </S.Wrapper>
      </S.Container>
    </>
  );
}
