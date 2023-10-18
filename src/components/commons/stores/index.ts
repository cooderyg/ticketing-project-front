import { atom } from "recoil";
import { ROLE } from "../../units/sign-up/middle/sign-up.validation";

export const accessTokenState = atom({
  key: "accessToken",
  default: "",
});

export const visitedPageState = atom({
  key: "visitedPage",
  default: "",
});

export const userMenuOpenState = atom({
  key: "userMenuOpen",
  default: false,
});

export const userInfoState = atom({
  key: "userInfo",
  default: {
    nickname: "",
    profileImageUrl: "",
    point: 0,
    role: ROLE.USER,
  },
});
