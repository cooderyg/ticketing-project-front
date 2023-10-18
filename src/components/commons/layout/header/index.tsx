import Link from "next/link";
import * as S from "./header.styles";
import Image from "next/image";
import LogoImage from "../../../../../public/images/stage-logo.png";
import ProfileImage from "../../../../../public/images/profile.jpg";
import { useRecoilState } from "recoil";
import {
  accessTokenState,
  userInfoState,
  userMenuOpenState,
  visitedPageState,
} from "../../stores";
import { MouseEvent, useEffect, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import axiosClient from "../../../../commons/axios/axios-client";

interface IRefreshData {
  refreshToken: string;
}

interface IRefreshResData {
  accessToken: string;
}

interface IRefreshRes extends AxiosResponse {
  data: IRefreshResData;
}

export default function LayoutHeader(): JSX.Element {
  const [visitedPage] = useRecoilState(visitedPageState);
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  const [userMenuOpen, setUserMenuOpen] = useRecoilState(userMenuOpenState);
  const [userInfo, _] = useRecoilState(userInfoState);

  const onClickProfileImage = (event: MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
    setUserMenuOpen((prev) => !prev);
  };

  const onClickUserBox = (event: MouseEvent<HTMLUListElement>) => {
    event.stopPropagation();
  };

  const onClickLogoutBtn = () => {
    setAccessToken("");
    // TODO: https(reverse proxy)적용 후 cookie로 변경
    window.localStorage.removeItem("refreshToken");
  };

  const { mutate } = useMutation({
    mutationFn: (data: IRefreshData) => {
      return axiosClient.post("/auth/refresh", data);
    },
    onSuccess: (response: IRefreshRes) => {
      const { accessToken } = response.data;
      setAccessToken(accessToken);
    },
    onError: () => {
      // TODO: https(reverse proxy)적용 후 cookie로 변경
      window.localStorage.removeItem("refreshToken");
    },
  });

  useEffect(() => {
    const refreshToken = window.localStorage.getItem("refreshToken");

    if (!accessToken && refreshToken) {
      mutate({ refreshToken });
    }
  }, [accessToken, mutate]);

  useEffect(() => {
    setUserMenuOpen(false);
  }, [visitedPage]);

  return (
    <S.Header>
      <S.Wrapper>
        <S.LogoBox>
          <Link href="/">
            <a>
              <Image
                src={LogoImage}
                alt="logo"
                width={120}
                height={40}
                unoptimized={true}
              />
            </a>
          </Link>
        </S.LogoBox>
        <S.Nav>
          <Link href="/">
            <a>뮤지컬</a>
          </Link>
          <Link href="/">
            <a>연극</a>
          </Link>
          <Link href="/">
            <a>콘서트</a>
          </Link>
          {accessToken ? (
            <>
              <S.ProfileImageBox onClick={onClickProfileImage}>
                {userInfo.profileImageUrl ? (
                  <Image
                    objectFit="cover"
                    width={100}
                    height={100}
                    src={userInfo.profileImageUrl}
                    alt="프로필 이미지"
                  />
                ) : (
                  <Image
                    objectFit="fill"
                    src={ProfileImage}
                    alt="프로필 이미지"
                  />
                )}
              </S.ProfileImageBox>
              <S.UserMenuBox
                onClick={onClickUserBox}
                userMenuOpen={userMenuOpen}
              >
                <S.MyWrapper>
                  <S.Nickname>{userInfo.nickname}</S.Nickname>
                  <Link href="/mypage">
                    <S.Mypage>My 설정</S.Mypage>
                  </Link>
                </S.MyWrapper>
                <S.PointWrapper>
                  <S.NowPoint>
                    {userInfo.point.toLocaleString()} 포인트
                  </S.NowPoint>
                  <S.ChargeButton>충전하기</S.ChargeButton>
                </S.PointWrapper>
                <S.LogoutButtonWrapper>
                  <S.LogoutButton onClick={onClickLogoutBtn}>
                    로그아웃
                  </S.LogoutButton>
                </S.LogoutButtonWrapper>
              </S.UserMenuBox>
            </>
          ) : (
            <Link href="/login">
              <a>로그인</a>
            </Link>
          )}
        </S.Nav>
      </S.Wrapper>
    </S.Header>
  );
}
