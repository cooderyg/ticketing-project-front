import Image from "next/image";
import * as S from "./detailMiddle.style";
import PosterImage from "../../../../../public/images/psy.jpg";
export default function DetailMiddle(): JSX.Element {
  return (
    <>
      <S.Container>
        <S.ProductTitle>싸이 흠뻑쇼</S.ProductTitle>
        <S.Wrapper>
          <S.PosterBox>
            <Image src={PosterImage} width={300} height={400} />
          </S.PosterBox>
          <S.InfoBox>
            <S.DescBox>
              <span>공연장소</span>
              <span>사랑시 고백구 행복동 11-11</span>
            </S.DescBox>
            <S.DescBox>
              <span>공연날짜</span>
              <span>2023년 11월 11일</span>
            </S.DescBox>
            <S.DescBox>
              <span>공연시간</span>
              <span>600분</span>
            </S.DescBox>
            <S.DescBox>
              <span>관람연령</span>
              <span>15세이상 관람가능</span>
            </S.DescBox>
            <S.DescBox>
              <span>가격</span>
              <S.PriceBox>
                <li>VIP 170,000원</li>
                <li>VIP 170,000원</li>
                <li>VIP 170,000원</li>
                <li>VIP 170,000원</li>
              </S.PriceBox>
            </S.DescBox>
          </S.InfoBox>
          <S.PaymentBox>
            <S.SeatSelect>
              <S.Seat>VIP 1번</S.Seat>
              <S.Seat>VIP 1번</S.Seat>
              <S.Seat>VIP 1번</S.Seat>
              <S.Seat>VIP 1번</S.Seat>
              <S.Seat>VIP 1번</S.Seat>
            </S.SeatSelect>
            <S.SelectedSeatBox>
              <li>VIP 1번</li>
              <li>VIP 1번</li>
              <li>VIP 1번</li>
              <li>VIP 1번</li>
            </S.SelectedSeatBox>
            <S.Price>총 결제금액 100,000원</S.Price>
            <S.PaymentBtn>결제하기</S.PaymentBtn>
          </S.PaymentBox>
        </S.Wrapper>
      </S.Container>
    </>
  );
}
