import Image from "next/image";
import * as S from "./mypageMiddle.style";
import ProfileImage from "../../../../../public/images/profile.jpg";

export default function MypageMiddle(): JSX.Element {
  return (
    <S.Container>
      <S.Wrapper>
        <S.Title>내 프로필</S.Title>
        <S.ProfileBox>
          <S.ProfileImageBox>
            <S.ImageWrapper>
              <Image objectFit="fill" src={ProfileImage} />
            </S.ImageWrapper>
          </S.ProfileImageBox>
          <S.NicknameBox>
            <S.Nickname>노드트라다무스</S.Nickname>
            <S.EditWrapper>
              <S.EditBtn>이미지 수정</S.EditBtn>
              <S.EditBtn>닉네임 수정</S.EditBtn>
            </S.EditWrapper>
          </S.NicknameBox>
        </S.ProfileBox>
        <S.Title>내 예매내역</S.Title>
        <S.ReservationBox>
          <S.Reservation>
            <S.ReservationTitle>뮤지컬 레베카</S.ReservationTitle>
            <S.ReservationDate>2023년 11월 11일 오후 3시</S.ReservationDate>
            <S.ReservationSeats>
              <S.ReservationSeat>VIP-1</S.ReservationSeat>
              <S.ReservationSeat>VIP-1</S.ReservationSeat>
              <S.ReservationSeat>VIP-1</S.ReservationSeat>
            </S.ReservationSeats>
          </S.Reservation>
          <S.Reservation>
            <S.ReservationTitle>뮤지컬 레베카</S.ReservationTitle>
            <S.ReservationDate>2023년 11월 11일 오후 3시</S.ReservationDate>
            <S.ReservationSeats>
              <S.ReservationSeat>VIP-1</S.ReservationSeat>
              <S.ReservationSeat>VIP-1</S.ReservationSeat>
              <S.ReservationSeat>VIP-1</S.ReservationSeat>
            </S.ReservationSeats>
          </S.Reservation>
          <S.Reservation>
            <S.ReservationTitle>뮤지컬 레베카</S.ReservationTitle>
            <S.ReservationDate>2023년 11월 11일 오후 3시</S.ReservationDate>
            <S.ReservationSeats>
              <S.ReservationSeat>VIP-1</S.ReservationSeat>
              <S.ReservationSeat>VIP-1</S.ReservationSeat>
              <S.ReservationSeat>VIP-1</S.ReservationSeat>
            </S.ReservationSeats>
          </S.Reservation>
          <S.Reservation>
            <S.ReservationTitle>뮤지컬 레베카</S.ReservationTitle>
            <S.ReservationDate>2023년 11월 11일 오후 3시</S.ReservationDate>
            <S.ReservationSeats>
              <S.ReservationSeat>VIP-1</S.ReservationSeat>
              <S.ReservationSeat>VIP-1</S.ReservationSeat>
              <S.ReservationSeat>VIP-1</S.ReservationSeat>
            </S.ReservationSeats>
          </S.Reservation>
          <S.Reservation>
            <S.ReservationTitle>뮤지컬 레베카</S.ReservationTitle>
            <S.ReservationDate>2023년 11월 11일 오후 3시</S.ReservationDate>
            <S.ReservationSeats>
              <S.ReservationSeat>VIP-1</S.ReservationSeat>
              <S.ReservationSeat>VIP-1</S.ReservationSeat>
              <S.ReservationSeat>VIP-1</S.ReservationSeat>
            </S.ReservationSeats>
          </S.Reservation>
          <S.Reservation>
            <S.ReservationTitle>뮤지컬 레베카</S.ReservationTitle>
            <S.ReservationDate>2023년 11월 11일 오후 3시</S.ReservationDate>
            <S.ReservationSeats>
              <S.ReservationSeat>VIP-1</S.ReservationSeat>
              <S.ReservationSeat>VIP-1</S.ReservationSeat>
              <S.ReservationSeat>VIP-1</S.ReservationSeat>
            </S.ReservationSeats>
          </S.Reservation>
          <S.Reservation>
            <S.ReservationTitle>뮤지컬 레베카</S.ReservationTitle>
            <S.ReservationDate>2023년 11월 11일 오후 3시</S.ReservationDate>
            <S.ReservationSeats>
              <S.ReservationSeat>VIP-1</S.ReservationSeat>
              <S.ReservationSeat>VIP-1</S.ReservationSeat>
              <S.ReservationSeat>VIP-1</S.ReservationSeat>
            </S.ReservationSeats>
          </S.Reservation>
          <S.Reservation>
            <S.ReservationTitle>뮤지컬 레베카</S.ReservationTitle>
            <S.ReservationDate>2023년 11월 11일 오후 3시</S.ReservationDate>
            <S.ReservationSeats>
              <S.ReservationSeat>VIP-1</S.ReservationSeat>
              <S.ReservationSeat>VIP-1</S.ReservationSeat>
              <S.ReservationSeat>VIP-1</S.ReservationSeat>
            </S.ReservationSeats>
          </S.Reservation>
        </S.ReservationBox>
      </S.Wrapper>
    </S.Container>
  );
}
