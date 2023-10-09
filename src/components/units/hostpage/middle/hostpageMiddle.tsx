import * as S from "./hostpageMiddle.style";

// 내 매출, 내 콘서트 관리
export default function HostpageMiddle(): JSX.Element {
  return (
    <S.Container>
      <S.Subject>Stage Pick 엔터테이먼트</S.Subject>
      <S.Wrapper>
        <S.SaleBox>
          <S.Title>이번 달 매출</S.Title>
          <S.Sale>300,000,000 원</S.Sale>
        </S.SaleBox>
        <S.Title>Stage Pick 엔터테이먼트 공연</S.Title>
        <S.ConcertBox>
          <S.Concert>
            <S.ConcertTitle>드라큘라</S.ConcertTitle>
            <S.ConcertDate>2023년 11월 11일</S.ConcertDate>
            <S.ConcertSales>매출액 : 100,000,000 원</S.ConcertSales>
            <S.ConcertSalesRate>매진율 : 70%</S.ConcertSalesRate>
          </S.Concert>
        </S.ConcertBox>
      </S.Wrapper>
    </S.Container>
  );
}
