import { atom } from "recoil";

export const accessTokenState = atom({
  key: "accessToken",
  default: "",
});

export const visitedPageState = atom({
  key: "visitedPage",
  default: "",
});
