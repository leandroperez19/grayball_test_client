"use client";

import styled from "styled-components";
import { buttonStatic } from "./button";
import { flexCenter, Size } from "@/styles/mixins";

type ButtonWrapperProps = {
    $size: buttonStatic["size"];
    $color: buttonStatic["color"];
    $radius: Size;
};

const getSize = (size: ButtonWrapperProps["$size"]) => {
    const map = {
        xs: "20px",
        sm: "32px",
        regular: "40px",
        lg: "48px",
    } as const;
    return map[size] ?? "40px";
};

export const ButtonWrapper = styled.button<ButtonWrapperProps>`
    height: ${({ $size }) => getSize($size)};
    background-color: ${({ theme, $color }) =>
        theme.buttons[$color].background};
    color: ${({ theme, $color }) => theme.buttons[$color].color};
    border-radius: ${({ $radius }) => $radius};
    ${flexCenter()}
    border: none;
    outline: none;
    transition: all 0.3s ease;

    &:disabled {
        opacity: 0.25;

        @media (hover: hover) {
            &:hover {
                cursor: not-allowed;
                background-color: ${({ theme, $color }) =>
                    theme.buttons[$color].background};
            }
        }
    }

    @media (hover: hover) {
        &:hover {
            background-color: ${({ theme, $color }) =>
                theme.buttons[$color].hoverBackground};
        }
    }
`;
