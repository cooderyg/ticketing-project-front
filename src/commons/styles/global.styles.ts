import { css } from "@emotion/react";
import { color } from "./color.styles";

export const globalStyles = css`
  @font-face {
    font-family: "pretendard";
    src: url("/fonts/pretendard.ttf");
  }
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: "pretendard", sans-serif;
    font-size: 16px;
    font-weight: 400;
  }
  a {
    display: block;
    text-decoration: none;
    color: ${color.black};
  }

  input,
  button {
    border: none;
    background-color: #ffffff;
  }

  input:focus {
    outline: none;
  }

  input[type="number"]::-webkit-outer-spin-button,
  input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }

  ol,
  ul {
    list-style: none;
  }
`;
