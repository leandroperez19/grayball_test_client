"use client";

import { desktop, largePhone, small, tiny } from "@/styles/constants/sizes";
import { square, truncateText } from "@/styles/mixins";
import styled from "styled-components";

export const ProductCardWrapper = styled.div`
    background-color: ${({ theme }) => theme.cards.background};
    color: ${({ theme }) => theme.cards.color};
    padding: 20px;
    min-height: 306px;
    position: relative;

    .top {
        height: 42px;
        font-size: ${tiny};

        .on-sale:not(:empty)::before {
            content: "";
            border-radius: 50%;
            background-color: ${({ theme }) => theme.palette.common.green};
            ${square("5px")};
            display: inline-block;
        }

        .in-stock {
            border-radius: 2px;
            color: ${({ theme }) => theme.palette.common.green};
            letter-spacing: 0.51px;
            padding: 3px 11px;
            border: 1px solid ${({ theme }) => theme.palette.common.green};
        }
    }

    p.description {
        ${truncateText(2)}
    }

    .buttons {
        position: absolute;
        bottom: 20px;
        left: 20px;
        width: calc(100% - 40px);
    }

    @media (width >= ${largePhone}) {
        min-height: 293px;
        padding: 10px 20px 20px;
    }

    @media (width >= ${desktop}) {
        padding: 20px;

        .buttons {
            bottom: 15px;
        }
    }
`;
