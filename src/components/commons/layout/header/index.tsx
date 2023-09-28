import Link from "next/link";
import * as S from "./header.styles";

export default function LayoutHeader(): JSX.Element {
  return (
    <S.Header>
      <S.Wrapper>
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
