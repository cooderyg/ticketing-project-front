import Link from "next/link";
import * as S from "./header.styles";

export default function Header(): JSX.Element {
  return (
    <S.Header>
      <S.Wrapper>
        <S.Nav>
          <S.Logo>
            <Link href="/"></Link>
          </S.Logo>
        </S.Nav>
      </S.Wrapper>
    </S.Header>
  );
}
