import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
        transition: color, background 0.2s ease-in-out;
        font-family: "Inter", sans-serif;

        &::-webkit-scrollbar {
            background-color: ${({ theme }) => theme.page.background};
            width: 0.5rem;
        }

        &::-webkit-scrollbar-track {
            background-color: ${({ theme }) => theme.page.background};
        }

        &::-webkit-scrollbar-thumb {
            background-color: ${({ theme }) => theme.page.scrollbarThumb};
            border-radius: 0.25rem;
        }
    }

    body {
        min-height: 100dvh;
        min-width: 100dvw;
        background-color: ${({ theme }) => theme.page.background};
        overflow-x: hidden;
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
