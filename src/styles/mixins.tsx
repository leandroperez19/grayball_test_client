/* eslint-disable react-refresh/only-export-components */
import { css } from "styled-components";
import { desktop, tablet } from "./constants/sizes";

interface Flex {
    align: "initial" | "center" | "flex-end" | "flex-start" | "unset";
    justify: Flex["align"] | "space-between" | "space-evenly" | "space-around";
    direction: "row" | "column" | "unset";
}

export type Size =
    | `${number}px`
    | `${number}%`
    | `${number}rem`
    | `${number}em`;

export const flex = (
    align: Flex["align"] = "initial",
    justify: Flex["justify"] = "initial",
    direction: Flex["direction"] = "row",
    important = false
) => css`
    ${important ? "display: flex !important;" : "display: flex;"}
    align-items: ${align};
    justify-content: ${justify};
    flex-direction: ${direction};
`;

export const flexCenter = (direction: Flex["direction"] = "row") => css`
    ${flex("center", "center", direction)}
`;

export const square = (value: Size, important = false) => css`
    ${important && `${value}: ${value} !important;`}
    height: ${value};
    width: ${value};
`;

export const circle = (value: Size, important = false) => css`
    ${square(value, important)}
    border-radius: 100%;
`;

export const fullSize = () => css`
    ${square("100%")}
`;

export const GridResponsive = (minWidth: Size, autoFit = true) => css`
    display: grid;
    grid-template-columns: repeat(
        ${autoFit ? "auto-fit" : "auto-fill"},
        minmax(${minWidth}, 1fr)
    );
`;

export const truncateText = (lines: number, breakWord = false) => css`
    display: -webkit-box;
    -webkit-line-clamp: ${lines};
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;

    ${breakWord && "word-break: break-all"}
`;

export const pageContainer = () => css`
    top: 50px;
    width: 90%;
    margin-inline: auto;
    max-width: 400px;
    position: relative;
    padding-block: 40px;

    @media (width >= ${tablet}) {
        top: 80px;
        max-width: 720px;
        padding-block: 60px;
    }

    @media (width >= ${desktop}) {
        max-width: 1024px;
    }
`;

export const iOSOnly = (styles: string) => {
    return css`
        @supports (-webkit-touch-callout: none) {
            ${styles}
        }
    `;
};

export const NotIOS = (styles: string) => {
    return css`
        @supports not (-webkit-touch-callout: none) {
            ${styles}
        }
    `;
};
