import Image from "next/image";
import * as S from "./detailMiddle.style";
import PosterImage from "../../../../../public/images/psy.jpg";
import { useQuery } from "@tanstack/react-query";
import axiosClient from "../../../../commons/axios/axios-client";
import { useRouter } from "next/router";
import { AxiosResponse } from "axios";
import { useEffect, useState } from "react";

export enum AGELIMIT {
  ZERO = "ZERO",
  SEVEN = "SEVEN",
  FIFTEEN = "FIFTEEN",
  NINETEEN = "NINETEEN",
}

interface ISeat {
  id: string;
  grade: string;
  price: number;
  seatNum: number;
  isSoldOut: boolean;
  createdAt: Date;
  updatedAt: Date;
}

interface IDetailResDate {
  id: string;
  name: string;
  address: string;
  imageUrl: string;
  ageLimit: AGELIMIT;
  seats: ISeat[];
  runningTime: number;
  concertDate: Date;
  startDate: Date;
  endDate: Date;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
}

interface IDetailRes extends AxiosResponse {
  data: IDetailResDate;
}

interface ISeatGradeAndPrice {
  grade: string;
  price: number;
}

export default function DetailMiddle(): JSX.Element {
  const [seatGradeandePrice, setSeatGradeAndPrice] = useState<
    ISeatGradeAndPrice[]
  >([]);
  const route = useRouter();
  const { data } = useQuery<IDetailRes>({
    queryKey: ["datails"],
    queryFn: () => {
      return axiosClient.get(`/concerts/details/${route.query.id}`);
    },
    cacheTime: 10000,
  });

  console.log(data);

  useEffect(() => {
    const grade: string[] = [];
    const price: number[] = [];
    data?.data.seats.map((el) => {
      grade.push?.(el.grade);
      price.push?.(el.price);
    });
    if (!grade.length) return;
    const uniqueGrade = [...new Set(grade)];
    const uniquePrice = [...new Set(price)];
    const gradeAndPrice = uniqueGrade.map((el, index) => {
      return {
        grade: el,
        price: uniquePrice[index],
      };
    });
    setSeatGradeAndPrice(gradeAndPrice);
  }, [data?.data.seats]);
  return (
    <>
      <S.Container>
        <S.ProductTitle>{data?.data.name}</S.ProductTitle>
        <S.Wrapper>
          <S.PosterBox>
            <Image
              src={data?.data.imageUrl || PosterImage}
              layout="fill"
              objectFit="fill"
              alt={data?.data.name}
            />
          </S.PosterBox>
          <S.InfoPaymentWrapper>
            <S.InfoBox>
              <S.DescBox>
                <span>공연장소</span>
                <span>{data?.data.address}</span>
              </S.DescBox>
              <S.DescBox>
                <span>공연날짜</span>
                <span>{data?.data.concertDate}</span>
              </S.DescBox>
              <S.DescBox>
                <span>공연시간</span>
                <span>{data?.data.runningTime}분</span>
              </S.DescBox>
              <S.DescBox>
                <span>관람연령</span>
                <span>15세이상 관람가능</span>
              </S.DescBox>
              <S.DescBox>
                <span>가격</span>
                <S.PriceBox>
                  {seatGradeandePrice?.map((el) => (
                    <li key={el.grade}>
                      <span>{el.grade}석</span>
                      <span>{el.price}원</span>
                    </li>
                  ))}
                </S.PriceBox>
              </S.DescBox>
            </S.InfoBox>
            <S.PaymentBox>
              <S.SeatSelect>
                {data?.data.seats.map((el) =>
                  !el.isSoldOut ? (
                    <S.Seat key={el.id}>{`${el.grade}-${el.seatNum}`}</S.Seat>
                  ) : null
                )}
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
          </S.InfoPaymentWrapper>
        </S.Wrapper>
      </S.Container>
    </>
  );
}
