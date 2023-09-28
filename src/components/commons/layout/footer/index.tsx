import * as S from "./footer.style";

export default function LayoutFooter(): JSX.Element {
  return (
    <S.Footer>
      <S.Wrapper>
        <S.Address>&copy; Stage Pick</S.Address>
      </S.Wrapper>
    </S.Footer>
  );
}
