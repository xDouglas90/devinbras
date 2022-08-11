import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    :root {
        font-family: Inter, Avenir, Helvetica, Arial, sans-serif;
        font-size: 16px;
        line-height: 24px;
        font-weight: 400;
    
        font-synthesis: none;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        -webkit-text-size-adjust: 100%;
    }

    * {
        box-sizing: border-box;
    }   

    body {
        margin: 0;
        padding: 0;
        font-family: inherit;
        font-size: inherit;
        line-height: inherit;
        font-weight: inherit;
        color: inherit;
        background-color: inherit;
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    button, input, select, textarea {
        appearance: none;
        font-family: inherit;
        font-size: inherit;
        line-height: inherit;
        font-weight: inherit;
        color: inherit;
        background-color: inherit;
        border: none;
        outline: none;
        cursor: pointer;
        padding: 0;
    }
`;
