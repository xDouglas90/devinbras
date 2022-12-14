import { createGlobalStyle } from 'styled-components';

import colors from './colors';

import DMSansRegular from '@assets/fonts/DMSans-Regular.ttf';
import DMSansBold from '@assets/fonts/DMSans-Bold.ttf';

export const GlobalStyles = createGlobalStyle`
    @font-face {
        font-family: 'DMSans';
        src: url(${DMSansRegular}) format('truetype');
        font-weight: 400;
    }

    @font-face {
        font-family: 'DMSans';
        src: url(${DMSansBold}) format('truetype');
        font-weight: 700;
    }

    :root {
        font-family: 'DMSans', sans-serif;
        font-size: 16px;
        line-height: 24px;
        font-weight: 400;
    
        font-synthesis: none;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        -webkit-text-size-adjust: 100%;

        // Colors
        --brand-green: ${colors.brandGreen};
        --brand-green-hover: ${colors.brandGreenHover};
        --brand-green-lt: ${colors.brandGreenLight};
        --brand-green-lt2: ${colors.brandGreenLight2};
        --brand-beige: ${colors.brandBeige};
        --gray-headline: ${colors.grayHeadline};
        --gray-paragraph: ${colors.grayParagraph};
        --white: ${colors.white};
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
        background-color: var(--brand-green-lt);
        margin: 0;
        padding: 0;
    }

    h1, h2, h3, h4, h5, h6, strong {
        color: var(--gray-headline);
        font-weight: 700;
    } 

    p {
        color: var(--gray-paragraph);
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

    input, select, textarea {
        background-color: var(--brand-green-lt);
    }

    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }
`;
