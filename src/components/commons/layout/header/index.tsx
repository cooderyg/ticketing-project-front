import Link from "next/link";
import * as S from "./header.styles";
import Image from "next/image";
import LogoImage from "../../../../../public/images/ticketing-logo.jpg";

export default function LayoutHeader(): JSX.Element {
  return (
    <S.Header>
      <S.Wrapper>
        <S.LogoBox>
          <Link href="/">
            <Image
              src={LogoImage}
              alt="logo"
              width={120}
              height={40}
              unoptimized={true}
            />
          </Link>
        </S.LogoBox>
        <S.Nav>
          <Link href="">
            <a>뮤지컬</a>
          </Link>
          <Link href="">
            <a>연극</a>
          </Link>
          <Link href="">
            <a>콘서트</a>
          </Link>
          <Link href="/login">
            <a>로그인</a>
          </Link>
        </S.Nav>
      </S.Wrapper>
    </S.Header>
  );
}
