"use client";

import styled from "styled-components";

export const DropdownWrapper = styled.div`
    position: relative;

    &.disabled,
    &.disabled .option-selected {
        opacity: 0.5;
        cursor: not-allowed;
    }

    .option-selected {
        min-height: 50px;
        width: 100%;
        background-color: ${({ theme }) => theme.dropdown.background};
        color: ${({ theme }) => theme.dropdown.color};
        padding: 3px 10px;
        cursor: pointer;
        transition: background-color 0.3s ease;

        @media (hover: hover) {
            &:hover {
                background-color: ${({ theme }) =>
                    theme.dropdown.selectedHover};
            }
        }

        .label {
            color: ${({ theme }) => theme.dropdown.labelColor};
        }
    }

    .Options {
        position: absolute;
        width: 100%;
        top: 101%;
        left: 0;
        background-color: ${({ theme }) => theme.dropdown.optionsBg};
        z-index: 20;
        box-shadow: 0px 0px 4px #fff3;
        overflow-y: hidden;
        max-height: 0;
        animation: options-expand 0.3s forwards;

        &.inactive {
            animation: options-shrink 0.3s forwards;
        }

        .option {
            padding: 15px 10px;
            position: relative;
            cursor: pointer;
            transition: background-color 0.3s ease;
            color: ${({ theme }) => theme.dropdown.color};

            @media (hover: hover) {
                &:hover {
                    background-color: ${({ theme }) =>
                        theme.dropdown.optionHover};
                }
            }
        }

        .option:not(:last-of-type)::after {
            display: block;
            position: absolute;
            bottom: 0;
            width: calc(100% - 20px);
            height: 1px;
            background-color: #fff3;
            content: "";
            border-radius: 4px;
        }
    }

    @keyframes options-expand {
        100% {
            max-height: 250px;
        }
    }

    @keyframes options-shrink {
        0% {
            max-height: 250px;
        }
        100% {
            max-height: 0;
        }
    }
`;
