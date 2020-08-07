import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  @import url('https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.css');
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;800&display=swap');

  /* --- Reset --- */
  html,
  body,
  div,
  span,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  address,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  q,
  small,
  strong,
  sub,
  sup,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td {
    border: 0;
    margin: 0;
    padding: 0;
  }
  article,
  aside,
  figure,
  figure img,
  figcaption,
  hgroup,
  footer,
  header,
  nav,
  section,
  video,
  object {
    display: block;
  }
  a img {
    border: 0;
  }
  figure {
    position: relative;
    margin: 0;
  }
  figure img {
    width: 100%;
  }
  * {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
  html,
  body {
    margin: 0;
    padding: 0;
  }
  input,
  button {
    font: inherit;
  }

  body {
    font-family: 'Inter';

  }

`;
