import * as S from "../src/components/commons/styles/index.styles";
import Card from "../src/components/units/index/index.card";
import { Fragment, useMemo } from "react";
import MainCarousel from "../src/components/units/carousel/mainCarousel";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import axiosClient from "../src/commons/axios/axios-client";
import useIntersectionObserver from "../src/components/commons/hooks/useIntersection";
import { Spin } from "antd";

interface ICategory {
  name: string;
}

export interface IConcert {
  id: string;
  name: string;
  description: string;
  address: string;
  ageLimit: string;
  imageUrl: string;
  concertDate: Date;
  startDate: Date;
  endDate: Date;
  category: ICategory;
}

interface IConcertsQueryResData {
  concerts: IConcert[];
  count: number;
  page: number;
  hasNextPage: boolean;
}

export default function Home() {
  const { data, isLoading, hasNextPage, fetchNextPage } = useInfiniteQuery(
    ["concert"],
    async ({ pageParam = 1 }) => {
      const response = await axiosClient.get<IConcertsQueryResData>(
        "concerts?page=" + pageParam
      );
      return response.data;
    },
    {
      getNextPageParam: (lastPage) =>
        lastPage.hasNextPage ? lastPage.page + 1 : undefined,
    }
  );
  console.log(data);
  const { setTarget } = useIntersectionObserver({ hasNextPage, fetchNextPage });
  return (
    <Fragment>
      <S.CarouselWrapper>
        <MainCarousel />
      </S.CarouselWrapper>
      <S.Wrapper>
        <S.Title>티켓오픈</S.Title>
        <S.CardBox>
          {data?.pages?.map((page) =>
            page?.concerts.map((concert) => (
              <Card concert={concert} key={concert.id} />
            ))
          )}
        </S.CardBox>
        <S.InfinityDiv ref={setTarget}></S.InfinityDiv>
        {isLoading ? (
          <S.SpinWrapper>
            <Spin />
          </S.SpinWrapper>
        ) : null}
      </S.Wrapper>
    </Fragment>
  );
}
