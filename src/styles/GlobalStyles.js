import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
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

    *, *::after, *::before {
        box-sizing: border-box;
    }   

    html {
        @media (max-width: 1080px) {
            font-size: 93.75%; // 15px
        }
        @media (max-width: 720px) {
            font-size: 87.5%; // 14px
        }
    }

    body {
        margin: 0;
        padding: 0;
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 700;
    } 

    a {
        color: inherit;
        text-decoration: none;
    }

    button, input, select, textarea {
        appearance: none;
        border: none;
        outline: none;
        cursor: pointer;
        padding: 0;
    }

    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }
`;
