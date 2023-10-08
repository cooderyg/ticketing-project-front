import Image from "next/image";
import * as S from "./reservationMiddle.style";
import PosterImage from "../../../../../public/images/psy.jpg";

export default function ReservationMiddle(): JSX.Element {
  return (
    <S.Container>
      <S.Subject>결제정보</S.Subject>
      <S.Wrapper>
        <S.PosterBox>
          <Image src={PosterImage} objectFit="fill" />
        </S.PosterBox>
        <S.InfoSeatWrapper>
          <S.InfoBox>
            <S.Title>뮤지컬 레베카</S.Title>
            <S.Status>결제완료 </S.Status>
            <S.Date>
              결제일시 2023.11.11 PM 03:00 (2023.11.12 00:00시 까지 취소가능)
            </S.Date>
            <S.Address>경기도 부천시 원미구 중동 중앙공원</S.Address>
            <S.Description>
              설명입니다설명입니다설명입니다설명입니다설명입니다설명입니다설명입니다설명입니다설명입니다설명입니다.
            </S.Description>
            <S.TotalPrice>총 결제금액 210,000 원</S.TotalPrice>
          </S.InfoBox>
          <S.SeatWrapper>
            <S.SeatBox>
              <S.Seat>
                <S.SeatNumber>VIP - 1</S.SeatNumber>
                <S.SeatPrice>70,000 원</S.SeatPrice>
              </S.Seat>
              <S.Seat>
                <S.SeatNumber>VIP - 2</S.SeatNumber>
                <S.SeatPrice>70,000 원</S.SeatPrice>
              </S.Seat>
              <S.Seat>
                <S.SeatNumber>VIP - 3</S.SeatNumber>
                <S.SeatPrice>70,000 원</S.SeatPrice>
              </S.Seat>
            </S.SeatBox>
            <S.CancelBtn>결제 취소</S.CancelBtn>
          </S.SeatWrapper>
        </S.InfoSeatWrapper>
      </S.Wrapper>
    </S.Container>
  );
}
