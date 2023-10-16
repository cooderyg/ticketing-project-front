import { useRecoilState } from "recoil";
import { accessTokenState } from "../stores";
import { useEffect, useState } from "react";

interface IUseAuthReturn {
  loggedIn: boolean;
}

export const useAuth = (): IUseAuthReturn => {
  const [loggedIn, setLoggedIn] = useState(false);

  const [accessToken, _] = useRecoilState(accessTokenState);
  useEffect(() => {
    accessToken ? setLoggedIn(true) : setLoggedIn(false);
  }, [accessToken]);

  return { loggedIn };
};
