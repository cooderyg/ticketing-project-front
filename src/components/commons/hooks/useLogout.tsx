import { useRecoilState } from "recoil";
import { accessTokenState } from "../stores";
import { useRouter } from "next/router";
import { useEffect } from "react";

export const useAuth = (): void => {
  const router = useRouter();

  const [accessToken, _] = useRecoilState(accessTokenState);
  useEffect(() => {
    if (!accessToken) router.replace("/");
  }, [accessToken, router]);
};
