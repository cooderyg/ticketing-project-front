import Link from "next/link";
import * as S from "./sign-upMiddle.style";
import LogoImage from "../../../../../public/images/sign-logo.png";
import Image from "next/image";

export default function SignupMiddle() {
  return (
    <>
      <S.Container>
        <S.Wrapper>
          <Link href="/">
            <a>
              <Image src={LogoImage} />
            </a>
          </Link>
          <S.SignupForm>
            <S.EmailBox>
              <S.Label htmlFor="email">이메일</S.Label>
              <S.EmailWrapper>
                <S.Input
                  isSignupEmail={true}
                  id="email"
                  type="text"
                  placeholder="이메일을 입력해주세요."
                />
                <S.EmailAuthBtn type="button">인증</S.EmailAuthBtn>
              </S.EmailWrapper>
            </S.EmailBox>
            <S.PasswordBox>
              <S.Label htmlFor="password">비밀번호</S.Label>
              <S.Input
                id="password"
                type="password"
                placeholder="비밀번호를 입력해주세요."
              />
            </S.PasswordBox>
            <S.NicknameBox>
              <S.Label htmlFor="nickname">닉네임</S.Label>
              <S.Input
                id="nickname"
                type="text"
                placeholder="비밀번호를 입력해주세요."
              />
            </S.NicknameBox>
            <S.SubmitButton>회원가입</S.SubmitButton>
          </S.SignupForm>
        </S.Wrapper>
      </S.Container>
    </>
  );
}
