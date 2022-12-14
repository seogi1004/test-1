import css from "@emotion/css";

export default css`
  *,
  *::before,
  *::after {
    box-sizing: inherit;
    font: inherit;
  }

  html,
  body,
  #root {
    width: 100vw;
    height: 100vh;
  }

  html {
    box-sizing: border-box;
  }

  li {
    list-style: none;
  }
`;
