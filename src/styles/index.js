import { createGlobalStyle } from 'styled-components/macro';

export const GlobalStyle = createGlobalStyle`
  /*
   * On production @import does not work. More ref: https://github.com/styled-components/styled-components/issues/2911#issuecomment-592012166
   *
   */
   
  /* @import url('https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.css');
  @import url('https://fonts.googleapis.com/css2?family=Inter&display=swap'); */

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

    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: normal;
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
`;
