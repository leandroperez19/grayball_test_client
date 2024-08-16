import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
        transition: color, background 0.2s ease-in-out;
        font-family: "Inter", sans-serif;
    }

    body {
        min-height: 100dvh;
        min-width: 100dvw;
        background-color: ${({ theme }) => theme.page.background};
    }

    // extra classes

    .px-4_5 {
        padding-inline: 18.5px;
    }

    .text-primary {
        color: ${({ theme }) => theme.palette.text.primary};
    }

    .text-secondary {
        color: ${({ theme }) => theme.palette.text.secondary};
    }
`;

export default GlobalStyles;
