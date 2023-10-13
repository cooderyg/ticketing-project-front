import * as S from "./registrationMiddle.style";

export default function RegistrationMiddle(): JSX.Element {
  return (
    <S.Container>
      <S.Wrapper>
        <S.Subject>콘서트 등록하기</S.Subject>
        <S.RegistrationForm>
          <S.CategoryTitleWrapper>
            <S.CategoryBox>
              <S.Label></S.Label>
              <S.CategorySelect>
                <S.Category>뮤지컬</S.Category>
              </S.CategorySelect>
            </S.CategoryBox>
            <S.TitleBox>
              <S.Label htmlFor="title">제목</S.Label>
              <S.TitleInput
                name="title"
                id="title"
                type="text"
                placeholder="제목을 입력하세요."
              />
            </S.TitleBox>
          </S.CategoryTitleWrapper>
          <S.DescriptionBox>
            <S.DescriptionInput
              name="description"
              type="text"
              placeholder="설명을 입력하세요."
            />
          </S.DescriptionBox>
          <S.AddressBox>
            <S.AddressInput
              name="address"
              id="address"
              type="text"
              placeholder="주소를 입력하세요."
            />
          </S.AddressBox>
          <S.DateWrapper>
            <S.StartDateBox>
              <S.Label htmlFor="start-date">예매 시작날짜</S.Label>
              <S.StartDateInput name="stratDate" id="start-date" type="date" />
            </S.StartDateBox>
            <S.EndDateBox>
              <S.Label htmlFor="end-date">예매 종료날짜</S.Label>
              <S.EndDateInput name="endDate" id="end-date" type="date" />
            </S.EndDateBox>
          </S.DateWrapper>
        </S.RegistrationForm>
      </S.Wrapper>
    </S.Container>
  );
}
