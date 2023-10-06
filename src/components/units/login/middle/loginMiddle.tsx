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
            <S.TitleBox>
              <S.Label>이메일</S.Label>
              <S.Input type="text" placeholder="이메일을 입력해주세요." />
            </S.TitleBox>
            <S.PasswordBox>
              <S.Label>비밀번호</S.Label>
              <S.Input type="password" placeholder="비밀번호를 입력해주세요." />
            </S.PasswordBox>
            <S.SubmitButton>로그인</S.SubmitButton>
          </S.LoginForm>
        </S.Wrapper>
      </S.Container>
    </>
  );
}
