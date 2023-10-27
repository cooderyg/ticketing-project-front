import Head from "next/head";
import * as S from "../src/components/commons/styles/index.styles";
import Card from "../src/components/units/index/index.card";
import { Fragment } from "react";
import MainCarousel from "../src/components/units/carousel/mainCarousel";
import { useQuery } from "@tanstack/react-query";
import axiosClient from "../src/commons/axios/axios-client";

export default function Home() {
  const { data, error, isLoading } = useQuery({
    queryKey: ["concerts"],
    queryFn: () => {
      return axiosClient.get("concerts");
    },
  });
  console.log(data);
  return (
    <Fragment>
      <MainCarousel />
      <S.Wrapper>
        <S.Title>티켓오픈</S.Title>
        <S.CardBox>
          {[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0].map((el) => (
            <Card
              title="드라큘라"
              time="11월 11일 오후 4시"
              description="국무회의는 정부의 권한에 속하는 중요한 정책을 심의한다."
              cast="박효신, 김준수"
              key={el}
            />
          ))}
        </S.CardBox>
      </S.Wrapper>
    </Fragment>
  );
}
