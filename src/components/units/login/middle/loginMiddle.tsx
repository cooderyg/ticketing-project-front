import Link from "next/link";
import * as S from "./loginMiddle.style";
import Image from "next/image";
import LogoImage from "../../../../../public/images/sign-logo.png";

export default function LoginMiddle(): JSX.Element {
  return (
    <>
      <S.Container>
        <S.Wrapper>
          <Link href="/">
            <a>
              <Image src={LogoImage} />
            </a>
          </Link>
          <S.LoginForm>
            <S.EmailBox>
              <S.Label htmlFor="email">이메일</S.Label>
              <S.Input
                id="email"
                type="text"
                placeholder="이메일을 입력해주세요."
              />
            </S.EmailBox>
            <S.PasswordBox>
              <S.Label htmlFor="password">비밀번호</S.Label>
              <S.Input
                id="password"
                type="password"
                placeholder="비밀번호를 입력해주세요."
              />
            </S.PasswordBox>
            <S.SubmitButton>로그인</S.SubmitButton>
            <Link href="/sign-up">
              <S.Signup>회원가입</S.Signup>
            </Link>
          </S.LoginForm>
        </S.Wrapper>
      </S.Container>
    </>
  );
}
