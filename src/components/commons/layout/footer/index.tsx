import * as S from "./footer.style";

export default function LayoutFooter(): JSX.Element {
  return (
    <S.Footer>
      <S.Wrapper>
        <S.Description>
          이 사이트는 상업적 용도가 아닌 개인 포트폴리오 사이트입니다.
        </S.Description>
        <S.Address>&copy; Stage Pick</S.Address>
      </S.Wrapper>
    </S.Footer>
  );
}
