import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --max-width: 1200px;

    /** Colors **/
    --primary-1: #abc4ff;
    --light-gray: #e2eafc;
    --absolute-white: #edf2fb;

    /** Fonts **/
    --font-family: "Arial", sans-serif;

    /** body-default **/
    --body-default-font-size: 16px;

    /** h1-normal **/
    --h1-normal-font-size: 2em;

    /** Spacements **/
    --spacement-small: 6px;
    --spacement-default: 10px;
    --spacement-large: 20px;
    --spacement-x-large: 28px;

    /** Borders **/
    --border-radius: 2px;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-size: var(--body-default-font-size);
    font-family: var(--font-family);
  }
`;

export default GlobalStyles;
