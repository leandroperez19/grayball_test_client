"use client";

import { square } from "@/styles/mixins";
import styled from "styled-components";

type ToggleWrapperProps = {
    $toggled: boolean;
};

export const ToggleWrapper = styled.div<ToggleWrapperProps>`
    background-color: ${({ theme }) => theme.toggle.background};
    border-radius: 12px;
    width: 40px;
    height: 20px;
    padding: 3px;
    transition: background-color 0.3s ease;
    cursor: pointer;

    @media (hover: hover) {
        &:hover {
            background-color: ${({ theme }) => theme.toggle.hoverBackground};
        }
    }

    .ball {
        ${square("14px")}
        background-color: ${({ theme }) => theme.toggle.ball};
        border-radius: 50%;
        transform: translateX(
            ${({ $toggled }) => ($toggled ? "calc(100% + 4px)" : "2px")}
        );
        transition: all 0.3s ease;
    }
`;
