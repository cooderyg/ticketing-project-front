import Link from "next/link";
import * as S from "./header.styles";
import Image from "next/image";
import LogoImage from "../../../../../public/images/stage-logo.png";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../stores";
import { useEffect } from "react";
import { useMutation } from "@tanstack/react-query";
import { axiosClient } from "../../../../commons/axios/axios-client";
import { AxiosResponse } from "axios";

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
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);

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
  }, []);
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
            <S.LogoutButton onClick={onClickLogoutBtn}>로그아웃</S.LogoutButton>
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
