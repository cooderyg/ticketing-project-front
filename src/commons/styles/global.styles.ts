import { css } from "@emotion/react";

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

  input,
  button {
    border: none;
    background-color: #ffffff;
  }

  input:focus {
    outline: none;
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
